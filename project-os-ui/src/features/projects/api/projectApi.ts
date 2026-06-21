import { api } from "../../../shared/api/api";

export const getProjects = async () => {
    const response = await api.get("/projects");
    return response.data.data;
};

export const createProject = async (payload: {
    name: string;
    description?: string;
}) => {
    const response = await api.post("/projects", payload);
    return response.data.data;
};

export const getProject = async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}`);
    return response.data.data;
};

export const updateProject = async (
    projectId: string,
    payload: {
        name: string;
        description: string;
    },
) => {
    const response = await api.put(`/projects/${projectId}`, payload);
    return response.data.data;
};

export const archiveProject = async (projectId: string) => {
    await api.delete(`/projects/${projectId}`);
};
