import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlan } from "../api/planApi";

export const useCreatePlan = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: {
            title: string;
            description?: string;
            sequence: number;
        }) => createPlan(projectId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["plans", projectId],
            });
        },
    });
};
