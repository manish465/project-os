package com.manish.projectos.research.dto;

import java.time.Instant;
import java.util.UUID;

public record ResearchTopicResponse(
        UUID id,
        UUID projectId,
        String title,
        String description,
        String status,
        Instant createdAt,
        Instant updatedAt
) {
}
