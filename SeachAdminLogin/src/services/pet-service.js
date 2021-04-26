import axios from "axios";
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

// const API_URL = "http://localhost:8090/api/pets";
// const API_URL = "http://localhost:8080/api/pets";
// <<<<<<< HEAD
// const API_URL = "https://petfinderserver.herokuapp.com/api/pets";
const PET_URL=process.env.REACT_APP_PET_URL

const API_URL = PET_URL + "/pets"
// =======
// const API_URL = "https://petfinderserver2.herokuapp.com/api/pets";
// >>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089

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
    fetch(`${PET_URL}/pet/${petId}`)
        .then(response => response.json())

//
// export const findPetForId=(petId) =>
//     fetch(`http://localhost:8090/api/pet/${petId}`)
//         .then(response => response.json())







export default {
    createPet,
    deletePet,
    updatePet,
    findPetForUser,
    findAllPets,
    findPetForId
};