import { api } from "../../../shared/api/api";

export const getGoals = async (projectId: string, problemId: string) => {
    const response = await api.get(
        `/projects/${projectId}/problems/${problemId}/goals`,
    );

    return response.data.data;
};

export const createGoal = async (
    projectId: string,
    problemId: string,
    payload: {
        title: string;
        description?: string;
    },
) => {
    const response = await api.post(
        `/projects/${projectId}/problems/${problemId}/goals`,
        payload,
    );

    return response.data.data;
};
