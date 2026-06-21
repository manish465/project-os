package com.manish.projectos.project.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.project.dto.CreateProjectRequest;
import com.manish.projectos.project.dto.ProjectResponse;
import com.manish.projectos.project.dto.UpdateProjectRequest;
import com.manish.projectos.project.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/projects")
@RequiredArgsConstructor
@CrossOrigin
public class ProjectController {
    private final ProjectService service;

    @PostMapping
    public ApiResponse<ProjectResponse> create(
            @RequestBody
            @Valid
            CreateProjectRequest request
    ) {
        return ApiResponse.<ProjectResponse>builder()
                .success(true)
                .message("Project created")
                .data(service.create(request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ProjectResponse>> findAll() {
        return ApiResponse.<List<ProjectResponse>>builder()
                .success(true)
                .data(service.findAll())
                .message("")
                .build();
    }

    @GetMapping("/{projectId}")
    public ApiResponse<ProjectResponse> findById(@PathVariable UUID projectId) {
        return ApiResponse.<ProjectResponse>builder()
                .success(true)
                .data(service.findById(projectId))
                .build();
    }

    @PutMapping("/{projectId}")
    public ApiResponse<ProjectResponse> update(
            @PathVariable UUID projectId,
            @RequestBody
            @Valid
            UpdateProjectRequest request
    ) {
        return ApiResponse.<ProjectResponse>builder()
                .success(true)
                .message("Project updated")
                .data(service.update(projectId, request))
                .build();
    }

    @DeleteMapping("/{projectId}")
    public ApiResponse<Void>
    archive(
            @PathVariable UUID projectId
    ) {

        service.archive(projectId);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Project archived")
                .build();
    }
}
