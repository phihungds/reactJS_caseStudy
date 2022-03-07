import { useState } from "react";
import { Typography, Box, Container, CssBaseline, Grid,   Button, ThemeProvider, createTheme, Link } from "@mui/material";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from "./Layout";
import CssTextField from '../components/customStyle';
import repairbg from '../photos/repairbg.jpg'
import Swal from "sweetalert2";

export default function ScheduleRepair() {
    const navigate = useNavigate()
    const [schedule, setSchedule] = useState({})
    const theme = createTheme();

    function handleChange(event) {
        setSchedule({
            ...schedule,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit() {
        axios.post('http://localhost:3001/repair', schedule)
            .then((res) => {
                Swal.fire(
                    'Success!',
                    `Your ${schedule.brand} ${schedule.name} is added to our calendar`,
                    'success'
                  )
            })
            .catch((err) => { throw err })
            .finally(() => {  })
            navigate('/home')
    }
    return (
        <Layout>
            <ThemeProvider theme={theme} >
            <Grid component='main' sx={{
        height: '100vh',
        backgroundImage: `url(${repairbg})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: 'cover',
        backgroundPosition: 'center'}} >
                <Container maxWidth="xs" square sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: 'rgba(0,0,0,0)'
        }} >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3" sx={{mt: 5}}>
                            Order new Car
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <CssTextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        id="id"
                                        label="ID of Car"
                                        name="index"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        autoComplete="given-name"
                                        name="guest"
                                        required
                                        fullWidth
                                        id="guest"
                                        label="Your Name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        id="car"
                                        label="Your car name"
                                        name="car"
                                        autoComplete="family-name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        onChange={handleChange}
                                        type='date'
                                        required
                                        fullWidth
                                        id="date"
                                        label="Date you want to repair"
                                        name="date"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                    onChange={handleChange}
                                        required
                                        fullWidth
                                        name="category"
                                        label="Category"
                                        placeholder="What do you want we to do with your car?"
                                        
                                        id="category"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                
                            </Grid>
                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#002884' }}
                            >
                                Book
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        You want edit exist car? Click here
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container></Grid>
            </ThemeProvider>
        </Layout>
    )
}