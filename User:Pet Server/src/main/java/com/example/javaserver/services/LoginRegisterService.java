package com.example.javaserver.services;

import com.example.javaserver.models.LoginRegister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LoginRegisterService {
    private List<LoginRegister> users = new ArrayList<>();
    {

        LoginRegister l1 = new LoginRegister("1234", "sarry", "123", "admin");
        LoginRegister l2 = new LoginRegister("1235", "alex", "123", "user");
        LoginRegister l3 = new LoginRegister("1236", "lee", "123", "user");
        LoginRegister l4 = new LoginRegister("1237", "jose", "123", "user");

        users.add(l1);
        users.add(l2);
        users.add(l3);
        users.add(l4);
    }

    public LoginRegister createUser(String userId, LoginRegister user) {

        user.setUserId(userId);
        users.add(user);
        return user;
    }

    public List<LoginRegister> findAllUsers() {
        return users;
    }

    public List<LoginRegister> findUser(String userId) {
        List<LoginRegister> us = new ArrayList<LoginRegister>();
        for(LoginRegister u:users) {
            if(u.getUserId().equals(userId)) {
                us.add(u);
            }
        }
        return us;
    }

    public Integer deleteUser(String userId) {
        int index = -1;
        for(int i = 0; i < users.size();i++) {
            if(users.get(i).getUserId().equals(userId)){
                index = i;
                users.remove(index);
                return 1;
            }
        }
        return -1;

    }

    public Integer updateUser(String userId, LoginRegister user) {
        for(int i = 0; i < users.size();i++) {
            if(users.get(i).getUserId().equals(userId)){
                users.set(i, user);
                return 1;
            }
        }
        return -1;
    }


}
