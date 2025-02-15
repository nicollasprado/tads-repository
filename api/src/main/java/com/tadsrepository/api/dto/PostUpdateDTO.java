package com.tadsrepository.api.dto;

import com.tadsrepository.api.enums.PostCategory;

public record PostUpdateDTO(String title, String text, PostCategory postCategory) {
}
