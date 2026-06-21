package com.manish.projectos.goal.mapper;

import com.manish.projectos.goal.domain.GoalEntity;
import com.manish.projectos.goal.dto.GoalResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class GoalMapper {
    public static GoalResponse toResponse(GoalEntity entity) {
        return new GoalResponse(
                entity.getId(),
                entity.getProblem().getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
