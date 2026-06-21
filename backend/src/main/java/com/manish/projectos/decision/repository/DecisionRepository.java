package com.manish.projectos.decision.repository;

import com.manish.projectos.decision.domain.DecisionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface DecisionRepository extends JpaRepository<DecisionEntity, UUID> {
    List<DecisionEntity> findByProject_Id(UUID projectId);
}
