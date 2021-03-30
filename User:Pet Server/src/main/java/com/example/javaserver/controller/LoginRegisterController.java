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

    @PostMapping("/api/users/{uid}/user")
    public LoginRegister createUser(
            @PathVariable("uid") String userId,
            @RequestBody LoginRegister user) {

        return service.createUser(userId, user);
    }


    @GetMapping("/api/users")
    public List<LoginRegister> findAllUsers() {
        return service.findAllUsers();
    }

//    @GetMapping("/api/widgets/{wid}")
//    public Widget findWidgetForDelete(@PathVariable("wid")Long widgetId) {
//        return service.findWidgetForDelete(widgetId);
//    }

    @GetMapping("/api/users/{uid}/user")
    public List<LoginRegister> findWidgetsForTopic(@PathVariable("uid") String userId) {
        return service.findUser(userId);
    }

    @DeleteMapping("/api/users/{uid}")
    public Integer deleteUser(
            @PathVariable("uid")String userId) {
        return service.deleteUser(userId);

    }

    @PutMapping("/api/users/{uid}")
    public Integer updateUser(
            @PathVariable("uid") String userId,
            @RequestBody LoginRegister user) {
        return service.updateUser(userId, user);
    }
}
