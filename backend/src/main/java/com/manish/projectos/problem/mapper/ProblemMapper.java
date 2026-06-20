package com.manish.projectos.problem.mapper;

import com.manish.projectos.problem.domain.ProblemEntity;
import com.manish.projectos.problem.dto.ProblemResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ProblemMapper {
    public static ProblemResponse toResponse(
            ProblemEntity entity
    ) {
        return new ProblemResponse(
                entity.getId(),
                entity.getProject().getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
