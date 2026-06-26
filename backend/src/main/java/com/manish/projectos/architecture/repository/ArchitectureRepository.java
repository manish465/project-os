package com.manish.projectos.architecture.repository;

import com.manish.projectos.architecture.domain.ArchitectureEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ArchitectureRepository extends JpaRepository<ArchitectureEntity, UUID> {
    List<ArchitectureEntity> findByProject_Id(UUID projectId);
}
