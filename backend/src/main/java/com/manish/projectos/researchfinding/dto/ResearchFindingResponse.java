package com.manish.projectos.researchfinding.dto;

import java.time.Instant;
import java.util.UUID;

public record ResearchFindingResponse(
        UUID id,
        UUID researchTopicId,
        String type,
        String title,
        String content,
        String sourceUrl,
        Instant createdAt,
        Instant updatedAt
) {
}
