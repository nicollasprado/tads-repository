package com.tadsrepository.api.dto;

import com.tadsrepository.api.enums.PostCategory;

import java.time.LocalDateTime;
import java.util.UUID;

// Adicionar Set Comments no futuro

public record PostCreateResponseDTO(
        String title,
        PostCategory category,
        Integer likes,
        String creatorUsername,
        LocalDateTime createdAt,
        String text
) {
}
