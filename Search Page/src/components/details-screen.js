import React, {useContext, useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import petService from '../services/pet-service'
import {AuthContext} from "../App"


const DetailsScreen = () => {
    const {id} = useParams();
    const  history = useHistory();
    const [pet, setPet] = useState({animal:{}})
    const accessToken = useContext(AuthContext);
    useEffect(() => {
        findPetByID()
    }, [])

    const findPetByID = () => {
        petService.findPetByID(id, accessToken)
            .then((data) => {
                setPet(data)
            })
        console.log(pet)
    }

    return(
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            <h2>Name: {pet.animal.name}</h2>

            <div>
                <ul>
                    {

                        <li className="list-group-item" key={pet.animal.id}>
                            {
                                pet.animal.photos && pet.animal.photos[0] && pet.animal.photos[0].medium &&
                                <img src={pet.animal.photos[0].medium} width={250} style={{float:"right"}}/>

                            }
                            {
                                pet.animal.breeds &&
                                <h3>Breeds: {pet.animal.breeds.primary}</h3>
                            }
                            <h3>Gender: {pet.animal.gender}</h3>
                            <h3>ID: {pet.animal.id}</h3>
                            <h3>Age: {pet.animal.age}</h3>
                            <h3>Status: {pet.animal.status}</h3>
                            <br/>
                            <br/>

                        </li>
                    }
                </ul>
                {/*{JSON.stringify(pet)}*/}
            </div>
        </div>
    )

}

export default DetailsScreen

