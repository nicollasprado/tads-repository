package com.tadsrepository.api.repository;

import com.tadsrepository.api.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {

    @Query(value = "SELECT * FROM post WHERE user_id = :userId", nativeQuery = true)
    Optional<List<Post>> findAllByUserId(UUID userId);

    @Query(value = "SELECT * FROM post WHERE user_id = :userId AND title = :postTitle LIMIT 1", nativeQuery = true)
    Optional<Post> findByUserIdAndPostTitle(UUID userId, String postTitle);
}
