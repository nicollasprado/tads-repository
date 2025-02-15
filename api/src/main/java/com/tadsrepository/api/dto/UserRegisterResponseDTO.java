package com.tadsrepository.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserRegisterResponseDTO(
        String username,
        String suapUsername)
{ }
