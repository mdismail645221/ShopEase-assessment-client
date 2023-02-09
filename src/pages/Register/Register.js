import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, PAPER } from '../../styled/login';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleLoginInfo = (data) => {
        console.log(data)
    }

    return (
        <LOGIN>
            <PAPER>
                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center', padding: '1.5rem 0', fontWeight: 'bold', textTransform: 'uppercase' }}>Register</Typography>
                <form onSubmit={handleSubmit(handleLoginInfo)}>
                    <Stack spacing={3} >
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="text" sx={{ width: '100%', }} id="outlined-basic" label="Your Name" variant="outlined" {...register("name", { required: "Name is required" })}   />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </Box>
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="email" sx={{ width: '100%', }} id="outlined-basic" label="Email" variant="outlined" {...register("email", { required: "email is required" })}  />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </Box>
                        <Box >
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="password" sx={{ width: '100%', }}  id="outlined-basic" label="Password" variant="outlined" {...register("password", { required: "password is required" })}  />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </Box>

                        <Box>
                            <Button type='submit' variant="subit">Submit</Button>
                        </Box>

                        <Box sx={{
                            '& a': { color: "blue" },
                            '& a:hover': { textDecoration: 'underline' }
                        }}>
                            <Typography>have you already <Link to='/login'>Login</Link></Typography>
                        </Box>

                    </Stack>
                </form>
            </PAPER>
        </LOGIN>
    );
};

export default Register;