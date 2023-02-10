import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { REGISTER, REGPAPER } from './Register.styled';
import { AUTHCONTEXT } from '../../context/AuthProvider';
import { UploadImgBB } from '../../hooks/ImgUploadBB';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { user, registerSigin, updateUser } = useContext(AUTHCONTEXT)
    console.log(user)
    const [regError, setRegError] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();




    const handleLoginInfo = (data) => {

        const imgFileData = (data.image[0]);


        registerSigin(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // img upload operation hook target
                if(user){
                    UploadImgBB(imgFileData).then(imgUrlLink => {
                        const userInfo = {
                            displayName: data?.name,
                            photoURL: imgUrlLink?.data?.display_url
                        }
                        updateUser(userInfo)
                            .then((result) => {
                                toast.success(`Successfully register your  ${result.user.displayName} or ${result?.user?.email} & ${result?.user?.photoURL}`)
                            })
                            .catch((error) => {
                                console.log(error.message)
                                setRegError(error)
                                toast.error(error.message)
                            })
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

    return (
        <REGISTER>
            <REGPAPER>
                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center', padding: '1.5rem 0', fontWeight: 'bold', textTransform: 'uppercase' }}>Register</Typography>
                <form onSubmit={handleSubmit(handleLoginInfo)}>
                    <Stack spacing={3} >
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField type="text" sx={{ width: '100%', }} label="Your Name" variant="outlined" {...register("name", { required: "Name is required" })} />
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

                        <Box sx={{
                            '& a': { color: "blue" },
                            '& a:hover': { textDecoration: 'underline' }
                        }}>
                            <Typography>You have already create account?  <Link to='/login'>Create account</Link></Typography>
                        </Box>

                    </Stack>
                </form>
            </REGPAPER>
        </REGISTER>
    );
};

export default Register;