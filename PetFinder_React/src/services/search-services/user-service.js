const PET_URL=process.env.REACT_APP_PET_URL

const findUserByUserId= (userId) => {
// <<<<<<< HEAD
// <<<<<<< HEAD
//     return fetch(`${PET_URL}/users/userid/${userId}`)
// =======
//     return fetch(`https://petfinderserver2.herokuapp.com/api/users/userid/${userId}`)
// >>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
// =======
// <<<<<<< HEAD
    return fetch(`${PET_URL}/users/userid/${userId}`)
// =======
//     return fetch(`https://petfinderserver2.herokuapp.com/api/users/userid/${userId}`)
// >>>>>>> 540f506ba4b6e8f62a29b143bd175e2b361f2089
// >>>>>>> 441cf0e02bfc4e5cf70da01ac18432764e4cbf68
        .then(response => response.json())
}



export default {
    findUserByUserId
}


//
//
// const findUserByUserId= (userId) => {
//     return fetch(`http://localhost:8090/api/users/userid/${userId}`)
//         .then(response => response.json())
// }
//
//
//
// export default {
//     findUserByUserId
// }

