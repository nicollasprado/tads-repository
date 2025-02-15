package com.tadsrepository.api.enums;

public enum PostCategory {
    Content("content"),
    Help("help"),
    New("new"),
    Marketing("marketing");

    private final String category;

    PostCategory(String category){
        this.category = category;
    }
}
