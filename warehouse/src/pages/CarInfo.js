import React, { useEffect, useState } from 'react';
import { AppBar, Button, CssBaseline, Stack, Box, Toolbar, Typography, Container, Grid, Paper, CardMedia, ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import carDetailbg from '../photos/car-details-bg.jpg'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


export default function CarInfo() {
    const { carId } = useParams()
    const [car, setCar] = useState({})
    const theme = createTheme();
    const [carImg, setCarImg] = useState('')
    useEffect(() => {
        if (carId) {
            axios.get(`http://localhost:3001/cars/${carId}`)
                .then((res) => {
                    setCar(res.data)

                })
                .catch((err) => { console.log(err) })

        }
    }, [carId])
    axios.get(`https://serpapi.com/search.json?q=${car.brand}${car.name}&tbm=isch&ijn=0&api_key=ff5d4da8d7ab4fa739c7caad841af4ac04c8d7f2343cb22828032e58fc270171`)
    .then((res) => {
                    setCarImg(res.data.inline_images.source)
                    console.log(res.data.inline_images.source)
                })

    return (

        <Layout>
            <ThemeProvider theme={theme}>
                <Grid component='main' sx={{
                    backgroundImage: `url(${carDetailbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    height: '150vh'
                }} >
                    <Box sx={{
                        backdropFilter: "blur(3px)",
                        backgroundColor: 'rgba(0,0,0,0)',
                        pt: 8, pb: 6
                    }}>
                        <Container maxWidth="md">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                {car.brand} {car.name}
                            </Typography>
                            <Box sx={{ display: 'flex' , width :1090}}>
                                <Grid  component={Paper}  sx={{
                                    backdropFilter: "blur(20px)",
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    flexGrow: 1
                                }}>
                                    <Typography sx={{ mt: 4, mb: 2, color: 'white' }} variant="h4" component="div" align='center'>
                                        Information
                                    </Typography>

                                    <List >
                                        <ListItem>
                                            <ListItemIcon>
                                                <CardGiftcardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText

                                            ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Date of debut : {car.debut}</Typography></ListItemText>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemIcon>
                                                <CardGiftcardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText

                                            ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Price : {car.price} $</Typography></ListItemText>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemIcon>
                                                <CardGiftcardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText

                                            ><Typography sx={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Remain in warehouse : {car.inventory} </Typography></ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CardGiftcardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText

                                            ><Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}> {car.description} </Typography></ListItemText>
                                        </ListItem>
                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, bgcolor: '#002884',
                                         }}
                                        >
                                            Purchase
                                        </Button>
                                    </List>

                                </Grid>


                                <Box
                                    component="img"
                                    sx={{
                                        height: 450,
                                        width: 700,
                                        ml: 10,
                                        borderRadius: 10,
                                    }}
                                    alt={car.name}
                                    src={carImg}
                                />

                            </Box>
                        </Container>
                    </Box>
                </Grid>

            </ThemeProvider>
        </Layout>
    )
}