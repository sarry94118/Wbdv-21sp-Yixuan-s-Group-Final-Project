import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import petService from "../../services/pet-service"
import {useParams, useHistory} from "react-router-dom";
import petsReducer from "../../reducer/pet-reducer";
import PetCard from "../grid/pet-card";


const PostTable =({
                      pets=[],
                      findPetForUser,
                      deletePet,
                      createPet,
                      updatePet,

            }) =>{

        const {userId} = useParams()
        const [editing, setEditing] = useState(false)
        const [updatePets, setUpdatePets] = useState(pets)


        useEffect(() => {
            findPetForUser(userId)
            setUpdatePets(pets)
            console.log(userId)

        },[userId])


        return(
            <div>
                <i className="fas fa-plus-circle float-right fa-2x"
                    onClick={()=>
                        createPet(userId)}></i>
                <h1>Post Table</h1>
                {JSON.stringify(updatePet)}

                <table className="table table-striped">
                    <thead>
                    <td style={{fontWeight: 'bold'}}>Name</td>
                    <td className="d-none d-sm-table-cell"  style={{fontWeight: 'bold'}}>Breed</td>
                    <td className="d-none d-md-table-cell"  style={{fontWeight: 'bold'}}>Status</td>

                    </thead>

                    <tbody>

                    {
                        pets && pets.map(pet =>
                        <tr>
                            {/*<Link to={`/petlist/post/card/${pet.petId}`}>*/}
                            <td scope="col">
                                <Link to={`/petlist/post/card/${pet.petId}`}>
                                    {pet.name}
                                </Link>
                            </td>
                                {/*<Link/>*/}

                            <td className="d-none d-sm-table-cell">{pet.breed}</td>
                            <td className="d-none d-md-table-cell">{pet.status}</td>
                            <i className="fas fa-trash"
                               onClick={()=>
                               {deletePet(pet.petId)}}></i>
                        </tr>
                        )
                    }


                    </tbody>
                </table>
            </div>
        )
    }

const stpm = (state) =>({

    pets: state.petsReducer.pets
})

const dtpm = (dispatch) =>({

    findPetForUser: (userId) => {
        petService.findPetForUser(userId)
            .then(pets => dispatch({
                type: "FIND_PET",
                pets
            }))
    },

    createPet: (userId) => {
        petService.createPet(userId, {name:"new pet", breed:"new breed", status:"current status"})
            .then(pet => dispatch ({
                type: "CREATE_PET",
                pet
            }))
    },
    deletePet: (petId) => {
        petService.deletePet(petId)
            .then(status => dispatch({
                type: "DELETE_PET",
                petToDelete: petId
            }))
    },

    updatePet: (petId, pet) => {
        petService.updatePet(petId, pet)
            .then(status => dispatch({
                type: "UPDATE_PET",
                pet: pet
            }))
    },

    findPetForId:(petId) => {
        // petService.findPetForId(petId)
        //     .then(pet => dispatch({
        //         type: "FIND_PET_FOR_PETID",
        //         pet: pet
        //     }))
        petService.findPetForId(petId)
            .then(pet => {

            })
    }

})

export default connect(stpm, dtpm)(PostTable)

// export default PostTable