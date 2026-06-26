package com.manish.projectos.plan.mapper;

import com.manish.projectos.plan.domain.PlanEntity;
import com.manish.projectos.plan.dto.PlanResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class PlanMapper {
    public static PlanResponse toResponse(PlanEntity entity) {
        return new PlanResponse(
                entity.getId(),
                entity.getProject().getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getSequence()
        );
    }
}
