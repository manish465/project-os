package com.manish.projectos.architecture.service;

import com.manish.projectos.architecture.domain.ArchitectureEntity;
import com.manish.projectos.architecture.dto.ArchitectureResponse;
import com.manish.projectos.architecture.dto.CreateArchitectureRequest;
import com.manish.projectos.architecture.mapper.ArchitectureMapper;
import com.manish.projectos.architecture.repository.ArchitectureRepository;
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
public class ArchitectureService {
    private final ArchitectureRepository repository;
    private final ProjectRepository projectRepository;

    public ArchitectureResponse create(UUID projectId, CreateArchitectureRequest request) {
        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        ArchitectureEntity entity = new ArchitectureEntity();

        entity.setProject(project);
        entity.setTitle(request.title());
        entity.setContent(request.content());

        return ArchitectureMapper.toResponse(repository.save(entity));
    }

    @Transactional(readOnly = true)
    public List<ArchitectureResponse> findByProject(UUID projectId) {
        return repository.findByProject_Id(projectId)
                .stream()
                .map(ArchitectureMapper::toResponse)
                .toList();
    }
}
