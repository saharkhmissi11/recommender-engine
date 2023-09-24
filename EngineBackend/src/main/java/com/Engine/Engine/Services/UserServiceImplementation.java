package com.Engine.Engine.Services;

import com.Engine.Engine.Models.User;
import com.Engine.Engine.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImplementation implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    @Override
    public boolean EmailExists(String email) {
        return getUsers().stream().anyMatch(user -> user.getEmail().equals(email));
    }
}
