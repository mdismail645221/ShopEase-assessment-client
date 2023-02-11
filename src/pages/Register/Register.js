import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { REGISTER, REGPAPER, REGSOCAILICONS } from './Register.styled';
import { AUTHCONTEXT } from '../../context/AuthProvider';
import { UploadImgBB } from '../../hooks/ImgUploadBB';
import { toast } from 'react-hot-toast';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Register = () => {
    const { user, registerSigin, updateUser, googleSignIn } = useContext(AUTHCONTEXT)
    console.log(user)
    const [regError, setRegError] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();




    const handleLoginInfo = (data) => {
   

        const imgFileData = (data.image[0]);


        registerSigin(data?.email, data?.password)
            .then((result) => {
                const user = result.user;
                // img upload operation hook target
                if (user) {
                    UploadImgBB(imgFileData).then(imgUrlLink => {
                        const userInfo = {
                            displayName: data?.name,
                            photoURL: imgUrlLink?.data?.display_url
                        }
                        if(userInfo){
                            updateUser(userInfo)
                            .then((result) => {
                                toast.success(`Successfully register your  ${result.user.displayName} or ${result?.user?.email} & ${result?.user?.photoURL}`)
                            })
                            .catch((error) => {
                                console.log(error)
                                setRegError(error)
                                toast.error(error)
                            })
                        }
                    })
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ error: { errorCode, errorMessage } })
                toast.error(errorCode)
            });

    }


    // google login functionality
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                // form.reset()
                toast.success("Successfully Login Good job", { duration: 3000 })
                //  navigate(from, { replace: true })
            })
            .catch(err => {
                //  setError(err.message)
                console.log(err)
            })
    }



    return (
        <REGISTER>
            <REGPAPER>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'center', padding: '1.5rem 0', fontWeight: 'bold', textTransform: 'uppercase' }}>Register</Typography>
                <form onSubmit={handleSubmit(handleLoginInfo)}>
                    <Stack spacing={3} >
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="text" sx={{ width: '100%',padding: '0px' }} label="Your Name" variant="outlined" {...register("name", { required: "Name is required" })} />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.name?.message}</p>}
                        </Box>
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="file" sx={{ width: '100%', }} variant="outlined" {...register("image", { required: "image file is required" })} />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.image?.message}</p>}
                        </Box>
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="email" sx={{ width: '100%', }} label="Email" variant="outlined" {...register("email", { required: "email is required" })} />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                        </Box>
                        <Box >
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="password" sx={{ width: '100%', }} label="Password" variant="outlined" {...register("password", { required: "password is required" })} required />
                            {errors.email && <p className='text-red-600 font-semibold'>{errors?.password?.message}</p>}
                        </Box>

                        <Box>
                            <Button type='submit' variant="contained">Submit</Button>
                        </Box>

                        <REGSOCAILICONS>
                            <IconButton onClick={handleGoogleLogin}><GoogleIcon /></IconButton>
                            <IconButton><GitHubIcon /></IconButton>
                        </REGSOCAILICONS>

                        {/* navigate user logic depended */}
                        <Box sx={{
                            '& a': { color: "blue" },
                            '& a:hover': { textDecoration: 'underline' }
                        }}>
                            <Typography>You have already create account?  <Link to='/login'>Create account</Link></Typography>
                        </Box>

                    </Stack>
                </form>
                {regError && <span className='text-red-600'>{Typography}</span>}
            </REGPAPER>
        </REGISTER>
    );
};

export default Register;