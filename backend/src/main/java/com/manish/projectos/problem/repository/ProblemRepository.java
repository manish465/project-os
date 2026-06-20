package com.manish.projectos.problem.repository;

import com.manish.projectos.problem.domain.ProblemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProblemRepository extends JpaRepository<ProblemEntity, UUID> {
    List<ProblemEntity> findByProject_Id(UUID projectId);
}
