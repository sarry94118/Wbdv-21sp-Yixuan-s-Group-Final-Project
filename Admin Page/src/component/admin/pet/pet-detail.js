import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const PetDetail = ({pet}) => {

    const {userId, petId} =useParams()

    return <div>

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={`nav-link ${petId===pet.petId? "active" : ""}`} to={`/users/${userId}/pets/${pet.petId}`}>{pet.name}</Link>
            </li>
        </ul>
        <div className="row wm-auto-margin">
        {/*<div className="">*/}
            <img src={pet.image}
                 width={`${pet.width===null? "200": pet.width}`} height={pet.height}/>
            <ul className="text-left">
                <li>Name: {pet.name}</li>
                <li>Breed: {pet.breed}</li>
                <li>Gender: {pet.gender}</li>
                <li>Owner: <Link to={`/users/${userId}`}>Alice</Link></li>
                <li>City: {pet.city}</li>
                <li>Status: {pet.status}</li>
            </ul>
        </div>
        <br />

        <div className="row">
            <button type="submit" className="btn btn-primary wm-icon">Update</button>
            <button type="submit" className="btn btn-primary wm-icon">Delete</button>
        </div>
    </div>
}

export default PetDetail