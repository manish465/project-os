package com.manish.projectos.researchfinding.dto;

import com.manish.projectos.researchfinding.domain.ResearchFindingType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateResearchFindingRequest(
        @NotNull
        ResearchFindingType type,
        @NotBlank
        String title,
        String content,
        String sourceUrl
) {
}
