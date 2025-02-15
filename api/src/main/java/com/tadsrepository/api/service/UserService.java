package com.tadsrepository.api.service;

import com.tadsrepository.api.dto.UserGetDTO;
import com.tadsrepository.api.dto.UserPatchDTO;
import com.tadsrepository.api.dto.UserRegisterDTO;
import com.tadsrepository.api.dto.UserRegisterResponseDTO;
import com.tadsrepository.api.model.User;
import com.tadsrepository.api.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public UserGetDTO getUserDTOByName(String username){
        Optional<User> userFound = userRepository.findByUsername(username);

        if(userFound.isEmpty()){
            throw new IllegalArgumentException("User not found: " + username);
        }

        User user = userFound.get();
        return new UserGetDTO(
                user.getUsername(),
                user.getSuapUsername()
        );
    }

    public User getUserByName(String username){
        Optional<User> userFound = userRepository.findByUsername(username);

        if(userFound.isEmpty()){
            throw new IllegalArgumentException("User not found: " + username);
        }

        return userFound.get();
    }

    @Transactional
    public UserRegisterResponseDTO createUser(UserRegisterDTO userRegisterDTO){
        User newUser = new User(
                userRegisterDTO.username(),
                userRegisterDTO.password(),
                userRegisterDTO.suapUsername()
        );

        userRepository.save(newUser);

        return new UserRegisterResponseDTO(userRegisterDTO.username(), userRegisterDTO.suapUsername());
    }

    @Transactional
    public void deleteUser(String username){
        User foundUser = this.getUserByName(username);

        userRepository.delete(foundUser);
    }

    @Transactional
    public void updateUser(String username, UserPatchDTO userPatchDTO){
        User foundUser = this.getUserByName(username);

        Optional<User> checkNewUsername = userRepository.findByUsername(userPatchDTO.username());
        if(checkNewUsername.isPresent()){
            throw new IllegalArgumentException("O username '" + userPatchDTO.username() + "' ja esta em uso.");
        }

        foundUser.setUsername(userPatchDTO.username());

        userRepository.saveAndFlush(foundUser);
    }
}
