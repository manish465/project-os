package com.manish.projectos.project.dto;

import java.time.Instant;
import java.util.UUID;

public record ProjectResponse(
        UUID id,
        String name,
        String description,
        String status,
        Instant createdAt,
        Instant updatedAt
) {
}
