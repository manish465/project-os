import { Button } from "@mui/material";
import ProblemList from "../../problems/components/ProblemList";

import type { Workspace } from "../types/workspace";
import CreateProblemDialog from "../../problems/components/CreateProblemDialog";
import { useState } from "react";
import { useCreateProblem } from "../../problems/hooks/useCreateProblem";

interface Props {
    projectId: string;
    workspace: Workspace;
}

export default function ProblemsTab({ projectId, workspace }: Props) {
    const [open, setOpen] = useState(false);
    const createProblem = useCreateProblem(projectId!);

    const problemsWithProject = workspace.problems.map((p) => ({
        ...p,
        projectId,
    }));
    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Problem
            </Button>
            <CreateProblemDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createProblem.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
            <ProblemList projectId={projectId} problems={problemsWithProject} />
        </>
    );
}
