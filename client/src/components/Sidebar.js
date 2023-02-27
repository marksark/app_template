import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

const navItems = [
    {
        text: 'Notifications',
        icon: <NotificationsNoneIcon />,
    },
    {
        text: 'Settings',
        icon: <SettingsOutlinedIcon />,
    },
    {
        text: 'Account',
        icon: <AccountCircleOutlinedIcon />,
    }
];
const sideItems = [
    {
        text: 'Clients',
        icon: <PersonOutlinedIcon />
    },
    {
        text: 'Programs',
        icon: <TextSnippetOutlinedIcon />
    },
    {
        text: 'Services',
        icon: <WidgetsOutlinedIcon />
    },
    {
        text: 'Workers',
        icon: <Person4OutlinedIcon />
    },
    {
        text: 'Schoools',
        icon: <SchoolOutlinedIcon />
    },
    {
        text: 'Reports',
        icon: <PieChartOutlineOutlinedIcon />
    }
]

export default function Sidebar({ handleDrawerToggle }) {
    return (
        <Box onClick={handleDrawerToggle}>
            <Toolbar />
            <List>
                {sideItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}