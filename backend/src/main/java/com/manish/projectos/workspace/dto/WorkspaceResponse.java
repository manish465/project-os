package com.manish.projectos.workspace.dto;

import java.util.List;
import java.util.UUID;

public record WorkspaceResponse(
        UUID projectId,
        String projectName,
        String description,
        String status,
        int problemCount,
        int goalCount,
        int researchTopicCount,
        int decisionCount,
        int noteCount,
        List<ProblemWorkspaceResponse> problems
) {
}
