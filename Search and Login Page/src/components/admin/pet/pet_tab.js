import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import petService from "../../../services/admin-service/pet-service"
import userService from "../../../services/admin-service/user-service"
import PetDetail from "./pet-detail";
import NavBar from "../../nav-bar";


const PetTab = ()=>{

    const {userId, petId} = useParams()
    const [pets, setPets] = useState([])
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        console.log("petid="+petId)
        console.log("userid=" + userId)
        userService.findUserById(userId).then(user => setUserName(user.username))
        if(petId === "undefined" || typeof petId === "undefined") {
            petService.findPetsForUser(userId).then(pets => setPets(pets))
        }
        else{
            petService.findPetForId(petId).then(pet => {
                // console.log(JSON.stringify(pet))
                setPets(new Array(pet))
            })
        }
    }, [])

    return <>
            <NavBar />
            <h3>Reported Pet By <label className="font-italic font-weight-bold">{userName}</label></h3>

            {/*<ul className="nav nav-tabs">*/}
            <div className="row">
                {
                    pets.map(pet=>
                        // <li className={`nav-item`} key={pet.petId}>
                            <PetDetail pet={pet}/>)
                        // </li>)
                }
            {/*</ul>*/}
        </div>
    </>
}

export default PetTab