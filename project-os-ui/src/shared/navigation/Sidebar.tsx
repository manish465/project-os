import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "./navigationItems";

const drawerWidth = 240;

export default function Sidebar() {
    const location = useLocation();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />

            <List>
                {navigationItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        component={Link}
                        to={item.path}
                        selected={location.pathname.startsWith(item.path)}
                    >
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
}
