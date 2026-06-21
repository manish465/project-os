import { useQuery } from "@tanstack/react-query";
import { getDecisions } from "../api/decisionApi";

export const useDecisions = (projectId: string) => {
    return useQuery({
        queryKey: ["decisions", projectId],
        queryFn: () => getDecisions(projectId),
        enabled: !!projectId,
    });
};
