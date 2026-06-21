package com.manish.projectos.researchfinding.mapper;

import com.manish.projectos.researchfinding.domain.ResearchFindingEntity;
import com.manish.projectos.researchfinding.dto.ResearchFindingResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ResearchFindingMapper {
    public static ResearchFindingResponse toResponse(
            ResearchFindingEntity entity
    ) {

        return new ResearchFindingResponse(
                entity.getId(),
                entity.getResearchTopic().getId(),
                entity.getType().name(),
                entity.getTitle(),
                entity.getContent(),
                entity.getSourceUrl(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
