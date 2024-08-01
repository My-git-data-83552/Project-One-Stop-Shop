package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import com.onestopshop.entities.User;

public interface UserService {
    User addUser(User user);
    Optional<User> getUserById(Long id);
   List<User> getAllUsers();
}
