import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";

export default function MainLayout() {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">Project OS</Typography>
                </Toolbar>
            </AppBar>

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
