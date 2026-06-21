import { Card, CardContent, Grid, Typography } from "@mui/material";

import type { Workspace } from "../types/workspace";

interface Props {
    workspace: Workspace;
}

export default function OverviewTab({ workspace }: Props) {
    const problemCount = workspace.problems.length;

    const goalCount = workspace.problems.reduce(
        (total, problem) => total + problem.goals.length,
        0,
    );

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Problems</Typography>

                        <Typography variant="h3">{problemCount}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Goals</Typography>

                        <Typography variant="h3">{goalCount}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
