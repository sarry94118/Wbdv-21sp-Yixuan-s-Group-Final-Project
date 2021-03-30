package com.example.javaserver.controller;

import com.example.javaserver.models.LoginRegister;
import com.example.javaserver.models.PetInfo;
import com.example.javaserver.services.LoginRegisterService;
import com.example.javaserver.services.PetInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PetInfoController {

    @Autowired
    PetInfoService service;

    @PostMapping("/api/pets/{pid}/pet")
    public PetInfo creatPet(
            @PathVariable("pid") String userId,
            @RequestBody PetInfo pet) {

        return service.createPet(userId, pet);
    }


    @GetMapping("/api/pets")
    public List<PetInfo> findAllPets() {
        return service.findAllPets();
    }

    @GetMapping("/api/pets/{pid}/pet")
    public List<PetInfo> findPetForUser(@PathVariable("pid") String userId) {
        return service.findPetForUser(userId);
    }

    @DeleteMapping("/api/pets/{pid}")
    public Integer deletePet(
            @PathVariable("pid")Long petId) {
        return service.deletePet(petId);

    }


    @PutMapping("/api/pets/{pid}")
    public Integer updatePet(
            @PathVariable("pid") Long petId,
            @RequestBody PetInfo pet) {
        return service.updatePet(petId, pet);
    }
}
