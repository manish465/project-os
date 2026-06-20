import { api } from "../../../shared/api/api";

export interface CreateProblemRequest {
    title: string;
    description?: string;
}

export const getProblems = async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}/problems`);
    return response.data.data;
};

export const createProblem = async (
    projectId: string,
    payload: CreateProblemRequest,
) => {
    const response = await api.post(`/projects/${projectId}/problems`, payload);
    return response.data.data;
};
