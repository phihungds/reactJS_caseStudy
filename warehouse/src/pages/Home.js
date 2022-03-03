import React from 'react';
import {AppBar, Button,CssBaseline, Stack, Box, Toolbar, Typography, Container, Grid} from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import Copyright from '../components/copyright';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import homebg from '../photos/home-bg.jpg';
import {Link} from 'next/link'

import Cars from '../components/cars';
const theme = createTheme();

export default function Home () {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar sx={{bgcolor: '#002884'}}>
              <CarRentalIcon sx={{ mr: 2, fontSize: 40}} />
              <Typography variant="h6" color="inherit" noWrap>
                House of Cars
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid component='main' sx={{
            backgroundImage: `url(${homebg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',backgroundColor: 'rgba(0,0,0,0)',
            backgroundPosition: 'center',backdropFilter: "blur(3px)"
          }} >
            
            <Box
              sx={{
                
          
                pt: 8,
                pb: 6,
              }}
            > <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome back Administrator
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
              <Button variant="contained"sx={{ bgcolor: '#002884' }} >Import new car</Button>
              <Button variant="outlined" >Update warehouse</Button>
            </Stack>
            
          </Container>
        </Box>
              <Cars />
          </Grid>
          {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </Box>
          {/* End footer */}
        </ThemeProvider>
      );
}

