import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import themeOptions from '../styles/themeOptions';

const theme = createTheme(themeOptions);

export default function Layout({ children }) {

    const DRAWER_WIDTH = 240;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="nav"
                    sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
                >
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                        }}
                        open
                    >
                        <Sidebar />
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1 }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </ThemeProvider >
    )
}