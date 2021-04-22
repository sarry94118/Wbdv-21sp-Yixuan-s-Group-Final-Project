const findBreed= (breed) => {
    return fetch(`https://petfinderserver.herokuapp.com/api/pets/${breed}`)
        .then(response => response.json())
}

const findPetById = (Id) => {
    return fetch(`https://petfinderserver.herokuapp.com/api/pet/${Id}`)
        .then(response => response.json())
}

export default {
    findBreed, findPetById
}

// const findBreed= (breed) => {
//     return fetch(`http://localhost:8080/api/pets/${breed}`)
//         .then(response => response.json())
// }
//
// const findPetById = (Id) => {
//     return fetch(`http://localhost:8080/api/pet/${Id}`)
//         .then(response => response.json())
// }
//
// export default {
//     findBreed, findPetById
// }