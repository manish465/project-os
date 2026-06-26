import { useQuery } from "@tanstack/react-query";
import { getPlans } from "../api/planApi";

export const usePlans = (projectId: string) => {
    return useQuery({
        queryKey: ["plans", projectId],
        queryFn: () => getPlans(projectId),
        enabled: !!projectId,
    });
};
