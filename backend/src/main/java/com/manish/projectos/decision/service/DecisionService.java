package com.manish.projectos.decision.service;

import com.manish.projectos.decision.domain.DecisionEntity;
import com.manish.projectos.decision.dto.CreateDecisionRequest;
import com.manish.projectos.decision.dto.DecisionResponse;
import com.manish.projectos.decision.mapper.DecisionMapper;
import com.manish.projectos.decision.repository.DecisionRepository;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.repository.ProjectRepository;
import com.manish.projectos.researchfinding.repository.ResearchFindingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class DecisionService {
    private final DecisionRepository repository;
    private final ProjectRepository projectRepository;
    private final ResearchFindingRepository researchFindingRepository;

    public DecisionResponse create(
            UUID projectId,
            CreateDecisionRequest request
    ) {
        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        DecisionEntity decision = new DecisionEntity();

        decision.setProject(project);
        decision.setTitle(request.title());
        decision.setProblem(request.problem());
        decision.setChosenOption(request.chosenOption());
        decision.setRationale(request.rationale());
        decision.setTradeoffs(request.tradeoffs());
        decision.setConfidenceLevel(request.confidenceLevel());

        if (request.findingIds() != null && !request.findingIds().isEmpty()) {

            var findings = new HashSet<>(
                    researchFindingRepository.findAllById(request.findingIds())
            );

            decision.setFindings(findings);
        }

        return DecisionMapper.toResponse(repository.save(decision));
    }

    @Transactional(readOnly = true)
    public List<DecisionResponse> findByProject(UUID projectId) {
        return repository
                .findByProject_Id(projectId)
                .stream()
                .map(DecisionMapper::toResponse)
                .toList();
    }
}
