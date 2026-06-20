import { useQuery } from "@tanstack/react-query";
import { getProblems } from "../api/problemApi";

export const useProblems = (projectId: string) => {
    return useQuery({
        queryKey: ["projects", projectId, "problems"],
        queryFn: () => getProblems(projectId),
        enabled: !!projectId,
    });
};
