package com.tadsrepository.api.controller;

import com.tadsrepository.api.dto.UserGetDTO;
import com.tadsrepository.api.dto.UserPatchDTO;
import com.tadsrepository.api.dto.UserRegisterDTO;
import com.tadsrepository.api.dto.UserRegisterResponseDTO;
import com.tadsrepository.api.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/{username}")
    public ResponseEntity<UserGetDTO> getUser(@PathVariable String username){
        UserGetDTO userGetDTO = userService.getUserDTOByName(username);

        return ResponseEntity.ok(userGetDTO);
    }

    @PostMapping("/register")
    public ResponseEntity<UserRegisterResponseDTO> register(@RequestBody @Valid UserRegisterDTO userRegisterDTO){
        UserRegisterResponseDTO userRegisterResponseDTO =  userService.createUser(userRegisterDTO);

        URI newUserURI = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/api/user/{username}")
                .buildAndExpand(userRegisterResponseDTO.username())
                .toUri();

        return ResponseEntity.created(newUserURI).body(userRegisterResponseDTO);
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteUser(@PathVariable String username){
        userService.deleteUser(username);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{username}")
    public ResponseEntity<Void> updateUser(@PathVariable String username, @RequestBody UserPatchDTO userPatchDTO){
        userService.updateUser(username, userPatchDTO);

        return ResponseEntity.noContent().build();
    }
}
