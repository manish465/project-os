import { useQuery } from "@tanstack/react-query";
import { getArchitectures } from "../api/architectureApi";

export const useArchitectures = (projectId: string) => {
    return useQuery({
        queryKey: ["architectures", projectId],
        queryFn: () => getArchitectures(projectId),
        enabled: !!projectId,
    });
};
