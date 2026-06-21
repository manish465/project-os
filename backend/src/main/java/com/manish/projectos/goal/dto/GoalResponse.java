package com.manish.projectos.goal.dto;

import java.time.Instant;
import java.util.UUID;

public record GoalResponse(
        UUID id,
        UUID problemId,
        String title,
        String description,
        Instant createdAt,
        Instant updatedAt
) {
}
