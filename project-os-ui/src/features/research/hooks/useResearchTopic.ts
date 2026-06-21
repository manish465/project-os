import { useQuery } from "@tanstack/react-query";

import { getResearchTopic } from "../api/researchTopicApi";

export const useResearchTopic = (projectId: string, researchId: string) => {
    return useQuery({
        queryKey: ["research-topic", researchId],
        queryFn: () => getResearchTopic(projectId, researchId),
        enabled: !!projectId && !!researchId,
    });
};
