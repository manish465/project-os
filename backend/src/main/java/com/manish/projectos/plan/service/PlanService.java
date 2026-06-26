package com.manish.projectos.plan.service;

import com.manish.projectos.plan.domain.PlanEntity;
import com.manish.projectos.plan.dto.CreatePlanRequest;
import com.manish.projectos.plan.dto.PlanResponse;
import com.manish.projectos.plan.mapper.PlanMapper;
import com.manish.projectos.plan.repository.PlanRepository;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class PlanService {
    private final PlanRepository repository;
    private final ProjectRepository projectRepository;

    public PlanResponse create(
            UUID projectId,
            CreatePlanRequest request
    ) {

        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        PlanEntity plan = new PlanEntity();

        plan.setProject(project);
        plan.setTitle(request.title());
        plan.setDescription(request.description());
        plan.setSequence(request.sequence());

        return PlanMapper.toResponse(repository.save(plan));
    }

    @Transactional(readOnly = true)
    public List<PlanResponse> findByProject(UUID projectId) {
        return repository.findByProject_IdOrderBySequence(projectId)
                .stream()
                .map(PlanMapper::toResponse)
                .toList();
    }
}
