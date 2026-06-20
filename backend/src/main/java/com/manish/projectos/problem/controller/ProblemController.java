package com.manish.projectos.problem.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.problem.dto.CreateProblemRequest;
import com.manish.projectos.problem.dto.ProblemResponse;
import com.manish.projectos.problem.service.ProblemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/projects/{projectId}/problems")
@CrossOrigin
public class ProblemController {
    private final ProblemService service;

    @PostMapping
    public ApiResponse<ProblemResponse> create(
            @PathVariable UUID projectId,

            @Valid
            @RequestBody
            CreateProblemRequest request
    ) {
        return ApiResponse
                .<ProblemResponse>builder()
                .success(true)
                .message("Problem created")
                .data(service.create(projectId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<ProblemResponse>>
    findByProject(@PathVariable UUID projectId) {
        return ApiResponse
                .<List<ProblemResponse>>builder()
                .success(true)
                .data(service.findByProject(projectId))
                .build();
    }
}
