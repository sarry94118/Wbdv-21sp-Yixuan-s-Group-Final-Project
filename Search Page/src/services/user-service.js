const findUserByUserId= (userId) => {
    return fetch(`https://petfinderserver.herokuapp.com/api/users/userid/${userId}`)
        .then(response => response.json())
}



export default {
    findUserByUserId
}