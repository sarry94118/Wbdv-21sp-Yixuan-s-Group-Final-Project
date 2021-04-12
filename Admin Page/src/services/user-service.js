const USER_URL="https://petfinderserver.herokuapp.com/api/users"

const findAllUsers = ()=>{
    return fetch(USER_URL).then(res=>res.json())
}

const findUserById = (userId)=>{
    return fetch(`${USER_URL}/userid/${userId}`).then(res=>res.json())
}

const findUsersByName = ()=>{}
const findUsersByKey = ()=>{}
const updateUser = ()=>{}
const deleteUser = ()=>{}
const createUser = ()=>{}


export default {
    findAllUsers,
    findUserById,
    findUsersByName,
    findUsersByKey,
    updateUser,
    deleteUser,
    createUser
}