package com.example.javaserver.services;

import com.example.javaserver.models.LoginRegister;
import com.example.javaserver.models.PetInfo;
import org.springframework.stereotype.Service;
import org.w3c.dom.ls.LSException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PetInfoService {
    private List<PetInfo> pets = new ArrayList<>();
    {

        PetInfo p1 = new PetInfo(234l, "1235", "corgi", "orange", "female", 4, "", null, null, "adopatable", "cute doggy!");
        PetInfo p2 = new PetInfo(235l, "1235", "husky", "apple", "male", 3, "", null, null, "adopatable", "cute doggy!");
        PetInfo p3 = new PetInfo(236l, "1236", "chihuahua", "bun", "female", 7, "", null, null, "adopatable", "cute doggy!");
        PetInfo p4 = new PetInfo(237l, "1237", "bichon", "dudu", "female", 9, "", null, null, "adopatable", "cute doggy!");

        pets.add(p1);
        pets.add(p2);
        pets.add(p3);
        pets.add(p4);
    }

    public PetInfo createPet(String userId, PetInfo pet) {

        pet.setUserId(userId);
        pet.setPetId((new Date()).getTime());
        pets.add(pet);
        return pet;
    }

    public List<PetInfo> findAllPets(){return pets;}

    public List<PetInfo> findPetForUser(String userId) {
        List<PetInfo> pt = new ArrayList<>();
        for(PetInfo p:pets) {
            if(p.getUserId().equals(userId)) {
                pt.add(p);
            }
        }
        return pt;
    }

    public Integer deletePet(Long petId) {
        int index = -1;
        for(int i = 0; i < pets.size();i++) {
            if(pets.get(i).getPetId().equals(petId)){
                index = i;
                pets.remove(index);
                return 1;
            }
        }
        return -1;

    }

    public Integer updatePet(Long petId, PetInfo pet) {
        for(int i = 0; i < pets.size();i++) {
            if(pets.get(i).getPetId().equals(petId)){
                pets.set(i, pet);
                return 1;
            }
        }
        return -1;
    }



}
