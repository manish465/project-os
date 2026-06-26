package com.manish.projectos.plan.repository;

import com.manish.projectos.plan.domain.PlanEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PlanRepository extends JpaRepository<PlanEntity, UUID> {
    List<PlanEntity> findByProject_IdOrderBySequence(UUID projectId);
}
