import {
    Alert,
    Button,
    Chip,
    CircularProgress,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useResearchTopic } from "../hooks/useResearchTopic";
import { useState } from "react";
import { useResearchFindings } from "../../research-findings/hooks/useResearchFindings";
import { useCreateResearchFinding } from "../../research-findings/hooks/useCreateResearchFinding";
import ResearchFindingList from "../../research-findings/components/ResearchFindingList";
import CreateResearchFindingDialog from "../../research-findings/components/CreateResearchFindingDialog";

export default function ResearchTopicDetailsPage() {
    const { projectId, researchId } = useParams();
    const [open, setOpen] = useState(false);
    const findingsQuery = useResearchFindings(researchId!);
    const createFinding = useCreateResearchFinding(researchId!);
    const query = useResearchTopic(projectId!, researchId!);

    if (query.isLoading) {
        return <CircularProgress />;
    }

    if (!query.data) {
        return <Alert severity="error">Research topic not found</Alert>;
    }

    const topic = query.data;

    return (
        <Stack spacing={3}>
            <Paper sx={{ p: 3 }}>
                <Stack spacing={2}>
                    <Typography variant="h4">{topic.title}</Typography>
                    <Typography>{topic.description}</Typography>
                    <Chip label={topic.status} />
                </Stack>
            </Paper>
            <Stack spacing={3}>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Add Finding
                </Button>
                <ResearchFindingList findings={findingsQuery.data ?? []} />
            </Stack>
            <CreateResearchFindingDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createFinding.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
