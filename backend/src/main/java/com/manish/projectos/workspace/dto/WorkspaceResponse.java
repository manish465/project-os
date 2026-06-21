package com.manish.projectos.workspace.dto;

import java.util.List;
import java.util.UUID;

public record WorkspaceResponse(
        UUID projectId,
        String projectName,
        String description,
        List<ProblemWorkspaceResponse> problems
) {
}
