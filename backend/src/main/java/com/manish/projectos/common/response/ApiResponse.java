package com.manish.projectos.common.response;

import lombok.Builder;

@Builder
public record ApiResponse<T>(
        boolean success,
        T data,
        String message
) {
}
