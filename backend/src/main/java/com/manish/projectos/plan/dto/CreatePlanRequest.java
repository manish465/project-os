package com.manish.projectos.plan.dto;

public record CreatePlanRequest(
        String title,
        String description,
        Integer sequence
) {
}
