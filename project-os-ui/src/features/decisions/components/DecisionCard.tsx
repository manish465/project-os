import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import type { Decision } from "../types/decision";

interface Props {
    decision: Decision;
}

export default function DecisionCard({ decision }: Props) {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6">{decision.title}</Typography>

                    <Chip label={decision.confidenceLevel} />

                    <Typography>Chosen: {decision.chosenOption}</Typography>

                    {decision.rationale && (
                        <Typography>{decision.rationale}</Typography>
                    )}

                    {decision.tradeoffs && (
                        <Typography color="text.secondary">
                            Tradeoffs: {decision.tradeoffs}
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}
