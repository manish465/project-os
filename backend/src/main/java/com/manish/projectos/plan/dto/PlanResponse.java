package com.manish.projectos.plan.dto;

import java.util.UUID;

public record PlanResponse(
        UUID id,
        UUID projectId,
        String title,
        String description,
        Integer sequence
) {
}
