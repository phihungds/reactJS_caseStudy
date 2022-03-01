import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import { Button, Checkbox } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css'


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

    const handleValidate = () => {
        const errors = {}
        if (regex.email.test(form.email)) {
            if (form.email !== admin.email) {
                errors.email = "Email is not correct."
            }
        }
        else {
            errors.email = "Invalid Email"
        }
        if (form.password !== admin.password) {
            errors.password = "Your password is not correct"
        }
        return errors
    }
    const handleSubmit = () => {

    }

    return (
        <>
            <h1>Welcome back</h1>
            <h2>Sign in</h2>
            <p>Enter your details below.</p>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ values, errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3 col-sm-4'>
                        <TextField required id='email' label="Email" variant="outlined" onChange={handleChange} name='email' fullWidth helperText={errors.email} />
                        </div>
                        <div className='mb-3 col-sm-4'>
                        <TextField required id='password' label="Password" type="password" variant="outlined" onChange={handleChange} name='password' fullWidth helperText={errors.password} />
                        </div>

                        <Checkbox color="success" label="Remember me" />
                        <a>Forgot account?</a>

                        <div className='mb-3 col-sm-4'>
                        <Button type='submit' variant="contained" color="success" fullWidth>Log In</Button></div>
                    </form>
                )}
            </Formik>
        </>
    )
}
export default Login