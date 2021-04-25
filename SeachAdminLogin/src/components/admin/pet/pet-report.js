import React, {useEffect, useState} from "react"
import NavBar from "../../nav-bar";
import {Link, useParams} from "react-router-dom";

import petService from "../../../services/admin-service/pet-service"

const PetReport = () => {
    const {userId} = useParams();

    const [newPet, setNewPet] = useState({
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

    // let newPet

    useEffect(() => {
    }, [])
    return <div>
        <NavBar/>
        <h3>Report Missing Pet</h3>
        <div className="container-fluid wm-auto-margin">
            <div className="row">
                <label className="col-3">
                    <label className="text-danger">*</label>
                    Name</label>
                <input
                    className="col"
                    placeholder="pet's name"
                    value={newPet.name}
                    onChange={event => setNewPet({...newPet, name:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">
                    <label className="text-danger">*</label>
                    Breed
                </label>
                <input
                    className="col"
                    placeholder="pet's breed"
                    value={newPet.breed}
                    onChange={event => setNewPet({...newPet, breed:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">Gender</label>
                <select className="col" value={newPet.gender}
                        onChange={event => setNewPet({...newPet, gender:event.target.value})}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </div>
            <div className="row">
                <label className="col-3">Age</label>
                <input
                    type="number"
                    className="col"
                    placeholder="pet's age"
                    value={newPet.age}
                    onChange={event => setNewPet({...newPet, age:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">City</label>
                <input
                    className="col"
                    placeholder="please input the city where the pet got lost"
                    value={newPet.city}
                    onChange={event => setNewPet({...newPet, city:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">State</label>
                <input
                    className="col"
                    placeholder="please input the state where the pet got lost"
                    value={newPet.state}
                    onChange={event => setNewPet({...newPet, state:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">Zipcode</label>
                <input
                    type="number"
                    className="col"
                    placeholder="please input the zipcode"
                    value={newPet.zipcode}
                    onChange={event => setNewPet({...newPet, zipcode:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">Status</label>
                <select className="col" value={newPet.status}
                        onChange={event => setNewPet({...newPet, status:event.target.value})}>
                    <option value="missing">Missing</option>
                    <option value="found">Found</option>
                </select>
            </div>
            <div className="row">
                <label className="col-3">Photo</label>
                <input
                    className="col"
                    placeholder="please provide the url of the photo of your pet"
                    value={newPet.image}
                    onChange={event => setNewPet({...newPet, image:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">Description</label>
                <textarea
                    className="col"
                    rows="5"
                    placeholder="please describe pet's looking and character"
                    value={newPet.description}
                    onChange={event => setNewPet({...newPet, description:event.target.value})}/>
            </div>
        </div>
            <br />
            <Link to="/admin/pets" onClick={()=>{
                console.log("report newpet=" + JSON.stringify(newPet))
                console.log(userId + " report")
                petService.createPet(userId, newPet)
                    .then(res => console.log(res))
            }}>
                <i className="btn btn-primary">Report</i>
            </Link>
    </div>

}

export default PetReport