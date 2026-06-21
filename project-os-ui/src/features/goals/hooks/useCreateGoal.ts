import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createGoal } from "../api/goalApi";

export const useCreateGoal = (projectId: string, problemId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: { title: string; description?: string }) =>
            createGoal(projectId, problemId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "projects",
                    projectId,
                    "problems",
                    problemId,
                    "goals",
                ],
            });
        },
    });
};
