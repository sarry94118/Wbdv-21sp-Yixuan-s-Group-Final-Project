import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import petService from "../../../services/pet-service"
import PetRow from "./pet-row";

const PetList =()=>{

    const [pets, setPets] = useState([])

    useEffect(()=>{
        petService.findAllPets().then(pets=>setPets(pets))
    }, [])

    return <div>
        <div className="nav nav-tabs wm-auto-margin">
            <div className="nav-item">
                <Link className="nav-link" to="/admin/users">User</Link>
                <Link className="nav-link active" to="/admin/pets">Pet</Link>
            </div>
            <div className="wm-floating-child">
                <input placeholder="search pets"/>
                <i className="fas fa-search wm-icon"></i>
                <i className="fas fa-plus wm-icon"></i>
            </div>
        </div>

        <div className="wm-auto-margin">
            <table className="table table-striped wm-background">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>breed</th>
                        <th>gender</th>
                        <th>owner</th>
                        <th></th>
                    </tr>
                    </thead>
                <tbody>
                {
                    pets.map(pet=><PetRow pet={pet}/>)
                }
                </tbody>
            </table>
        </div>
    </div>
}

export default PetList