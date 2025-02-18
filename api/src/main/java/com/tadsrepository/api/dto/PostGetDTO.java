package com.tadsrepository.api.dto;

import com.tadsrepository.api.enums.PostCategory;

import java.time.LocalDateTime;

public record PostGetDTO(
        String title,
        PostCategory postCategory,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        Integer likes,
        String text,
        String author
) {
}
