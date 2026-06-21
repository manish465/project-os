package com.manish.projectos.goal.repository;

import com.manish.projectos.goal.domain.GoalEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface GoalRepository extends JpaRepository<GoalEntity, UUID> {
    List<GoalEntity> findByProblem_Id(UUID problemId);
}
