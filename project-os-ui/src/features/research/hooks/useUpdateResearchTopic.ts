import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateResearchTopic } from "../api/researchTopicApi";

export const useUpdateResearchTopic = (projectId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            researchId,
            payload,
        }: {
            researchId: string;
            payload: {
                status?: string;
            };
        }) => updateResearchTopic(projectId, researchId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["research-topics", projectId],
            });
        },
    });
};
