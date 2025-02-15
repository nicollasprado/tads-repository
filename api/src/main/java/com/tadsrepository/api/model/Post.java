package com.tadsrepository.api.model;

import com.tadsrepository.api.enums.PostCategory;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Entity(name = Post.TABLE_NAME)
@Table(name = Post.TABLE_NAME)
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Post {
    public static final String TABLE_NAME = "post";

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true, nullable = false, updatable = false, insertable = false)
    @NotNull
    private UUID id;

    @Column(name = "title", nullable = false)
    @NotBlank
    private String title;

    @Column(name = "category", nullable = false)
    @NotNull
    private PostCategory postCategory;

    @Column(name = "created_at", updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @Column(name = "likes", nullable = false)
    @ColumnDefault("0")
    @NotNull
    private Integer likes = 0;

    @Column(name = "text", nullable = false)
    @NotBlank
    private String text;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @NotNull
    private User user;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Comment> comments;


    public Post(String title, PostCategory postCategory, User user, String text){
        this.title = title;
        this.postCategory = postCategory;
        this.user = user;
        this.text = text;
    }
}
