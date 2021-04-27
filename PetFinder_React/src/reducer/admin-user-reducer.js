const initialState = {
    users:[]
}

const AdminUserReducer = (preState=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_USERS":
            return  {...preState,
                users : action.users}
        case "DELETE_USER":
            return ({...preState,
                users: preState.users.filter(
                    user => user.userId === action.userIdToDelete? false : true)})
        default: return preState
    }
}

export default AdminUserReducer