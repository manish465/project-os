import { api } from "../../../shared/api/api";

export const getDecisions = async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}/decisions`);
    return response.data.data;
};

export const createDecision = async (projectId: string, payload: any) => {
    const response = await api.post(
        `/projects/${projectId}/decisions`,
        payload,
    );

    return response.data.data;
};
