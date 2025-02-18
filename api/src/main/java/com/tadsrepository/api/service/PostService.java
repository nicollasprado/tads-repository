package com.tadsrepository.api.service;

import com.tadsrepository.api.dto.PostCreateDTO;
import com.tadsrepository.api.dto.PostCreateResponseDTO;
import com.tadsrepository.api.dto.PostGetDTO;
import com.tadsrepository.api.dto.PostUpdateDTO;
import com.tadsrepository.api.model.Post;
import com.tadsrepository.api.model.User;
import com.tadsrepository.api.repository.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserService userService;


    public Page<PostGetDTO> getPostPage(Pageable pageable){
        Page<Post> postPage = postRepository.findAll(pageable);

        List<PostGetDTO> postsDTOs = new ArrayList<>();

        postPage.stream().forEach(post -> postsDTOs.add(new PostGetDTO(
                post.getTitle(),
                post.getPostCategory(),
                post.getCreatedAt(),
                post.getUpdatedAt(),
                post.getLikes(),
                post.getText(),
                userService.getUsernameById(post.getUser().getId())
        )));

        return new PageImpl<>(postsDTOs);
    }

    public List<PostGetDTO> getPostsDTOByUsername(String username){
        User postCreator = userService.getUserByName(username);
        Optional<List<Post>> posts = postRepository.findAllByUserId(postCreator.getId());

        if(posts.isEmpty()){
            throw new RuntimeException("No post found for user: " + username);
        }

        List<PostGetDTO> postsDTO = new ArrayList<>();

        posts.get().stream().forEach(post -> postsDTO.add(new PostGetDTO(
                post.getTitle(),
                post.getPostCategory(),
                post.getCreatedAt(),
                post.getUpdatedAt(),
                post.getLikes(),
                post.getText(),
                username
                )));

        return postsDTO;
    }

    public PostGetDTO getPostDTO(String username, String postTitle){
        User postCreator = userService.getUserByName(username);

        Optional<Post> foundPost = postRepository.findByUserIdAndPostTitle(postCreator.getId(), postTitle);

        if(foundPost.isEmpty()){
            throw new IllegalArgumentException("O post '" + postTitle + "' criado por " + username + " nao foi encontrado: ");
        }

        Post post = foundPost.get();
        return new PostGetDTO(
                post.getTitle(),
                post.getPostCategory(),
                post.getCreatedAt(),
                post.getUpdatedAt(),
                post.getLikes(),
                post.getText(),
                username
        );
    }

    public Post getPost(String username, String postTitle){
        User postCreator = userService.getUserByName(username);

        Optional<Post> foundPost = postRepository.findByUserIdAndPostTitle(postCreator.getId(), postTitle);

        if(foundPost.isEmpty()){
            throw new IllegalArgumentException("O post '" + postTitle + "' criado por " + username + " nao foi encontrado: ");
        }

        return foundPost.get();
    }

    @Transactional
    public PostCreateResponseDTO createPost(String username, PostCreateDTO postCreateDTO){
        User postCreator = userService.getUserByName(username);

        Post newPost = new Post(postCreateDTO.title(), postCreateDTO.postCategory(), postCreator, postCreateDTO.text());

        postRepository.save(newPost);

        return new PostCreateResponseDTO(
                newPost.getTitle(),
                newPost.getPostCategory(),
                newPost.getLikes(),
                username,
                newPost.getCreatedAt(),
                newPost.getText()
        );
    }

    @Transactional
    public void deletePost(String username, String postTitle){
        Post foundPost = this.getPost(username, postTitle);

        postRepository.delete(foundPost);
    }

    @Transactional
    public void updatePost(String username, String postTitle, PostUpdateDTO postUpdateDTO){
        Post foundPost = this.getPost(username, postTitle);

        foundPost.setTitle(postUpdateDTO.title());
        foundPost.setPostCategory(postUpdateDTO.postCategory());
        foundPost.setText(postUpdateDTO.text());

        postRepository.saveAndFlush(foundPost);
    }
}
