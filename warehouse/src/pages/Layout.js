import React from 'react';

import { AppBar, Button, CssBaseline, Stack, Box, Toolbar, Typography, Container, Grid, IconButton, Menu, MenuItem, Link, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/copyright';
import UserManage from '../components/admin';


export default function Layout({ children }) {
    const pages = ['about', 'service', 'blog'];
    const navigate = useNavigate()
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar sx={{ bgcolor: '#002884' }}>
                    <CarRentalIcon sx={{ mr: 2, fontSize: 40 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'inline', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={()=>{navigate(`/${page}`)}}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}

                    </Box>
                    <Box sx={{ flexGrow: 2, display: { xs: 'inline', md: 'flex' } }}>
                    <Link href='/home' underline='none' sx={{color: 'white' }}><Typography variant="h4" color="white" >House of Cars</Typography></Link></Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'inline', md: 'flex' } }}>
                        <UserManage />
                    </Box>
                </Toolbar>
            </AppBar>
            <div>{children}</div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h3" align="center" gutterBottom>
              Thank you !
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
        </>
    )

}