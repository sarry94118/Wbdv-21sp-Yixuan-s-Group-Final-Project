import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import petService from "../../../services/pet-service"
import PetDetail from "./pet-detail";
import NavBar from "../nav-bar";


const PetTab = ()=>{

    const {userId, petId} = useParams()
    const [pets, setPets] = useState([])

    useEffect(()=>{
        petService.findPetsForUser(userId).then(pets => setPets(pets))
    }, [])

    return <>
            <NavBar />
            <div className="auth-inner">
            <h3>Reported Pet By Alice</h3>

            {/*<ul className="nav nav-pills wm_align_middle">*/}
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