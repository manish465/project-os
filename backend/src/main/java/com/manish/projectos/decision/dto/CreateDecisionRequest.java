package com.manish.projectos.decision.dto;

import com.manish.projectos.decision.domain.DecisionConfidenceLevel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Set;
import java.util.UUID;

public record CreateDecisionRequest(
        @NotBlank
        String title,
        String problem,
        @NotBlank
        String chosenOption,
        String rationale,
        String tradeoffs,
        @NotNull
        DecisionConfidenceLevel confidenceLevel,
        Set<UUID> findingIds
) {
}
