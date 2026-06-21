package com.manish.projectos.decision.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.decision.dto.CreateDecisionRequest;
import com.manish.projectos.decision.dto.DecisionResponse;
import com.manish.projectos.decision.service.DecisionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(
        "/api/v1/projects/{projectId}/decisions"
)
@CrossOrigin
public class DecisionController {
    private final DecisionService service;

    @PostMapping
    public ApiResponse<DecisionResponse> create(
            @PathVariable UUID projectId,
            @RequestBody
            @Valid
            CreateDecisionRequest request
    ) {
        return ApiResponse.<DecisionResponse>builder()
                .success(true)
                .message("Decision created")
                .data(service.create(projectId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<DecisionResponse>> findByProject(@PathVariable UUID projectId) {
        return ApiResponse.<List<DecisionResponse>>builder()
                .success(true)
                .data(service.findByProject(projectId))
                .build();
    }
}
