import { api } from "../../../shared/api/api";

export const getWorkspace = async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}/workspace`);

    return response.data.data;
};
