import {
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
    Button,
} from "@mui/material";
import type { ResearchTopic } from "../types/researchTopic";
import { useUpdateResearchTopic } from "../hooks/useUpdateResearchTopic";
import { useNavigate } from "react-router-dom";

interface Props {
    projectId: string;
    topic: ResearchTopic;
}

export default function ResearchTopicCard({ projectId, topic }: Props) {
    const navigate = useNavigate();
    const updateTopic = useUpdateResearchTopic(projectId);

    const startResearch = () => {
        updateTopic.mutate({
            researchId: topic.id,
            payload: {
                status: "IN_PROGRESS",
            },
        });
    };

    const completeResearch = () => {
        updateTopic.mutate({
            researchId: topic.id,
            payload: {
                status: "COMPLETED",
            },
        });
    };

    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6">{topic.title}</Typography>

                    <Typography color="text.secondary">
                        {topic.description}
                    </Typography>

                    <Chip label={topic.status} />
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() =>
                            navigate(
                                `/projects/${projectId}/research/${topic.id}`,
                            )
                        }
                    >
                        Open
                    </Button>

                    <Stack direction="row" spacing={1}>
                        {topic.status === "NOT_STARTED" && (
                            <Button
                                size="small"
                                variant="contained"
                                onClick={startResearch}
                            >
                                Start
                            </Button>
                        )}

                        {topic.status === "IN_PROGRESS" && (
                            <Button
                                size="small"
                                variant="contained"
                                onClick={completeResearch}
                            >
                                Complete
                            </Button>
                        )}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
