import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Grid, Link, Box, Paper, Avatar, Typography, FormControlLabel, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import 'bootstrap/dist/css/bootstrap.css'
import loginimg from '../photos/login-background.jpg'
import Copyright from './copyright';
import CssTextField from './customStyle';


function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const admin = {
    email: 'phihung@admin.com',
    password: '1234'
  }
  const theme = createTheme()
  

  const handleValidate = () => {
    const errors = { emailCheck: false, passCheck: false }

    if (regex.email.test(form.email)) {
      if (form.email !== admin.email) {
        errors.email = "Email is not correct.";
        errors.emailCheck = true
      }
      else { errors.emailCheck = false }
    }
    else {
      errors.email = "Invalid Email"
      errors.emailCheck = true
    }
    if (form.password !== admin.password) {
      errors.password = "Your password is not correct"
      errors.passCheck = true
    }
    else {
      errors.passCheck = false
    }
    return errors
  }
  const handleSubmit = () => {

  }
  
  return (
    <>


      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit }) => (

          <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{
              height: '100vh', 
              backgroundImage: `url(${loginimg})`,
                  backgroundRepeat: 'repeat',
                  
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
            }}>
              <CssBaseline />
              <Grid
                
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  
                }}
                
              />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                backdropFilter: "blur(20px)",
                backgroundColor:'rgba(0,0,0,0)'
              }}>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                ><h1>House of Cars</h1>
                  
                  <Avatar sx={{ m: 1, bgcolor: '#002884', width: 70, height: 70 }}>
                    <CarRentalIcon sx= {{fontSize: 	50}} />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <CssTextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      error={errors.emailCheck}
                      helperText={errors.email}
                      onChange={handleChange}
                      
                    />
                    <CssTextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      error={errors.passCheck}
                      helperText={errors.password}
                      onChange={handleChange}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" sx={{color : 'white'}} />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 , bgcolor: '#002884'}}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" sx={{color: 'white'}}>
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/register" variant="body2" sx={{color: 'white'}}>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>

        )}
      </Formik>
      <Grid></Grid>
    </>
  )
}
export default Login