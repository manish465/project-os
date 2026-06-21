import {
    Alert,
    Button,
    CircularProgress,
    Stack,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ProblemList from "../../problems/components/ProblemList";
import ProjectHeader from "../components/ProjectHeader";
import CreateProblemDialog from "../../problems/components/CreateProblemDialog";
import { useState } from "react";
import { useCreateProblem } from "../../problems/hooks/useCreateProblem";
import { useWorkspace } from "../../workspace/hooks/useWorkspace";

export default function ProjectDetailsPage() {
    const { projectId } = useParams();
    const [open, setOpen] = useState(false);
    const workspaceQuery = useWorkspace(projectId!);
    const createProblem = useCreateProblem(projectId!);

    if (workspaceQuery.isLoading) {
        return <CircularProgress />;
    }

    if (!workspaceQuery.data) {
        return <Alert severity="error">Project not found</Alert>;
    }

    return (
        <Stack spacing={3}>
            <ProjectHeader
                project={{
                    id: workspaceQuery.data.projectId,
                    name: workspaceQuery.data.projectName,
                    description: workspaceQuery.data.description,
                    status: "ACTIVE",
                }}
            />
            <Typography variant="h4">Project Workspace</Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Problem
            </Button>
            <ProblemList
                projectId={projectId!}
                problems={workspaceQuery.data.problems ?? []}
            />
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
