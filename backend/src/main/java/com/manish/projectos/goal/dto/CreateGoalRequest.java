package com.manish.projectos.goal.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateGoalRequest(
        @NotBlank
        String title,
        String description
) {
}
