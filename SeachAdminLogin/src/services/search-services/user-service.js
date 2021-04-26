const PET_URL=process.env.REACT_APP_PET_URL

const findUserByUserId= (userId) => {
    return fetch(`${PET_URL}/users/userid/${userId}`)
        .then(response => response.json())
}



export default {
    findUserByUserId
}



// const findUserByUserId= (userId) => {
//     return fetch(`http://localhost:8090/api/users/userid/${userId}`)
//         .then(response => response.json())
// }



// export default {
//     findUserByUserId
// }

