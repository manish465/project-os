package com.manish.projectos.workspace.service;

import com.manish.projectos.decision.repository.DecisionRepository;
import com.manish.projectos.goal.domain.GoalEntity;
import com.manish.projectos.goal.repository.GoalRepository;
import com.manish.projectos.problem.domain.ProblemEntity;
import com.manish.projectos.problem.repository.ProblemRepository;
import com.manish.projectos.project.domain.ProjectEntity;
import com.manish.projectos.project.repository.ProjectRepository;
import com.manish.projectos.research.repository.ResearchTopicRepository;
import com.manish.projectos.workspace.dto.GoalWorkspaceResponse;
import com.manish.projectos.workspace.dto.ProblemWorkspaceResponse;
import com.manish.projectos.workspace.dto.WorkspaceResponse;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class WorkspaceService {
    private final ProjectRepository projectRepository;
    private final ProblemRepository problemRepository;
    private final GoalRepository goalRepository;
    private final ResearchTopicRepository researchTopicRepository;
    private final DecisionRepository decisionRepository;

    public WorkspaceResponse getWorkspace(UUID projectId) {
        ProjectEntity project = projectRepository
                        .findById(projectId)
                        .orElseThrow();

        List<ProblemWorkspaceResponse> problems = problemRepository
                        .findByProject_Id(projectId)
                        .stream()
                        .map(this::mapProblem)
                        .toList();

        int problemCount = problems.size();
        int goalCount = problems.stream()
                        .mapToInt(p -> p.goals().size())
                        .sum();
        int researchTopicCount = researchTopicRepository
                        .findByProject_Id(projectId)
                        .size();
        int decisionCount = decisionRepository
                        .findByProject_Id(projectId)
                        .size();

        return new WorkspaceResponse(
                project.getId(),
                project.getName(),
                project.getDescription(),
                project.getStatus().name(),
                problemCount,
                goalCount,
                researchTopicCount,
                decisionCount,
                0,
                problems
        );
    }

    private ProblemWorkspaceResponse mapProblem(ProblemEntity problem) {
        List<GoalWorkspaceResponse> goals = goalRepository
                        .findByProblem_Id(problem.getId())
                        .stream()
                        .map(this::mapGoal)
                        .toList();

        return new ProblemWorkspaceResponse(
                problem.getId(),
                problem.getTitle(),
                problem.getDescription(),
                goals
        );
    }

    private GoalWorkspaceResponse mapGoal(GoalEntity goal) {
        return new GoalWorkspaceResponse(
                goal.getId(),
                goal.getTitle(),
                goal.getDescription()
        );
    }
}
