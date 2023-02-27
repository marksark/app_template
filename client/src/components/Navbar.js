import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from './Sidebar';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const DRAWER_WIDTH = 240;

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        PLNet Link
                    </Typography>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <NotificationsNoneIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: DRAWER_WIDTH
                        }
                    }}
                >
                    <Sidebar handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </Box>
        </Box>
    );
};