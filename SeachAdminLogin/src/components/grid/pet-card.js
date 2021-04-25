import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom";
import petService from "../../services/pet-service";
import { useHistory } from 'react-router'
import {connect} from "react-redux";

const PetCard = (
    {
        pet = {},
        // findPetForId,
        // deletePet,
        // updatePet,
    }) => {

    const {petId} = useParams()
    const [updatePuppy, setUpdatePuppy] = useState(pet)
    const [edited, setEdited] = useState(false);
    const history = useHistory()




    useEffect(() => {
        console.log(petId)
        // if(petId !== "undefined" && typeof petId !== "undefined") {

        findPetForId(petId)

        // setUpdatePuppy(pet)
        console.log("setup")
        console.log(pet)
        console.log(updatePuppy)


    }, [petId])

    const refreshPage = () =>{

        history.go(0)
    }


    const findPetForId = (petId) => {
        petService.findPetForId(petId)
            .then((pet) => {
                setUpdatePuppy(pet)
                console.log(pet)
                // refreshPage()

            })
    }

    const deletePet = (petId) => {
        petService.deletePet(petId)
            // .then(status => dispatch({
            //     type: "DELETE_PET",
            //     petToDelete: petId
            // }))
    }

    const updatePet = (petId, pet) => {
        petService.updatePet(petId, pet)
            .then((pet) => {
                {
                    setUpdatePuppy(pet)
                }
                refreshPage()
            })
    }

    return (
        <div>
            {/*{JSON.stringify(updatePuppy)}*/}
            {
            edited &&

            <form>

                    <i onClick={() => {
                        findPetForId(petId)
                        updatePet(petId, updatePuppy)
                        setEdited(false)
                        findPetForId(petId)

                    }} className="fas fa-check float-right fa-2x">Update</i>

                    {/*<i onClick={() => deletePet(petId)} className="fas fa-trash float-right"></i>*/}
                    <div className="form-group">
                        <label>Name</label>
                        <textarea  className="form-control" value={updatePuppy.name}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           name:e.target.value
                                       })}
                        >{updatePuppy.name}</textarea>
                     </div>

                    <div className="form-group">
                        <label>Breed</label>
                        <textarea  className="form-control" value={updatePuppy.breed}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           breed:e.target.value
                                       })}
                        >{updatePuppy.breed}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <textarea  className="form-control" value={updatePuppy.gender}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           gender:e.target.value
                                       })}
                        >{updatePuppy.gender}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <textarea  className="form-control" value={updatePuppy.age}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           age:e.target.value
                                       })}
                        >{updatePuppy.age}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <textarea  className="form-control" value={updatePuppy.image}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           image:e.target.value
                                       })}
                        >{updatePuppy.image}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <textarea  className="form-control" value={updatePuppy.status}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           status:e.target.value
                                       })}
                        >{updatePuppy.status}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea  className="form-control" value={updatePuppy.description}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           description:e.target.value
                                       })}
                        >{updatePuppy.description}</textarea>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <textarea  className="form-control" value={updatePuppy.state}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           state:e.target.value
                                       })}
                        >{updatePuppy.state}</textarea>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <textarea  className="form-control" value={updatePuppy.city}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           city:e.target.value
                                       })}
                        >{updatePuppy.city}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Zipcode</label>
                        <textarea  className="form-control" value={updatePuppy.zipcode}
                                   onChange={(e) =>
                                       setUpdatePuppy({
                                           ...updatePuppy,
                                           zipcode:e.target.value
                                       })}
                        >{updatePuppy.zipcode}</textarea>
                    </div>


            </form>
            }

            {

                !edited &&
                <>
                    {/*<button onClick={() => refreshPage()}>refresh to see update</button>*/}

                    <i onClick={() => setEdited(true)} className="fas fa-cog float-right fa-2x">Edit</i>
                    <form>


                        <div className="form-group">
                            <label>Name</label>
                            <textarea  className="form-control" value={updatePuppy.name}>{updatePuppy.name}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Breed</label>
                            <textarea  className="form-control" value={updatePuppy.breed}>{updatePuppy.breed}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <textarea  className="form-control" value={updatePuppy.gender}>{updatePuppy.gender}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <textarea  className="form-control" value={updatePuppy.age}>{updatePuppy.age}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <textarea  className="form-control" value={updatePuppy.image}>{updatePuppy.image}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <textarea  className="form-control" value={updatePuppy.status}>{updatePuppy.status}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Desciption</label>
                            <textarea  className="form-control" value={updatePuppy.description}>{updatePuppy.description}</textarea>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <textarea  className="form-control" value={updatePuppy.state}>{updatePuppy.state}</textarea>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <textarea  className="form-control" value={updatePuppy.city}>{updatePuppy.city}</textarea>
                        </div>
                        <div className="form-group">
                            <label>Zipcode</label>
                            <textarea  className="form-control" value={updatePuppy.zipcode}>{updatePuppy.zipcode}</textarea>
                        </div>

                    </form>

                </>
            }
            {/*{JSON.stringify(updatePuppy)}*/}
    </div>

)
}

export default PetCard
