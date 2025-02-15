package com.tadsrepository.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = Comment.TABLE_NAME)
@Table(name = Comment.TABLE_NAME)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    public static final String TABLE_NAME = "comment";

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true, insertable = false, updatable = false, nullable = false)
    @NotNull
    private UUID id;

    @Column(name = "text", nullable = false)
    @NotBlank
    private String text;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    @NotNull
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    @NotNull
    private User user;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false, updatable = false)
    @NotNull
    private Post post;


    public Comment(String text, User user, Post post){
        this.text = text;
        this.user = user;
        this.post = post;
    }
}
