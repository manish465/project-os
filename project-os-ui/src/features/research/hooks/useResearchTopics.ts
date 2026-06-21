import { useQuery } from "@tanstack/react-query";

import { getResearchTopics } from "../api/researchTopicApi";

export const useResearchTopics = (projectId: string) => {
    return useQuery({
        queryKey: ["research-topics", projectId],
        queryFn: () => getResearchTopics(projectId),
        enabled: !!projectId,
    });
};
