const PET_URL=process.env.REACT_APP_PET_URL

const findBreed= (breed) => {
<<<<<<< HEAD
    return fetch(`${PET_URL}/pets/${breed}`)
=======
    return fetch(`https://petfinderserver2.herokuapp.com/api/pets/${breed}`)
>>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
        .then(response => response.json())
}

const findPetById = (Id) => {
<<<<<<< HEAD
    return fetch(`${PET_URL}/pet/${Id}`)
=======
    return fetch(`https://petfinderserver2.herokuapp.com/api/pet/${Id}`)
>>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
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