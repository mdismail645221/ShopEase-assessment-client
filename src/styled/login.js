import { Paper, styled } from "@mui/material";

export const LOGIN = styled('div')(({ theme }) => ({
    width: '100%',
    background: '#ffffff',
    height: '100vh',
    display: 'grid',
    placeItems: 'center'
}));


export const PAPER = styled(Paper)(({ theme }) => ({
    width: '400px',
    background: '#ffffff',
    height: '500px',
    padding: '1rem',
    boxShadow: '5px 7px 7px 5px #dddddd'
}));