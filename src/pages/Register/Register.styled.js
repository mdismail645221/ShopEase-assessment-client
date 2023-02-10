
import { Box, Paper, styled } from "@mui/material";

export const REGISTER = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#eeeeee',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    padding: '3rem 0px'
}));

export const REGPAPER = styled(Paper)(({ theme }) => ({
    width: '450px',
    background: '#ffffff',
    height: '100%',
    padding: '1rem',
    boxShadow: '5px 7px 7px 5px #dddddd',
    // marginTop: '5rem'
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
        fontSize: '1.5rem',
        color: '#000'
    }
}));