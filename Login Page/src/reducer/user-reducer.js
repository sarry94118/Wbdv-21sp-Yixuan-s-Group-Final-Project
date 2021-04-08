import React from 'react'

const initialState = {

    users:[]
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        case "FIND_USER":
            return {
                ...state,
                users: action.users
            }
        case "DELETE_USER":
            return {

                users: state.users.filter(user => user.userId !== action.userToDelete)
            }

        case "UPDATE_USER":
            return {

                users: state.users.map(user => user.userId !== action.user.userId ? user : action.user)
            }

        default:
            return state
    }
}

export default userReducer