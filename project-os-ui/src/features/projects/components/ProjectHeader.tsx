import { Paper, Stack, Typography } from "@mui/material";

import type { Project } from "../types/project";

interface Props {
    project: Project;
}

export default function ProjectHeader({ project }: Props) {
    return (
        <Paper sx={{ p: 3 }}>
            <Stack spacing={1}>
                <Typography variant="h4">{project.name}</Typography>
                <Typography color="text.secondary">
                    {project.description}
                </Typography>
                <Typography>Status: {project.status}</Typography>
            </Stack>
        </Paper>
    );
}
