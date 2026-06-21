package com.manish.projectos.research.repository;

import com.manish.projectos.research.domain.ResearchTopicEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ResearchTopicRepository extends JpaRepository<ResearchTopicEntity, UUID> {
    List<ResearchTopicEntity> findByProject_Id(UUID projectId);
}
