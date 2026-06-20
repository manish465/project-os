import { Button, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProblemList from "../../problems/components/ProblemList";
import CreateProblemDialog from "../../problems/components/CreateProblemDialog";
import { useState } from "react";
import { useProblems } from "../../problems/hooks/useProblems";
import { useCreateProblem } from "../../problems/hooks/useCreateProblem";

export default function ProjectDetailsPage() {
    const { projectId } = useParams();
    const [open, setOpen] = useState(false);
    const { data: problems = [] } = useProblems(projectId!);
    const createProblem = useCreateProblem(projectId!);

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Project Workspace</Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Problem
            </Button>
            <ProblemList problems={problems} />
            <CreateProblemDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createProblem.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
