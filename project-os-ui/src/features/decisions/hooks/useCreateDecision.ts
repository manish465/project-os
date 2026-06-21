import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDecision } from "../api/decisionApi";

export const useCreateDecision = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: any) => createDecision(projectId, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["decisions", projectId],
            });
        },
    });
};
