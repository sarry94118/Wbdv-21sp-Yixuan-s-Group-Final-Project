import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import petService from "../../../services/admin-service/pet-service"
import sessionUserService from "../../../services/user-service"
import PetRow from "./pet-row";

const PetList =()=>{

    const [pets, setPets] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        sessionUserService.profile().then(user => {
            if(user !== null && user.username !== null){
                setCurrentUser(user)
                console.log("changeUser.username = " + currentUser.username)
            }else{
                alert("Please login first")
            }
        })
        petService.findAllPets().then(pets=> {
            console.log(pets.length)
            setPets(pets)
        })
    }, [])

    const deletePet = (petId)=>{
        petService.deletePet(petId)
            .then((deletedPet)=>pets.filter(pet => {
                if(pet.petId === deletedPet) {
                    return false;
                } else{
                    return true;
                }
            }))
    }

    return <div>
        <div className="nav nav-tabs wm-auto-margin">
            <div className="nav-item">
                <Link className="nav-link" to="/admin/users">User</Link>
                <Link className="nav-link active" to="/admin/pets">
                    Pet
                </Link>
                <Link to={`/users/${currentUser.username}/report/pet`}>
                    <i className="fas fa-plus wm-icon"></i>
                </Link>
            </div>
            {/*<div className="wm-floating-child">*/}
            {/*    <input placeholder="search pets"/>*/}
            {/*    <i className="fas fa-search wm-icon"></i>*/}
            {/*    <i className="fas fa-plus wm-icon"></i>*/}
            {/*</div>*/}
        </div>

        <div className="wm-auto-margin">
            <table className="table table-striped wm-background">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th></th>
                    </tr>
                    </thead>
                <tbody>
                {
                    pets.map(pet=><PetRow pet={pet} deletePet={deletePet}/>)
                }
                </tbody>
            </table>
        </div>
    </div>
}

export default PetList