
import { Box, Paper, styled } from "@mui/material";

export const REGISTER = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#eeeeee',
    height: '100vh',
    display: 'grid',
    placeItems: 'center'
}));

export const REGPAPER = styled(Paper)(({ theme }) => ({
    width: '500px',
    background: '#ffffff',
    height: '700px',
    padding: '1rem',
    boxShadow: '5px 7px 7px 5px #dddddd'
}));