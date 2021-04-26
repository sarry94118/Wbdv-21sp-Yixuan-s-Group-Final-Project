// <<<<<<< HEAD
// const USER_URL="https://petfinderserver.herokuapp.com/api/users"
// =======
// const USER_URL="https://petfinderserver2.herokuapp.com/api/users"
{/*>>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089*/}
// const USER_URL = "http://localhost:8090/api/users";
// const USER_URL = "http://localhost:8080/api/users";

const PET_URL=process.env.REACT_APP_PET_URL

const USER_URL = PET_URL + "/users"

const findAllUsers = ()=>{
    return fetch(USER_URL).then(res=>res.json())
}

const findUserById = (userId)=>{
    return fetch(`${USER_URL}/userid/${userId}`).then(res=>res.json())
}

const register = (credentials) => {
    console.log("user service register")
    return fetch(`${USER_URL}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


const findUsersByName = ()=>{}
const findUsersByKey = ()=>{}

const updateUser = (uid, user) =>
    ///api/users/userid/{uid}
    fetch(`${USER_URL}/userid/${uid}`, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteUser = (uid) =>
    fetch(`${USER_URL}/userid/${uid}`, {
        method:'DELETE',
    })
        .then(response => response.json())

const createUser = ()=>{}


export default {
    findAllUsers,
    findUserById,
    findUsersByName,
    findUsersByKey,
    updateUser,
    deleteUser,
    createUser,
    register
}