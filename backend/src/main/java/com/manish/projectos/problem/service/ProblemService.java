package com.manish.projectos.problem.service;

import com.manish.projectos.problem.domain.ProblemEntity;
import com.manish.projectos.problem.dto.CreateProblemRequest;
import com.manish.projectos.problem.dto.ProblemResponse;
import com.manish.projectos.problem.mapper.ProblemMapper;
import com.manish.projectos.problem.repository.ProblemRepository;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.repository.ProjectRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class ProblemService {
    private final ProblemRepository problemRepository;
    private final ProjectRepository projectRepository;

    public ProblemResponse create(
            UUID projectId,
            CreateProblemRequest request
    ) {
        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        ProblemEntity problem = new ProblemEntity();
        problem.setProject(project);
        problem.setTitle(request.title());
        problem.setDescription(request.description());

        return ProblemMapper.toResponse(problemRepository.save(problem));
    }

    @Transactional(readOnly = true)
    public List<ProblemResponse> findByProject(UUID projectId) {
        return problemRepository
                .findByProject_Id(projectId)
                .stream()
                .map(ProblemMapper::toResponse)
                .toList();
    }
}
