package com.manish.projectos.project.service;

import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.domain.ProjectStatus;
import com.manish.projectos.project.dto.CreateProjectRequest;
import com.manish.projectos.project.dto.ProjectResponse;
import com.manish.projectos.project.mapper.ProjectMapper;
import com.manish.projectos.project.repository.ProjectRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
