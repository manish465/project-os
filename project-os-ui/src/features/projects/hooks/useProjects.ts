import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../api/projectApi";

export const useProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
    });
};

export const useProject = (projectId: string) => {
    return useQuery({
        queryKey: ["project", projectId],
        queryFn: () => getProject(projectId),
        enabled: !!projectId,
    });
};
