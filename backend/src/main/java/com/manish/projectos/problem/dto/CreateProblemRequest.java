package com.manish.projectos.problem.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateProblemRequest(
        @NotBlank
        String title,
        String description
) {
}
