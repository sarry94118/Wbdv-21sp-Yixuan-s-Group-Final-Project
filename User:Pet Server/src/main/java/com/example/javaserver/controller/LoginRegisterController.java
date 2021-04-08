package com.example.javaserver.controller;
import com.example.javaserver.models.LoginRegister;
import com.example.javaserver.services.LoginRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class LoginRegisterController {
    @Autowired
    LoginRegisterService service;

    @PostMapping("/api/users/username/{username}")
    public LoginRegister createUser(
            @PathVariable("username") String username,
            @RequestBody LoginRegister user) {
        return service.createUser(user);
//        return service.createUser(username, user);
    }


    @GetMapping("/api/users")
    public List<LoginRegister> findAllUsers() {
        return service.findAllUsers();
    }

//    @GetMapping("/api/widgets/{wid}")
//    public Widget findWidgetForDelete(@PathVariable("wid")Long widgetId) {
//        return service.findWidgetForDelete(widgetId);
//    }

    @GetMapping("/api/users/username/{user}")
    public List<LoginRegister> findUserbyUsername(@PathVariable("user") String user) {
        return service.findUserByUsername(user);
    }

    @GetMapping("/api/users/userid/{uid}")
    public List<LoginRegister> findUserByUid(@PathVariable("uid") Long uid) {
        return service.findUserByUid(uid);
    }

    @DeleteMapping("/api/users/userid/{uid}")
    public Integer deleteUser(
            @PathVariable("uid")Long userId) {
        return service.deleteUser(userId);

    }

    @PutMapping("/api/users/userid/{uid}")
    public Integer updateUser(
            @PathVariable("uid") Long userId,
            @RequestBody LoginRegister user) {
        return service.updateUser(userId, user);
    }
}
