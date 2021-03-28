//
//
// const findMovieByTitle = (title) => {
// return fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
//     .then(response => response.json())
// }
//
// const findMovieByImdbID = (imdbID) => {
//     return fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
//         .then(response => response.json())
// }
//
// export  default {
//     findMovieByTitle,
//     findMovieByImdbID
// }

// import {createContext, useContext, useState} from "react";
// import {AuthContext} from "../App"
//
// const findMovieByTitle = (breed) => {
//     const [results, setSResults] = useState(null)
//     const accessToken = useContext(AuthContext)
//
//     return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
//         method: 'GET',
//         headers: {
//             "X-Api-Key": "9edd9d8f-8716-4a0a-825f-cbc087d86a63"
//         }
//     })
//         .then(response => response.json())
//
// }
//
// const findMovieByImdbID = (id) => {
//     return fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`, {
//         method: 'GET',
//         headers: {
//             "X-Api-Key": "9edd9d8f-8716-4a0a-825f-cbc087d86a63"
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

    return fetch(`/v2/animals?type=${breed}&page=2`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,

        }
    })
        .then(response =>
            response.json()
        )

}

const findMovieByImdbID = (id, accessToken) => {
    return fetch(`/v2/animals/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    })
        .then(response => response.json())
}

export  default {
    findMovieByTitle,
    findMovieByImdbID
}