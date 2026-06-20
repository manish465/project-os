package com.manish.projectos.project.mapper;

import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.dto.ProjectResponse;

public final class ProjectMapper {
    private ProjectMapper() {}

    public static ProjectResponse toResponse(ProjectEntity project) {
        return new ProjectResponse(
                project.getId(),
                project.getName(),
                project.getDescription(),
                project.getStatus().name(),
                project.getCreatedAt(),
                project.getUpdatedAt()
        );
    }
}
