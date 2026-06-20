import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProblem } from "../api/problemApi";

export const useCreateProblem = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: { title: string; description?: string }) =>
            createProblem(projectId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects", projectId, "problems"],
            });
        },
    });
};
