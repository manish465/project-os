package com.manish.projectos.project.service;

import com.manish.projectos.common.exception.ResourceNotFoundException;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.domain.ProjectStatus;
import com.manish.projectos.project.dto.CreateProjectRequest;
import com.manish.projectos.project.dto.ProjectResponse;
import com.manish.projectos.project.dto.UpdateProjectRequest;
import com.manish.projectos.project.mapper.ProjectMapper;
import com.manish.projectos.project.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProjectService {
    private final ProjectRepository repository;

    public ProjectResponse create(
            CreateProjectRequest request
    ) {
        log.info("ProjectService.create called with CreateProjectRequest {}", request);

        ProjectEntity project = new ProjectEntity();

        project.setName(request.name());
        project.setDescription(request.description());
        project.setStatus(ProjectStatus.ACTIVE);

        return ProjectMapper.toResponse(repository.save(project));
    }

    public List<ProjectResponse> findAll() {

        return repository.findAll()
                .stream()
                .map(ProjectMapper::toResponse)
                .toList();
    }

    @Transactional
    public ProjectResponse findById(UUID projectId) {
        ProjectEntity project =
                repository.findById(projectId)
                        .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        return ProjectMapper.toResponse(project);
    }

    public ProjectResponse update(
            UUID projectId,
            UpdateProjectRequest request
    ) {
        ProjectEntity project = repository.findById(projectId)
                        .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        project.setName(request.name());
        project.setDescription(request.description());

        return ProjectMapper.toResponse(repository.save(project));
    }

    public void archive(UUID projectId) {
        ProjectEntity project = repository.findById(projectId)
                        .orElseThrow(() -> new ResourceNotFoundException("Project not found"));

        project.setStatus(ProjectStatus.ARCHIVED);
        repository.save(project);
    }
}
