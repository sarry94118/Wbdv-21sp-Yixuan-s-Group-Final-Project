//
// const findMovieByTitle = (breed, accessToken) => {
//
//     return fetch(`https://api.petfinder.com/v2/animals?type=${breed}&page=2`, {
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${accessToken}`,
//
//         }
//     })
//         .then(response =>
//             response.json()
//         )
//
// }
//
// const findMovieByImdbID = (id, accessToken) => {
//     return fetch(`https://api.petfinder.com/v2/animals/${id}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${accessToken}`,
//         }
//     })
//         .then(response => response.json())
// }
//
// export  default {
//     findMovieByTitle,
//     findMovieByImdbID
// }

const findBreed= (breed, accessToken) => {

    return fetch(`https://api.petfinder.com/v2/animals?breed=${breed}&page=2`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,

        }
    }).then(response => response.json())

}


const findPetByTypes = (type, accessToken) => {

    return fetch(`https://api.petfinder.com/v2/animals?type=${type}&page=20`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,

        }
    }).then(response => response.json())

}

const findPetByID = (id, accessToken) => {
    return fetch(`https://api.petfinder.com/v2/animals/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    })
        .then(response => response.json())
}


export default {
    findPetByTypes,
    findPetByID,
    findBreed
}