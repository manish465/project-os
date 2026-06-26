import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArchitecture } from "../api/architectureApi";

export const useCreateArchitecture = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: { title: string; content: string }) =>
            createArchitecture(projectId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["architectures", projectId],
            });
        },
    });
};
