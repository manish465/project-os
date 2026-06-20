package com.manish.projectos.problem.dto;

import java.time.Instant;
import java.util.UUID;

public record ProblemResponse(
        UUID id,
        UUID projectId,
        String title,
        String description,
        Instant createdAt,
        Instant updatedAt
) {
}
