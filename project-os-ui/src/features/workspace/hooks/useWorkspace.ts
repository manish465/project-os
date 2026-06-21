import { useQuery } from "@tanstack/react-query";

import { getWorkspace } from "../api/workspaceApi";

export const useWorkspace = (projectId: string) => {
    return useQuery({
        queryKey: ["workspace", projectId],
        queryFn: () => getWorkspace(projectId),
        enabled: !!projectId,
    });
};
