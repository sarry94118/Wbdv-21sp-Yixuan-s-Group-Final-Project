const initialState = {
    pets:[]
}

const AdminPetReducer = (preState=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_PETS":
            return {...preState, pets: action.pets}
        case "FIND_PETS_FOR_USER":
            return {
                ...preState, pets: action.pets
            }
        case "ADMIN_DELETE_PET":
            return {...preState,
                pets: preState.pets.filter(pet => {
                    if(pet.petId === action.petIdToDelete) {
                        return false;
                    } else{
                        return true;
                    }
                })
            }
        default: return preState
    }
}

export default AdminPetReducer