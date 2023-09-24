package com.Engine.Engine.Controllers;
import com.Engine.Engine.Models.User;
import com.Engine.Engine.Services.UserService;
import com.Engine.Engine.Services.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping("/createUser")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }
    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }
    @GetMapping("/check-email")
    public boolean checkEmailExists(@RequestParam String email) {
        return userService.EmailExists(email);
    }
}
