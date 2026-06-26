import { Card, CardContent, Stack, Typography } from "@mui/material";

import type { Architecture } from "../types/architecture";

interface Props {
    architecture: Architecture;
}

export default function ArchitectureCard({ architecture }: Props) {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6">{architecture.title}</Typography>

                    <Typography
                        sx={{
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {architecture.content}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
