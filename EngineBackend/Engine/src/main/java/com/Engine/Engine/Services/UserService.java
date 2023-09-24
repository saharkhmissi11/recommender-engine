package com.Engine.Engine.Services;

import com.Engine.Engine.Models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User createUser(User user);
    boolean EmailExists(String email);
    List<User> getUsers();
}
