import {
    Alert,
    Chip,
    CircularProgress,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useResearchTopic } from "../hooks/useResearchTopic";

export default function ResearchTopicDetailsPage() {
    const { projectId, researchId } = useParams();

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
            <Paper sx={{ p: 3 }}>
                <Typography variant="h5">Findings</Typography>
                <Typography color="text.secondary">No findings yet.</Typography>
            </Paper>
        </Stack>
    );
}
