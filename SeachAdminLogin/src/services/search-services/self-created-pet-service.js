const PET_URL=process.env.REACT_APP_PET_URL

const findBreed= (breed) => {
    return fetch(`${PET_URL}/pets/${breed}`)
        .then(response => response.json())
}

const findPetById = (Id) => {
    return fetch(`${PET_URL}/pet/${Id}`)
        .then(response => response.json())
}

export default {
    findBreed, findPetById
}

// const findBreed= (breed) => {
//     return fetch(`http://localhost:8090/api/pets/${breed}`)
//         .then(response => response.json())
// }
//
// const findPetById = (Id) => {
//     return fetch(`http://localhost:8090/api/pet/${Id}`)
//         .then(response => response.json())
// }
//
// export default {
//     findBreed, findPetById
// }