package com.manish.projectos.research.mapper;

import com.manish.projectos.research.domain.ResearchTopicEntity;
import com.manish.projectos.research.dto.ResearchTopicResponse;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ResearchTopicMapper {
    public static ResearchTopicResponse toResponse(
            ResearchTopicEntity entity
    ) {

        return new ResearchTopicResponse(
                entity.getId(),
                entity.getProject().getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getStatus().name(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}
