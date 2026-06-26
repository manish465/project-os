import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { usePlans } from "../../plans/hooks/usePlans";
import { useCreatePlan } from "../../plans/hooks/useCreatePlan";
import PlanList from "../../plans/components/PlanList";
import CreatePlanDialog from "../../plans/components/CreatePlanDialog";

interface Props {
    projectId: string;
}

export default function PlansTab({ projectId }: Props) {
    const [open, setOpen] = useState(false);
    const plans = usePlans(projectId);
    const createPlan = useCreatePlan(projectId);

    return (
        <Stack spacing={3}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Phase
            </Button>

            <PlanList plans={plans.data ?? []} />

            <CreatePlanDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createPlan.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
