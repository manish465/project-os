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
