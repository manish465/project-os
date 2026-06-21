package com.manish.projectos.research.service;

import com.manish.projectos.common.exception.ResourceNotFoundException;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.repository.ProjectRepository;
import com.manish.projectos.research.domain.ResearchTopicEntity;
import com.manish.projectos.research.domain.ResearchTopicStatus;
import com.manish.projectos.research.dto.CreateResearchTopicRequest;
import com.manish.projectos.research.dto.ResearchTopicResponse;
import com.manish.projectos.research.dto.UpdateResearchTopicRequest;
import com.manish.projectos.research.mapper.ResearchTopicMapper;
import com.manish.projectos.research.repository.ResearchTopicRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ResearchTopicService {
    private final ResearchTopicRepository repository;
    private final ProjectRepository projectRepository;

    public ResearchTopicResponse create(
            UUID projectId,
            CreateResearchTopicRequest request
    ) {
        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        ResearchTopicEntity entity = new ResearchTopicEntity();

        entity.setProject(project);
        entity.setTitle(request.title());
        entity.setDescription(request.description());
        entity.setStatus(ResearchTopicStatus.NOT_STARTED);

        return ResearchTopicMapper.toResponse(repository.save(entity));
    }

    @Transactional
    public List<ResearchTopicResponse> findByProject(
            UUID projectId
    ) {
        return repository
                .findByProject_Id(projectId)
                .stream()
                .map(ResearchTopicMapper::toResponse)
                .toList();
    }

    public ResearchTopicResponse update(
            UUID researchId,
            UpdateResearchTopicRequest request
    ) {
        ResearchTopicEntity entity = repository.findById(researchId)
                        .orElseThrow();

        if (request.title() != null) {
            entity.setTitle(request.title());
        }

        if (request.description() != null) {
            entity.setDescription(request.description());
        }

        if (request.status() != null) {
            entity.setStatus(request.status());
        }

        return ResearchTopicMapper.toResponse(repository.save(entity));
    }

    @Transactional(readOnly = true)
    public ResearchTopicResponse findById(
            UUID researchId
    ) {

        ResearchTopicEntity entity = repository.findById(researchId)
                        .orElseThrow(() -> new ResourceNotFoundException("Research topic not found"));

        return ResearchTopicMapper.toResponse(entity);
    }
}
