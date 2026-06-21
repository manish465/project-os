package com.manish.projectos.workspace.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.workspace.dto.WorkspaceResponse;
import com.manish.projectos.workspace.service.WorkspaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/projects")
@CrossOrigin
public class WorkspaceController {
    private final WorkspaceService service;

    @GetMapping("/{projectId}/workspace")
    public ApiResponse<WorkspaceResponse> getWorkspace(
            @PathVariable UUID projectId
    ) {
        return ApiResponse.<WorkspaceResponse>builder()
                .success(true)
                .data(service.getWorkspace(projectId))
                .build();
    }
}
