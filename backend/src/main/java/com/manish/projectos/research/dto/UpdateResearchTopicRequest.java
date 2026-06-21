package com.manish.projectos.research.dto;

import com.manish.projectos.research.domain.ResearchTopicStatus;
import jakarta.validation.constraints.NotBlank;

public record UpdateResearchTopicRequest(
        String title,
        String description,
        ResearchTopicStatus status
) {
}
