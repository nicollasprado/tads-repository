package com.tadsrepository.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.UUID;

@Entity(name = User.TABLE_NAME)
@Table(name = User.TABLE_NAME)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    public static final String TABLE_NAME = "users";

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", unique = true, nullable = false, insertable = false, updatable = false)
    @NotNull
    private UUID id;

    @Column(name = "username", nullable = false)
    @NotBlank
    private String username;

    @Column(name = "password", nullable = false)
    @NotBlank
    private String password;

    @Column(name = "suap_username", nullable = false)
    @NotBlank
    private String suapUsername;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Post> posts;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Comment> comments;


    public User(String username, String password, String suapUsername){
        this.username = username;
        this.password = password;
        this.suapUsername = suapUsername;
    }
}
