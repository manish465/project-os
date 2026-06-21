import { api } from "../../../shared/api/api";

export interface CreateResearchTopicRequest {
    title: string;
    description?: string;
}

export interface UpdateResearchTopicRequest {
    title?: string;
    description?: string;
    status?: string;
}

export const getResearchTopics = async (projectId: string) => {
    const response = await api.get(`/projects/${projectId}/research-topics`);

    return response.data.data;
};

export const createResearchTopic = async (
    projectId: string,
    payload: CreateResearchTopicRequest,
) => {
    const response = await api.post(
        `/projects/${projectId}/research-topics`,
        payload,
    );

    return response.data.data;
};

export const updateResearchTopic = async (
    projectId: string,
    researchId: string,
    payload: UpdateResearchTopicRequest,
) => {
    const response = await api.put(
        `/projects/${projectId}/research-topics/${researchId}`,
        payload,
    );

    return response.data.data;
};
