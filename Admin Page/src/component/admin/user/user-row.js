import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import userService from "../../../services/user-service"
import petService from "../../../services/pet-service"

const UserRow = ({user})=>{

    const [petCount, setPetCount] = useState(0);

    useEffect(()=>{
        petService.findPetsForUser(user.userId).then(pets=>setPetCount(pets.length))
    },[])

    return <>
        <tr>
            <td><Link to={`/users/${user.userId}`}>{user.username}</Link></td>
            <td>*****</td>
            <td><Link to={`/users/${user.userId}/pets`}>{petCount}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td><i className="fas fa-times float-right" /></td>
        </tr>
    </>
}

export default UserRow