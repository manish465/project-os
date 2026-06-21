package com.manish.projectos.goal.controller;

import com.manish.projectos.common.response.ApiResponse;
import com.manish.projectos.goal.dto.CreateGoalRequest;
import com.manish.projectos.goal.dto.GoalResponse;
import com.manish.projectos.goal.service.GoalService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping(
        "/api/v1/projects/{projectId}/problems/{problemId}/goals"
)
@CrossOrigin
public class GoalController {
    private final GoalService service;

    @PostMapping
    public ApiResponse<GoalResponse> create(
            @PathVariable UUID problemId,

            @RequestBody
            @Valid
            CreateGoalRequest request
    ) {
        return ApiResponse.<GoalResponse>builder()
                .success(true)
                .message("Goal created")
                .data(service.create(problemId, request))
                .build();
    }

    @GetMapping
    public ApiResponse<List<GoalResponse>>
    findByProblem(
            @PathVariable UUID problemId
    ) {
        return ApiResponse.<List<GoalResponse>>builder()
                .success(true)
                .data(service.findByProblem(problemId))
                .build();
    }
}
