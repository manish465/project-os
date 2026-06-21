import { useQuery } from "@tanstack/react-query";
import { getProjectFindings } from "../api/researchFindingApi";

export const useProjectFindings = (projectId: string) => {
    return useQuery({
        queryKey: ["project-findings", projectId],
        queryFn: () => getProjectFindings(projectId),
        enabled: !!projectId,
    });
};
