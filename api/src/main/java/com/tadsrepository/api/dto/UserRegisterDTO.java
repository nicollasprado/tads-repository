package com.tadsrepository.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserRegisterDTO(
        String username,
        String password,
        String suapUsername)
{ }
