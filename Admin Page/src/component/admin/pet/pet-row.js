import React from "react";
import {Link} from "react-router-dom";

const PetRow = ({pet})=>{
    return <>
        <tr>
            <td><Link to={`/users/${pet.userId}/pets/${pet.petId}`}>{pet.name}</Link></td>
            <td>{pet.breed}</td>
            <td>{pet.gender}</td>
            <td><Link to={`/users/${pet.userId}`}>{pet.userId}</Link></td>
            <td><i className="fas fa-times float-right" /></td>
        </tr>
    </>
}

export default PetRow