
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

// SOCIAL ICONS STYLED
export const REGSOCAILICONS = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: "5px 5px 7px 7px #ddd",
    padding: '0.7rem',
    '& svg': {
        fontSize: '2rem',
        color: '#000'
    }
}));