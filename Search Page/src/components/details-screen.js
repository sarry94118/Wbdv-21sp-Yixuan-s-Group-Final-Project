import React, {useContext, useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import petService from '../services/pet-service'
import {AuthContext} from "../App"
import petSelfService from "../services/self-created-pet-service";



const DetailsScreen = () => {
    const {id} = useParams();
    const  history = useHistory();
    const [pet, setPet] = useState({animal:{}})
    const [petResult, setPetResult] = useState([])
    const accessToken = useContext(AuthContext);
    useEffect(() => {
        findSelfBreedById(id)
        findPetByID()
    }, [])

    const findPetByID = () => {
        petService.findPetByID(id, accessToken)
            .then((data) => {
                setPet(data)
            })
        console.log(pet)
    }

    const findSelfBreedById = (id) => {
        petSelfService.findPetById(id)
            .then((IdResults) => {
                setPetResult(IdResults)
                console.log(IdResults)
            })
    }

    return(
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            {/*{JSON.stringify(petResult)}*/}
            {
                petResult[0] &&

                    <>
                        <h2>Name: {petResult[0].name}</h2>

                        <div>
                            <ul>
                                {

                                    <li className="list-group-item" key={petResult[0].petId}>
                                        {
                                            petResult[0].image &&
                                            <img src={petResult[0].image} width={250} style={{float:"right"}}/>

                                        }
                                        {
                                            petResult[0].breed &&
                                            <h3>Breeds: {petResult[0].breed}</h3>
                                        }
                                        <h3>Gender: {petResult[0].gender}</h3>
                                        <h3>ID: {petResult[0].petId}</h3>
                                        <h3>Age: {petResult[0].age}</h3>
                                        <h3>Status: {petResult[0].status}</h3>
                                        <br/>
                                        <br/>

                                    </li>
                                }
                            </ul>
                            {/*{JSON.stringify(pet)}*/}
                        </div>


                    </>

            }
            {/*{JSON.stringify(pet)}*/}
            {
                pet.animal &&
                    <>
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
                    </>
            }
        </div>
    )

}


export default DetailsScreen

