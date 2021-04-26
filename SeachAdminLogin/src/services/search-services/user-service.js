const findUserByUserId= (userId) => {
    return fetch(`https://petfinderserver2.herokuapp.com/api/users/userid/${userId}`)
        .then(response => response.json())
}



export default {
    findUserByUserId
}


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

