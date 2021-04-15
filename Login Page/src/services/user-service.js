import axios from "axios";

// const API_URL = "http://localhost:8080/api/users";
const API_URL = "https://petfinderserver.herokuapp.com/api/users";

export const findAllUsers = () =>
    fetch(API_URL)
        .then(response => response.json())

export const createUser = (username, user) =>
    fetch(`${API_URL}/username/${username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteUser = (uid) =>
    fetch(`${API_URL}/${uid}`, {
        method:'DELETE',
    })
        .then(response => response.json())


export const updateUser = (uid, user) =>
    fetch(`${API_URL}/userid/${uid}`, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findUserForUsername= (username) =>
    fetch(`${API_URL}/username/${username}`)
        .then(response =>response.json())





export default {
    createUser,
    deleteUser,
    updateUser,
    findUserForUsername,
    findAllUsers
};