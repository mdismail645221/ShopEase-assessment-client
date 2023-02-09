import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';

const Main = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </Container>
    );
};

export default Main;