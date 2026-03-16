package com.example.demo1.controller;

import com.example.demo1.Model.User;
import com.example.demo1.Model.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @SuppressWarnings("null")
    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}