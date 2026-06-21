package com.manish.projectos.researchfinding.repository;

import com.manish.projectos.researchfinding.domain.ResearchFindingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ResearchFindingRepository extends JpaRepository<ResearchFindingEntity, UUID> {
    List<ResearchFindingEntity> findByResearchTopic_Id(UUID researchTopicId);
}
