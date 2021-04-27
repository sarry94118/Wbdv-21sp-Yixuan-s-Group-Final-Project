import axios from "axios";

// const API_URL = "http://localhost:8090/api/users";
// const API_URL = "http://localhost:8080/api/users";
// <<<<<<< HEAD
// <<<<<<< HEAD
{/*=======*/}
// <<<<<<< HEAD
// >>>>>>> 441cf0e02bfc4e5cf70da01ac18432764e4cbf68
// const API_URL = "https://petfinderserver.herokuapp.com/api/users";

const PET_URL=process.env.REACT_APP_PET_URL

const API_URL = PET_URL + "/users"
// <<<<<<< HEAD
// =======
// const API_URL = "https://petfinderserver2.herokuapp.com/api/users";
// >>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
// =======
// =======
// const API_URL = "https://petfinderserver2.herokuapp.com/api/users";
// >>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
// >>>>>>> 441cf0e02bfc4e5cf70da01ac18432764e4cbf68

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


export const findUserByUserId =(uid) =>
    fetch(`${API_URL}/userid/${uid}`)
        .then(response => {
            if (response) {
                return response.json()
            }else{
                return null
            }
        })

// @GetMapping("/api/users/username/{user}")
export const findUserForUsername= (username) =>
    fetch(`${API_URL}/username/${username}`)
        .then(response => {
            if (response) {
                return response.json()
            }else{
                return null
            }
        })

//added by Meng Wang
// api/users/register
const register = (credentials) => {
    console.log("user service register")
    console.log(JSON.stringify(credentials))
    return fetch(`${API_URL}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            // console.log("response.json=" + response.json())
            return response.json()
            // if(response){
            //     console.log(response)
            //     return response.json()
            // }else{
            //     return null
            // }
        })
}


const createUserWithoutLogin = (credentials)=>{
    console.log("user service create")
    console.log(JSON.stringify(credentials))
    return fetch(`${API_URL}/create`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
}

//added by Meng Wang
const profile = () => {
    return fetch(`${API_URL}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}

//added by Meng Wang
const login = (credentials) => {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

//added by Meng Wang
const logout = () => {
    return fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include"
    }).then(() => {})
}

export default {
    createUser,
    deleteUser,
    updateUser,
    findUserForUsername,
    findUserByUserId,
    findAllUsers,
    register,
    login,
    logout,
    profile,
    createUserWithoutLogin
};