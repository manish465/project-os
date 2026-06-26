import { Stack } from "@mui/material";
import PlanCard from "./PlanCard";
import type { Plan } from "../types/plan";

interface Props {
    plans: Plan[];
}

export default function PlanList({ plans }: Props) {
    return (
        <Stack spacing={2}>
            {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
            ))}
        </Stack>
    );
}
