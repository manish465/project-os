import { Stack } from "@mui/material";
import DecisionCard from "./DecisionCard";
import type { Decision } from "../types/decision";

interface Props {
    decisions: Decision[];
}

export default function DecisionList({ decisions }: Props) {
    return (
        <Stack spacing={2}>
            {decisions.map((decision) => (
                <DecisionCard key={decision.id} decision={decision} />
            ))}
        </Stack>
    );
}
