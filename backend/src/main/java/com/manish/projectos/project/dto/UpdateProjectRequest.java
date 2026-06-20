package com.manish.projectos.project.dto;

import jakarta.validation.constraints.NotBlank;

public record UpdateProjectRequest(
        @NotBlank
        String name,
        String description
) {
}
