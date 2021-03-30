package com.example.javaserver.models;

public class PetInfo {
    private Long petId;
    private String userId;
    private String breed;
    private String name;
    private String gender;
    private Integer age;
    private String image;
    private Integer width;
    private Integer height;
    private String status;
    private String description;

    public Long getPetId() {
        return petId;
    }

    public void setPetId(Long petId) {
        this.petId = petId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public PetInfo(Long petId, String userId, String breed, String name, String gender, Integer age, String image, Integer width, Integer height, String status, String description) {
        this.petId = petId;
        this.userId = userId;
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.image = image;
        this.width = width;
        this.height = height;
        this.status = status;
        this.description = description;
    }

    public PetInfo() {
    }
}
