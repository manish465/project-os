package com.manish.projectos.architecture.controller;

import com.manish.projectos.architecture.dto.ArchitectureResponse;
import com.manish.projectos.architecture.dto.CreateArchitectureRequest;
import com.manish.projectos.architecture.service.ArchitectureService;
import com.manish.projectos.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/projects/{projectId}/architectures")
@CrossOrigin
public class ArchitectureController {
    private final ArchitectureService service;

    @PostMapping
    public ApiResponse<ArchitectureResponse> create(
            @PathVariable UUID projectId,
            @RequestBody
            @Valid
            CreateArchitectureRequest request
    ) {
        return ApiResponse.<ArchitectureResponse>builder()
                .success(true)
                .data(service.create(projectId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ArchitectureResponse>> findByProject(
            @PathVariable UUID projectId
    ) {
        return ApiResponse.<List<ArchitectureResponse>>builder()
                .success(true)
                .data(service.findByProject(projectId))
                .build();
    }
}
