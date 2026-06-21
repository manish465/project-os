package com.manish.projectos.decision.dto;

import java.util.Set;
import java.util.UUID;

public record DecisionResponse(
        UUID id,
        UUID projectId,
        String title,
        String problem,
        String chosenOption,
        String rationale,
        String tradeoffs,
        String confidenceLevel,
        Set<UUID> findingIds
) {
}
