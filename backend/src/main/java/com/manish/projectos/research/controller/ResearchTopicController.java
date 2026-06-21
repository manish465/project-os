package com.manish.projectos.research.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.research.dto.CreateResearchTopicRequest;
import com.manish.projectos.research.dto.ResearchTopicResponse;
import com.manish.projectos.research.dto.UpdateResearchTopicRequest;
import com.manish.projectos.research.service.ResearchTopicService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(
        "/api/v1/projects/{projectId}/research-topics"
)
@CrossOrigin
public class ResearchTopicController {
    private final ResearchTopicService service;

    @PostMapping
    public ApiResponse<ResearchTopicResponse> create(
            @PathVariable UUID projectId,
            @RequestBody
            @Valid
            CreateResearchTopicRequest request
    ) {
        return ApiResponse.<ResearchTopicResponse>builder()
                .success(true)
                .message("Research topic created")
                .data(service.create(projectId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ResearchTopicResponse>> findByProject(
            @PathVariable UUID projectId
    ) {
        return ApiResponse.<List<ResearchTopicResponse>>builder()
                .success(true)
                .data(service.findByProject(projectId))
                .build();
    }

    @PutMapping("/{researchId}")
    public ApiResponse<ResearchTopicResponse> update(
            @PathVariable UUID researchId,
            @RequestBody
            UpdateResearchTopicRequest request
    ) {
        return ApiResponse.<ResearchTopicResponse>builder()
                .success(true)
                .message("Research topic updated")
                .data(service.update(researchId, request))
                .build();
    }

    @GetMapping("/{researchId}")
    public ApiResponse<ResearchTopicResponse> findById(@PathVariable UUID researchId) {
        return ApiResponse.<ResearchTopicResponse>builder()
                .success(true)
                .data(service.findById(researchId))
                .build();
    }
}
