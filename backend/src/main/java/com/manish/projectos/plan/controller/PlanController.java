package com.manish.projectos.plan.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.plan.dto.CreatePlanRequest;
import com.manish.projectos.plan.dto.PlanResponse;
import com.manish.projectos.plan.service.PlanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/projects/{projectId}/plans")
@CrossOrigin
public class PlanController {
    private final PlanService service;

    @PostMapping
    public ApiResponse<PlanResponse> create(
            @PathVariable UUID projectId,

            @RequestBody
            @Valid
            CreatePlanRequest request
    ) {
        return ApiResponse.<PlanResponse>builder()
                .success(true)
                .data(service.create(projectId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<PlanResponse>> findByProject(
            @PathVariable UUID projectId
    ) {
        return ApiResponse.<List<PlanResponse>>builder()
                .success(true)
                .data(service.findByProject(projectId))
                .build();
    }
}
