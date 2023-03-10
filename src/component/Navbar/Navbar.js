import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { AUTHCONTEXT } from '../../context/AuthProvider';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';












function Navbar(props) {

    const { user, LogOut } = React.useContext(AUTHCONTEXT);
    // console.log("navbar user info", user)

   



    const navItems = <>
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <NavLink to="/">
                    <ListItemText primary="Home" />
                </NavLink>
            </ListItemButton>
        </ListItem>
        {/* savecart */}
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <NavLink to="/saveCart">
                    <Badge badgeContent={5} color="primary">
                        {/* <MailIcon color="action" /> */}
                    <ListItemText primary="Savecart" />
                    </Badge>
                </NavLink>
            </ListItemButton>
        </ListItem>
        {/* login */}
        <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <NavLink to="/login">
                    <ListItemText primary="login" />
                </NavLink>
            </ListItemButton>
        </ListItem>
        {/* logout conditional rendaring */}
       {user && <ListItem disablePadding >
            <ListItemButton onClick={()=> LogOut()} sx={{ textAlign: 'center' }}>
                <NavLink to="/login">
                    <ListItemText primary="Logout" />
                </NavLink>
            </ListItemButton>
        </ListItem>}

        {/* user logo */}
       {user && <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                </IconButton>
            </ListItemButton>
        </ListItem>}
    </>




    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ShopEase
            </Typography>
            <Divider />
            <List>
                {navItems}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

  



    return (
        <Box sx={{
            display: 'flex', '& .css-11b3ww9-MuiPaper-root-MuiAppBar-root': {
                position: "static",
            },
            '& .css-10hburv-MuiTypography-root':{
                color: "#ffffff",
                fontWeight: 'bold'
            }
        }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ShopEase
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                        {navItems}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
