package com.manish.projectos.research.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateResearchTopicRequest(
        @NotBlank
        String title,
        String description
) {
}
