import { Box, Button, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AUTHCONTEXT } from '../../context/AuthProvider';
import { LOGIN, PAPER } from '../../styled/login';
import { REGSOCAILICONS } from '../Register/Register.styled';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useForm} from 'react-hook-form';


const Login = () => {
    const [error, setError] = useState(null)
    const {register, handleSubmit, formState:{errors} }= useForm();
    const {googleSignIn, signIn} = useContext(AUTHCONTEXT)


    


    // user sign in method in firebase 
    const handleSignin = (data) => {
        const {email, password} = data;
        signIn(email, password)
        .then(result => {
            setError(null)
            const user = result.user;
            console.log(user);
            toast.success(`GOOD JOB. SUCCESSFULLY LOGIN ${user?.email}`)
        })
        .catch((error)=> {
            setError(error)
        })
    }

        // google login functionality
        const handleGoogleLogin = () => {
            googleSignIn()
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    toast.success("Successfully Login Good job", { duration: 3000 })
                    //  navigate(from, { replace: true })
                })
                .catch(err => {
                     setError(err.message)
                    console.log(err)
                })
        }

    return (
        <LOGIN>
            <PAPER>
                <Typography sx={{fontSize: '1.5rem', textAlign: 'center', padding: '1.5rem 0', fontWeight: 'bold'}}>LOGIN</Typography>
                <form onSubmit={handleSubmit(handleSignin)}>
                    <Stack spacing={3} >
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField sx={{ width: '100%', }} id="outlined-basic" label="Email" variant="outlined" {...register("email", { required: "email is required" })} />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </Box>
                        <Box >
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField sx={{width: '100%',}} type="password" id="outlined-basic" label="Password" variant="outlined" {...register("password", {required: "password is required"})} />
                            {errors.password && <p className='text-red-600 font-semibold'>{errors?.password?.message}</p>}
                        </Box>

                        <Box>
                            <Button type="submit" value="submit" variant="contained">Submit</Button>
                        </Box>

                        <Box sx={{
                            '& a':{color: "blue"},
                            '& a:hover':{textDecoration: 'underline'}
                            }}>
                            <Typography>have you already <Link to='/register'>register</Link></Typography>
                        </Box>

                        <REGSOCAILICONS>
                            <IconButton onClick={handleGoogleLogin}><GoogleIcon /></IconButton>
                            <IconButton><GitHubIcon /></IconButton>
                        </REGSOCAILICONS>


                    </Stack>
                </form>
            </PAPER>
        </LOGIN>
    );
};

export default Login;