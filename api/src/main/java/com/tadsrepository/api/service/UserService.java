package com.tadsrepository.api.service;

import com.tadsrepository.api.dto.UserGetDTO;
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


    public UserGetDTO getUserByName(String username){
        Optional<User> userFound = userRepository.findByUsername(username);

        if(userFound.isEmpty()){
            throw new IllegalArgumentException("User not found: " + username);
        }else{
            User user = userFound.get();
            return new UserGetDTO(
                    user.getUsername(),
                    user.getSuapUsername()
            );
        }
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
}
