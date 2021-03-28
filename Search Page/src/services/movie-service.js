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


const findMovieByTitle = (breed, accessToken) => {

    return fetch(`https://api.petfinder.com/v2/animals?type=${breed}&page=2`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,

        }
    }).then(response => response.json())

}

const findMovieByImdbID = (id, accessToken) => {
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
    findMovieByTitle,
    findMovieByImdbID
}