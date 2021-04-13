import axios from "axios";
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

// const API_URL = "http://localhost:8080/api/users";
const API_URL = "https://petfinderserver.herokuapp.com/api/pets";

export const findAllPets = () =>
    fetch(API_URL)
        .then(response => response.json())

export const createPet = (userId, pet) =>
    fetch(`${API_URL}/${userId}/pet`, {
        method: 'POST',
        body: JSON.stringify(pet),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deletePet = (petId) =>
    fetch(`${API_URL}/${petId}`, {
        method:'DELETE',
    })
        .then(response => response.json())


export const updatePet = (petId, pet) =>
    fetch(`${API_URL}/${petId}`, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(pet),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findPetForUser= (userId) =>
    fetch(`${API_URL}/${userId}/pet`)
        .then(response =>response.json())

export const findPetForId=(petId) =>
    fetch(`https://petfinderserver.herokuapp.com/api/pet/${petId}`)
        .then(response => response.json())






export default {
    createPet,
    deletePet,
    updatePet,
    findPetForUser,
    findAllPets,
    findPetForId
};