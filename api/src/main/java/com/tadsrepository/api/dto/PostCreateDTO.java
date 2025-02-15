package com.tadsrepository.api.dto;

import com.tadsrepository.api.enums.PostCategory;

public record PostCreateDTO(
        String title,
        PostCategory postCategory,
        String text
) {
}
