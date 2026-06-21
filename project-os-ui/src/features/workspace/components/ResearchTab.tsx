import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useResearchTopics } from "../../research/hooks/useResearchTopics";
import { useCreateResearchTopic } from "../../research/hooks/useCreateResearchTopic";
import ResearchTopicList from "../../research/components/ResearchTopicList";
import CreateResearchTopicDialog from "../../research/components/CreateResearchTopicDialog";

interface Props {
    projectId: string;
}

export default function ResearchTab({ projectId }: Props) {
    const [open, setOpen] = useState(false);

    const researchQuery = useResearchTopics(projectId);

    const createResearch = useCreateResearchTopic(projectId);

    return (
        <Stack spacing={3}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Add Research Topic
            </Button>

            <ResearchTopicList
                projectId={projectId}
                topics={researchQuery.data ?? []}
            />

            <CreateResearchTopicDialog
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={(data) => {
                    createResearch.mutate(data, {
                        onSuccess: () => setOpen(false),
                    });
                }}
            />
        </Stack>
    );
}
