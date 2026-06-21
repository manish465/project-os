import { api } from "../../../shared/api/api";

export interface CreateResearchFindingRequest {
    type:
        | "NOTE"
        | "ARTICLE"
        | "VIDEO"
        | "DOCUMENTATION"
        | "EXPERIMENT"
        | "BENCHMARK";

    title: string;

    content?: string;

    sourceUrl?: string;
}

export const getResearchFindings = async (researchTopicId: string) => {
    const response = await api.get(
        `/research-topics/${researchTopicId}/findings`,
    );

    return response.data.data;
};

export const createResearchFinding = async (
    researchTopicId: string,
    payload: CreateResearchFindingRequest,
) => {
    const response = await api.post(
        `/research-topics/${researchTopicId}/findings`,
        payload,
    );

    return response.data.data;
};
