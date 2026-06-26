package com.manish.projectos.architecture.mapper;

import com.manish.projectos.architecture.domain.ArchitectureEntity;
import com.manish.projectos.architecture.dto.ArchitectureResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ArchitectureMapper {
    public static ArchitectureResponse toResponse(ArchitectureEntity entity) {
        return new ArchitectureResponse(
                entity.getId(),
                entity.getProject().getId(),
                entity.getTitle(),
                entity.getContent()
        );
    }
}
