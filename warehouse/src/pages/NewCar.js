
import { Typography, Box, Container, CssBaseline, Avatar, Grid, FormControlLabel, Checkbox, Button, ThemeProvider, createTheme, Link } from "@mui/material";
import CarRentalIcon from '@mui/icons-material/CarRental';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from "./Layout";
import CssTextField from '../components/customStyle';
import addbg from "../photos/cars-photos/import-car-bg.jpg"

export default function NewCar() {

    const { carId } = useParams()
    const [car, setCar] = useState({})
    const theme = createTheme();
    useEffect(() => {
        if (carId) {
            axios.get(`http://localhost:3001/cars/${carId}`)
                .then((res) => {
                    setCar(res.data)
                })
                .catch((err) => { console.log(err) })
        }
    }, [carId])

    function handleSubmit() {
        axios.post('http://localhost:3001/cars', car)
            .then((res) => {
                alert(` car success`)
            })
            .catch((err) => { throw err })
            .finally(() => {  })
    }
    
    return (
        <Layout>
            <ThemeProvider theme={theme} >
            <Grid component='main' sx={{
        height: '100vh',
        backgroundImage: `url(${addbg})`,
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
                                        required
                                        fullWidth
                                        id="id"
                                        label="ID of Car"
                                        name="id"
                                        autoComplete="email"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                        autoComplete="given-name"
                                        name="brand"
                                        required
                                        fullWidth
                                        id="brand"
                                        label="Brand Name"
                                        autoFocus
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CssTextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Car Name"
                                        name="name"
                                        autoComplete="family-name"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        required
                                        fullWidth
                                        id="inventory"
                                        label="Amount"
                                        name="inventory"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        required
                                        fullWidth
                                        name="price"
                                        label="Price"
                                        type="number"
                                        id="price"
                                        InputLabelProps={{
                                            style: { color: 'white' },
                                          }}
                                    />
                                </Grid>
                                
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: '#002884' }}
                            >
                                Import
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