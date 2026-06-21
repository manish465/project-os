package com.manish.projectos.decision.mapper;

import com.manish.projectos.common.domain.BaseEntity;
import com.manish.projectos.decision.domain.DecisionEntity;
import com.manish.projectos.decision.dto.DecisionResponse;
import lombok.NoArgsConstructor;

import java.util.stream.Collectors;

@NoArgsConstructor
public final  class DecisionMapper {
    public static DecisionResponse toResponse(
            DecisionEntity entity
    ) {
        return new DecisionResponse(
                entity.getId(),
                entity.getProject().getId(),
                entity.getTitle(),
                entity.getProblem(),
                entity.getChosenOption(),
                entity.getRationale(),
                entity.getTradeoffs(),
                entity.getConfidenceLevel().name(),
                entity.getFindings()
                        .stream()
                        .map(BaseEntity::getId)
                        .collect(Collectors.toSet())
        );
    }
}
