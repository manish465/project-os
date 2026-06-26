import { api } from "../../../shared/api/api";
import type { Plan } from "../types/plan";

export interface CreatePlanRequest {
    title: string;
    description?: string;
    sequence: number;
}

export const getPlans = async (projectId: string): Promise<Plan[]> => {
    const response = await api.get(`/projects/${projectId}/plans`);

    return response.data.data;
};

export const createPlan = async (
    projectId: string,
    payload: CreatePlanRequest,
): Promise<Plan> => {
    const response = await api.post(`/projects/${projectId}/plans`, payload);

    return response.data.data;
};
