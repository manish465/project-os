import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createResearchFinding } from "../api/researchFindingApi";

export const useCreateResearchFinding = (researchTopicId: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: {
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
        }) => createResearchFinding(researchTopicId, payload),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["research-findings", researchTopicId],
            });
        },
    });
};
