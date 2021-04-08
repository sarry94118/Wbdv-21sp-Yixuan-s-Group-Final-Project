package com.example.javaserver.services;

import com.example.javaserver.models.LoginRegister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class LoginRegisterService {
    private List<LoginRegister> users = new ArrayList<>();
    {

        LoginRegister l1 = new LoginRegister(1234l, "sarry", "cheng", "opas@yahoo.com", "sarry", "123", "admin");
        LoginRegister l2 = new LoginRegister(1235l, "alex", "Chen", "qwee@qq.com","alex", "123", "user");
        LoginRegister l3 = new LoginRegister(1236l, "lily", "lee", "vxcf@gmail.com","lee", "123", "user");
        LoginRegister l4 = new LoginRegister(1237l, "jose", "Andy", "asrar@yahoo.com","jose", "123", "user");

        users.add(l1);
        users.add(l2);
        users.add(l3);
        users.add(l4);
    }

//    public LoginRegister createUser(String username, LoginRegister user) {
//
//        user.setUsername(username);
//        users.add(user);
//        return user;
//    }

    public LoginRegister createUser(LoginRegister user) {

        user.setUserId((new Date()).getTime());
        users.add(user);
        return user;
    }

    public List<LoginRegister> findAllUsers() {
        return users;
    }

    public List<LoginRegister> findUserByUsername(String username) {
        List<LoginRegister> us = new ArrayList<LoginRegister>();
        for(LoginRegister u:users) {
            if(u.getUsername().equals(username)) {
                us.add(u);
            }
        }
        return us;
    }

    public List<LoginRegister> findUserByUid(Long uid) {
        List<LoginRegister> us = new ArrayList<LoginRegister>();
        for(LoginRegister u:users) {
            if(u.getUserId().equals(uid)) {
                us.add(u);
            }
        }
        return us;
    }

    public Integer deleteUser(Long userId) {
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

    public Integer updateUser(Long userId, LoginRegister user) {
        for(int i = 0; i < users.size();i++) {
            if(users.get(i).getUserId().equals(userId)){
                users.set(i, user);
                return 1;
            }
        }
        return -1;
    }


}
