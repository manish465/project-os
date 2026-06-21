import {
    Alert,
    Button,
    CircularProgress,
    Stack,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ProblemList from "../../problems/components/ProblemList";
import { useProblems } from "../../problems/hooks/useProblems";
import ProjectHeader from "../components/ProjectHeader";
import { useProject } from "../hooks/useProjects";
import CreateProblemDialog from "../../problems/components/CreateProblemDialog";
import { useState } from "react";
import { useCreateProblem } from "../../problems/hooks/useCreateProblem";

export default function ProjectDetailsPage() {
    const { projectId } = useParams();
    const [open, setOpen] = useState(false);
    const projectQuery = useProject(projectId!);
    const problemsQuery = useProblems(projectId!);
    const createProblem = useCreateProblem(projectId!);

    if (projectQuery.isLoading) {
        return <CircularProgress />;
    }

    if (!projectQuery.data) {
        return <Alert severity="error">Project not found</Alert>;
    }

    return (
        <Stack spacing={3}>
            <ProjectHeader project={projectQuery.data} />
            <Typography variant="h4">Project Workspace</Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Problem
            </Button>
            <ProblemList problems={problemsQuery.data ?? []} />
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
