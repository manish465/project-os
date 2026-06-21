import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

import type { Workspace } from "../types/workspace";

interface Props {
    workspace: Workspace;
}

export default function OverviewTab({ workspace }: Props) {
    return (
        <Stack spacing={3}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Problems</Typography>
                            <Typography variant="h3">
                                {workspace.problemCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Goals</Typography>

                            <Typography variant="h3">
                                {workspace.goalCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Research</Typography>

                            <Typography variant="h3">
                                {workspace.researchTopicCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}
