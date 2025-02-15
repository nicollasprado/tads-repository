package com.tadsrepository.api.service;

import com.tadsrepository.api.model.Post;
import com.tadsrepository.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;


}
