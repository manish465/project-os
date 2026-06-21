import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useDecisions } from "../../decisions/hooks/useDecisions";
import { useCreateDecision } from "../../decisions/hooks/useCreateDecision";
import { useProjectFindings } from "../../research-findings/hooks/useProjectFindings";
import DecisionList from "../../decisions/components/DecisionList";
import CreateDecisionDialog from "../../decisions/components/CreateDecisionDialog";

interface Props {
    projectId: string;
}

export default function DecisionsTab({ projectId }: Props) {
    const [open, setOpen] = useState(false);
    const decisions = useDecisions(projectId);
    const findings = useProjectFindings(projectId);
    const createDecision = useCreateDecision(projectId);

    return (
        <Stack spacing={3}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Decision
            </Button>
            <DecisionList decisions={decisions.data ?? []} />
            <CreateDecisionDialog
                open={open}
                findings={findings.data ?? []}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createDecision.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
