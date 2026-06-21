import { Card, CardContent, Stack, Typography } from "@mui/material";

import type { Problem } from "../types/problem";

interface Props {
    problems: Problem[];
}

export default function ProblemList({ problems }: Props) {
    return (
        <Stack spacing={2}>
            {problems.map((problem) => (
                <Card key={problem.id}>
                    <CardContent>
                        <Typography variant="h6">{problem.title}</Typography>
                        <Typography color="text.secondary">
                            {problem.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
}
