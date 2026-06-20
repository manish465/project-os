package com.manish.projectos.project.mapper;

import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.dto.ProjectResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ProjectMapper {
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
