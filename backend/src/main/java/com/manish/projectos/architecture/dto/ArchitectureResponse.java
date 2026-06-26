package com.manish.projectos.architecture.dto;

import java.util.UUID;

public record ArchitectureResponse(
        UUID id,
        UUID projectId,
        String title,
        String content
) {
}
