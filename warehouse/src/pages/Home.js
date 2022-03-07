import React, { useEffect, useState } from 'react';
import {AppBar, Button,CssBaseline, Stack, Box, Toolbar, Typography, Container, Grid} from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ConstructionIcon from '@mui/icons-material/Construction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homebg from '../photos/home-bg.jpg';
import Link from 'next/link';
import Layout from './Layout';
import Cars from '../components/cars';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

export default function Home () {
  const navigate = useNavigate()
  const goToAddPage = () => {
    navigate('/car/add')
  }
  const goToBookPage = () => {
    navigate('/schedule-repair')
  }
    return (
      <Layout>
        <ThemeProvider theme={theme}>
          
          <Grid component='main' sx={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',backgroundColor: 'rgba(0,0,0,0)',
            backgroundPosition: 'center',backdropFilter: "blur(3px)"
          }} >
            
            <Box
              sx={{ pt: 8, pb: 6,}}
            > <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Good Car for Good Moments
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={goToAddPage} variant="contained"sx={{ bgcolor: '#002884' }} ><CarRentalIcon/> Order new car</Button>
              <Button onClick={goToBookPage} variant="contained" > <ConstructionIcon/>Book car repair appointment</Button>
            </Stack>
            
          </Container>
        </Box>
              <Cars />
          </Grid>
          {/* Footer */}
          
          {/* End footer */}
        </ThemeProvider></Layout>
      );
}

