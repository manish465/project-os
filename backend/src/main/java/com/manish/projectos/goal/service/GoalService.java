package com.manish.projectos.goal.service;

import com.manish.projectos.goal.domain.GoalEntity;
import com.manish.projectos.goal.dto.CreateGoalRequest;
import com.manish.projectos.goal.dto.GoalResponse;
import com.manish.projectos.goal.mapper.GoalMapper;
import com.manish.projectos.goal.repository.GoalRepository;
import com.manish.projectos.problem.domain.ProblemEntity;
import com.manish.projectos.problem.repository.ProblemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class GoalService {
    private final GoalRepository goalRepository;
    private final ProblemRepository problemRepository;

    public GoalResponse create(
            UUID problemId,
            CreateGoalRequest request
    ) {
        ProblemEntity problem = problemRepository
                        .findById(problemId)
                        .orElseThrow();

        GoalEntity goal = new GoalEntity();

        goal.setProblem(problem);
        goal.setTitle(request.title());
        goal.setDescription(request.description());

        return GoalMapper.toResponse(goalRepository.save(goal));
    }

    @Transactional
    public List<GoalResponse> findByProblem(UUID problemId) {
        return goalRepository
                .findByProblem_Id(problemId)
                .stream()
                .map(GoalMapper::toResponse)
                .toList();
    }
}
