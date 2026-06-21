import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../api/goalApi";

export const useGoals = (projectId: string, problemId: string) => {
    return useQuery({
        queryKey: ["projects", projectId, "problems", problemId, "goals"],

        queryFn: () => getGoals(projectId, problemId),

        enabled: !!projectId && !!problemId,
    });
};
