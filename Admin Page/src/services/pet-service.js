const PET_URL="https://petfinderserver.herokuapp.com/api/pets"

const findAllPets = ()=>{
    return fetch(PET_URL).then(res=>res.json())
}

const findPetById = (petId)=>{
    return fetch(`${PET_URL}/${petId}`).then(res=>res.json())
}

const findPetsForUser = (userId)=>{
    return fetch(`${PET_URL}/${userId}/pet`).then(res=>res.json())
}

const findPetsByKey = ()=>{}
const updatePet = ()=>{}
const deletePet = ()=>{}
const createPet = ()=>{}


export default {
    findAllPets,
    findPetById,
    findPetsByKey,
    findPetsForUser,
    updatePet,
    deletePet,
    createPet
}