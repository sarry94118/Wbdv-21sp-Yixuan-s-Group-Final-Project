import React from 'react'

const initialState = {

    pets:[],
    pet:{}
}

const petsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_PET":
            return {
                ...state,
                pets: [
                    ...state.pets,
                    action.pet
                ]
            }
        case "FIND_PET":
            return {
                ...state,
                pets: action.pets
            }
        case "DELETE_PET":
            const newstate = {

                pets: state.pets.filter(pet => {
                   if(pet.petId === action.petToDelete) {
                       return false;
                } else{
                       return true;
                   }
                })
            }
            return newstate
        // case "DELETE_PET":
        //     return {
        //
        //         pets: state.pets.filter(pet => pet.id !== action.petToDelete)
        //     }

        case "UPDATE_PET":
            return {

                pets: state.pets.map(pet => pet.petId !== action.pet.petId ? pet : action.pet)
            }

        case "FIND_PET_FOR_ID":
            return {
                ...state,
                pet: action.pet
            }

        default:
            return state
    }
}

export default petsReducer