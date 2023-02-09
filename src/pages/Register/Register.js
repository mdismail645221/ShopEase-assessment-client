import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, PAPER } from '../../styled/login';

const Register = () => {
    return (
        <LOGIN>
            <PAPER>
                <Typography sx={{ fontSize: '2.5rem', textAlign: 'center', padding: '1.5rem 0', fontWeight: 'bold', textTransform: 'uppercase' }}>Register</Typography>
                <form>
                    <Stack spacing={3} >
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField sx={{ width: '100%', }} id="outlined-basic" label="Your Name" variant="outlined" />
                        </Box>
                        <Box>
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField sx={{ width: '100%', }} id="outlined-basic" label="Email" variant="outlined" />
                        </Box>
                        <Box >
                            {/* <label htmlFor="name">Name</label> */}
                            <TextField sx={{ width: '100%', }} type="password" id="outlined-basic" label="Password" variant="outlined" />
                        </Box>

                        <Box>
                            <Button type='submit' variant="contained">Submit</Button>
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