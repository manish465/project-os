import { useQuery } from "@tanstack/react-query";

import { getResearchFindings } from "../api/researchFindingApi";

export const useResearchFindings = (researchTopicId: string) => {
    return useQuery({
        queryKey: ["research-findings", researchTopicId],
        queryFn: () => getResearchFindings(researchTopicId),
        enabled: !!researchTopicId,
    });
};
