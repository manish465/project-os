package com.manish.projectos.project.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.project.dto.CreateProjectRequest;
import com.manish.projectos.project.dto.ProjectResponse;
import com.manish.projectos.project.dto.UpdateProjectRequest;
import com.manish.projectos.project.service.ProjectService;
import com.manish.projectos.researchfinding.dto.ResearchFindingResponse;
import com.manish.projectos.researchfinding.service.ResearchFindingService;
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
    private final ProjectService projectService;
    private final ResearchFindingService researchFindingService;

    @PostMapping
    public ApiResponse<ProjectResponse> create(
            @RequestBody
            @Valid
            CreateProjectRequest request
    ) {
        return ApiResponse.<ProjectResponse>builder()
                .success(true)
                .message("Project created")
                .data(projectService.create(request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ProjectResponse>> findAll() {
        return ApiResponse.<List<ProjectResponse>>builder()
                .success(true)
                .data(projectService.findAll())
                .message("")
                .build();
    }

    @GetMapping("/{projectId}")
    public ApiResponse<ProjectResponse> findById(@PathVariable UUID projectId) {
        return ApiResponse.<ProjectResponse>builder()
                .success(true)
                .data(projectService.findById(projectId))
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
                .data(projectService.update(projectId, request))
                .build();
    }

    @DeleteMapping("/{projectId}")
    public ApiResponse<Void>
    archive(
            @PathVariable UUID projectId
    ) {

        projectService.archive(projectId);

        return ApiResponse.<Void>builder()
                .success(true)
                .message("Project archived")
                .build();
    }

    @GetMapping("/{projectId}/findings")
    public ApiResponse<List<ResearchFindingResponse>> findByProject(
            @PathVariable UUID projectId
    ) {
        return ApiResponse.<List<ResearchFindingResponse>>builder()
                .success(true)
                .data(researchFindingService.findByProject(projectId))
                .build();
    }
}
