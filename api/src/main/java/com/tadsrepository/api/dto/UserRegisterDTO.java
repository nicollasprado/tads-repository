package com.tadsrepository.api.dto;

public record UserRegisterDTO(
        String username,
        String password,
        String email)
{ }
