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
                pets: preState.pets.filter(
                    pet => pet.petId === action.petIdToDelete? false : true)
            }
        case "UPDATE_PET":
            return {

                pets: preState.pets.filter(pet => pet.petId !== action.pet.petId ? pet : action.pet)
            }
        default: return preState
    }
}

export default AdminPetReducer