import { Stack } from "@mui/material";
import ResearchTopicCard from "./ResearchTopicCard";
import type { ResearchTopic } from "../types/researchTopic";

interface Props {
    projectId: string;
    topics: ResearchTopic[];
}

export default function ResearchTopicList({ projectId, topics }: Props) {
    return (
        <Stack spacing={2}>
            {topics.map((topic) => (
                <ResearchTopicCard
                    key={topic.id}
                    projectId={projectId}
                    topic={topic}
                />
            ))}
        </Stack>
    );
}
