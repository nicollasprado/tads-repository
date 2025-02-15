package com.tadsrepository.api.controller;

import com.tadsrepository.api.dto.PostCreateDTO;
import com.tadsrepository.api.dto.PostCreateResponseDTO;
import com.tadsrepository.api.dto.PostGetDTO;
import com.tadsrepository.api.dto.PostUpdateDTO;
import com.tadsrepository.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;


    @GetMapping("/{username}")
    public ResponseEntity<List<PostGetDTO>> getPostsByUsername(@PathVariable String username){
        List<PostGetDTO> posts = postService.getPostsDTOByUsername(username);

        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{username}/{postTitle}")
    public ResponseEntity<PostGetDTO> getPostByUsername(@PathVariable String username, @PathVariable String postTitle){
        PostGetDTO postGetDTO = postService.getPostDTO(username, postTitle);

        return ResponseEntity.ok(postGetDTO);
    }

    @PostMapping("/{username}/create")
    public ResponseEntity<PostCreateResponseDTO> createNewPost(@PathVariable String username, @RequestBody PostCreateDTO postCreateDTO){
        PostCreateResponseDTO postCreateResponseDTO = postService.createPost(username, postCreateDTO);

        URI newPostURI = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/api/post/{username}/{postTitle}")
                .buildAndExpand(username, postCreateResponseDTO.title())
                .toUri();

        return ResponseEntity.created(newPostURI).body(postCreateResponseDTO);
    }

    @DeleteMapping("/{username}/{postTitle}")
    public ResponseEntity<Void> deletePost(@PathVariable String username, @PathVariable String postTitle){
        postService.deletePost(username, postTitle);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{username}/{postTitle}")
    public ResponseEntity<Void> updatePost(@PathVariable String username, @PathVariable String postTitle, @RequestBody PostUpdateDTO postUpdateDTO){
        postService.updatePost(username, postTitle, postUpdateDTO);

        return ResponseEntity.noContent().build();
    }
}
