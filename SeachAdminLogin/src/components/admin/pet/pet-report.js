import React, {useEffect, useState} from "react"
import NavBar from "../../nav-bar";
import {Link, useParams} from "react-router-dom";

import petService from "../../../services/admin-service/pet-service"
import sessionUserService from "../../../services/user-service"

const PetReport = () => {
    const {edit, petId} = useParams();

    // const [cachedPet, setCachedPet] = useState({
    const [cachedPet, setCachedPet] = useState({
        // userId: userId,
        name: "",
        gender: "female",
        age: 0,
        breed: "",
        image: "",
        description: "",
        status: "missing",
        city: "",
        state: "",
        zipcode: ""
    })

    const newPet = {
        // userId: userId,
        name: "",
        gender: "female",
        age: 0,
        breed: "",
        image: "",
        description: "",
        status: "missing",
        city: "",
        state: "",
        zipcode: ""
    }

    const [currentUser, setCurrentUser] = useState({})
    const [showReportForm, setShowReportForm] = useState(false)

    useEffect(() => {
        sessionUserService.profile().then(user=>{
            if(user && user.username !== null){
                setCurrentUser(user)
                setShowReportForm(true)
                if(edit === "edit" && petId){
                    petService.findPetById(petId).then(pet=> setCachedPet(pet))
                }else if(edit === "report"){
                    setCachedPet( {
                        // userId: userId,
                        name: "",
                        gender: "female",
                        age: 0,
                        breed: "",
                        image: "",
                        description: "",
                        status: "missing",
                        city: "",
                        state: "",
                        zipcode: ""
                    })
                }
            }else {
                setShowReportForm(false)
            }
        })
    }, [])

    return <div>
        <NavBar/>
        {
            edit === "edit" &&
                <h3>Edit Pet Infomation</h3>
        }
        {
            edit === "report" &&
            <h3>Report Missing Pet</h3>
        }
        {
            showReportForm &&
            <>
                <div className="container-fluid wm-auto-margin">
                    <div className="row">
                        <label className="col-3">
                            <label className="text-danger">*</label>
                            Name</label>
                        <input
                            className="col"
                            placeholder="Pet's name"
                            value={cachedPet.name}
                            onChange={event => setCachedPet({...cachedPet, name:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">
                            <label className="text-danger">*</label>
                            Breed
                        </label>
                        <input
                            className="col"
                            placeholder="Pet's breed"
                            value={cachedPet.breed}
                            onChange={event => setCachedPet({...cachedPet, breed:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">Gender</label>
                        <select className="col" value={cachedPet.gender}
                                onChange={event => setCachedPet({...cachedPet, gender:event.target.value})}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div className="row">
                        <label className="col-3">Age</label>
                        <input
                            type="number"
                            className="col"
                            placeholder="Pet's age"
                            value={cachedPet.age}
                            onChange={event => setCachedPet({...cachedPet, age:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">City</label>
                        <input
                            className="col"
                            placeholder="Input the city where the pet got lost"
                            value={cachedPet.city}
                            onChange={event => setCachedPet({...cachedPet, city:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">State</label>
                        <input
                            className="col"
                            placeholder="Input the state where the pet got lost"
                            value={cachedPet.state}
                            onChange={event => setCachedPet({...cachedPet, state:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">Zipcode</label>
                        <input
                            type="number"
                            className="col"
                            placeholder="Input the zipcode"
                            value={cachedPet.zipcode}
                            onChange={event => setCachedPet({...cachedPet, zipcode:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">Status</label>
                        <select className="col" value={cachedPet.status}
                                onChange={event => setCachedPet({...cachedPet, status:event.target.value})}>
                            <option value="missing">Missing</option>
                            <option value="found">Found</option>
                        </select>
                    </div>
                    <div className="row">
                        <label className="col-3">Photo</label>
                        <input
                            className="col"
                            placeholder="Provide the url of pet photo, start with 'http://'"
                            value={cachedPet.image}
                            onChange={event => setCachedPet({...cachedPet, image:event.target.value})}/>
                    </div>
                    <div className="row">
                        <label className="col-3">Description</label>
                        <textarea
                            className="col"
                            rows="5"
                            placeholder="describe pet's looking and character"
                            value={cachedPet.description}
                            onChange={event => setCachedPet({...cachedPet, description:event.target.value})}/>
                    </div>
                </div>
                <br />
                {
                    edit === "edit" &&
                    <Link to={`/users/${currentUser.userId}/pets`} onClick={()=>{
                        console.log(currentUser.userId + " update " + petId + " =" + JSON.stringify(cachedPet))
                        petService.updatePet(currentUser.userId, cachedPet)
                            .then(res => console.log(res))
                    }}>
                        <i className="btn btn-primary">Update</i>
                    </Link>
                }
                {
                    edit === "report" &&
                    <Link to="/admin/pets" onClick={()=>{
                        console.log(currentUser.userId + " report new pet=" + JSON.stringify(cachedPet))
                        petService.createPet(currentUser.userId, cachedPet)
                            .then(res => console.log(res))
                    }}>
                        <i className="btn btn-primary">Post</i>
                    </Link>
                }
            </>
        }
        {
            !showReportForm && <h3>To post pet, you have to login.</h3>
        }
    </div>

}

export default PetReport