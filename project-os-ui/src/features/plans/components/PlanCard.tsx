import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import type { Plan } from "../types/plan";

interface Props {
    plan: Plan;
}

export default function PlanCard({ plan }: Props) {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Chip label={`Phase ${plan.sequence}`} />
                    <Typography variant="h6">{plan.title}</Typography>
                    {plan.description && (
                        <Typography color="text.secondary">
                            {plan.description}
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
