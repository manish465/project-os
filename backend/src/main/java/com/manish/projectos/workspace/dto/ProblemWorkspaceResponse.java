package com.manish.projectos.workspace.dto;

import java.util.List;
import java.util.UUID;

public record ProblemWorkspaceResponse(
        UUID id,
        String title,
        String description,
        List<GoalWorkspaceResponse> goals
) {
}
