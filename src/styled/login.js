import { Paper, styled } from "@mui/material";

export const LOGIN = styled('div')(({ theme }) => ({
    width: '100%',
    background: 'gray',
    height: '100vh',
    display: 'grid',
    placeItems: 'center'
}));
export const PAPER = styled(Paper)(({ theme }) => ({
    width: '500px',
    background: 'red',
    height: '500px'
}));