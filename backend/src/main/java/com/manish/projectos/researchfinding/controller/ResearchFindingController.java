package com.manish.projectos.researchfinding.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.researchfinding.dto.CreateResearchFindingRequest;
import com.manish.projectos.researchfinding.dto.ResearchFindingResponse;
import com.manish.projectos.researchfinding.service.ResearchFindingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(
        "/api/v1/research-topics/{researchTopicId}/findings"
)
@CrossOrigin
public class ResearchFindingController {
    private final ResearchFindingService service;

    @PostMapping
    public ApiResponse<ResearchFindingResponse> create(
            @PathVariable UUID researchTopicId,
            @Valid
            @RequestBody
            CreateResearchFindingRequest request
    ) {
        return ApiResponse.<ResearchFindingResponse>builder()
                .success(true)
                .message("Finding created")
                .data(service.create(researchTopicId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ResearchFindingResponse>> findByTopic(
            @PathVariable UUID researchTopicId
    ) {
        return ApiResponse.<List<ResearchFindingResponse>>builder()
                .success(true)
                .data(service.findByTopic(researchTopicId))
                .build();
    }
}
