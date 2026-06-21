import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createResearchTopic } from "../api/researchTopicApi";

export const useCreateResearchTopic = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: { title: string; description?: string }) =>
            createResearchTopic(projectId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["research-topics", projectId],
            });
        },
    });
};
