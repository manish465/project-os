import { api } from "../../../shared/api/api";
import type { Architecture } from "../types/architecture";

export interface CreateArchitectureRequest {
    title: string;
    content: string;
}

export const getArchitectures = async (
    projectId: string,
): Promise<Architecture[]> => {
    const response = await api.get(`/projects/${projectId}/architectures`);
    return response.data.data;
};

export const createArchitecture = async (
    projectId: string,
    payload: CreateArchitectureRequest,
): Promise<Architecture> => {
    const response = await api.post(
        `/projects/${projectId}/architectures`,
        payload,
    );

    return response.data.data;
};
