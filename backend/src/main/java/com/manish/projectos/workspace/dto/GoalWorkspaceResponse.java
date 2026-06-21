package com.manish.projectos.workspace.dto;

import java.util.UUID;

public record GoalWorkspaceResponse(
        UUID id,
        String title,
        String description
) {
}
