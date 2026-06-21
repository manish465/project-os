import { Alert, CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/ProjectHeader";
import { useWorkspace } from "../../workspace/hooks/useWorkspace";
import WorkspaceTabs from "../../workspace/components/WorkspaceTabs";

export default function ProjectDetailsPage() {
    const { projectId } = useParams();
    const workspaceQuery = useWorkspace(projectId!);

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
            <WorkspaceTabs
                projectId={projectId!}
                workspace={workspaceQuery.data}
            />
        </Stack>
    );
}
