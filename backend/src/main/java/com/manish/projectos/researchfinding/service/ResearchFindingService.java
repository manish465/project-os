package com.manish.projectos.researchfinding.service;

import com.manish.projectos.research.domain.ResearchTopicEntity;
import com.manish.projectos.research.repository.ResearchTopicRepository;
import com.manish.projectos.researchfinding.domain.ResearchFindingEntity;
import com.manish.projectos.researchfinding.dto.CreateResearchFindingRequest;
import com.manish.projectos.researchfinding.dto.ResearchFindingResponse;
import com.manish.projectos.researchfinding.mapper.ResearchFindingMapper;
import com.manish.projectos.researchfinding.repository.ResearchFindingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ResearchFindingService {
    private final ResearchFindingRepository repository;
    private final ResearchTopicRepository researchTopicRepository;

    public ResearchFindingResponse create(
            UUID researchTopicId,
            CreateResearchFindingRequest request
    ) {
        ResearchTopicEntity topic = researchTopicRepository
                        .findById(researchTopicId)
                        .orElseThrow();

        ResearchFindingEntity finding = new ResearchFindingEntity();

        finding.setResearchTopic(topic);
        finding.setType(request.type());
        finding.setTitle(request.title());
        finding.setContent(request.content());
        finding.setSourceUrl(request.sourceUrl());

        return ResearchFindingMapper.toResponse(repository.save(finding));
    }

    @Transactional(readOnly = true)
    public List<ResearchFindingResponse> findByTopic(UUID researchTopicId) {
        return repository
                .findByResearchTopic_Id(researchTopicId)
                .stream()
                .map(ResearchFindingMapper::toResponse)
                .toList();
    }
}
