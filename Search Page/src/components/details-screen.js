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
            {/*{JSON.stringify(pet)}*/}
            {
                petResult.petId &&

                    <>
                        <h2>Name: {petResult.name}</h2>

                        <div>
                            <ul>
                                {

                                    <li className="list-group-item" key={petResult.petId}>
                                        {
                                            petResult.image &&
                                            <img src={petResult.image} width={250} style={{float:"right"}}/>

                                        }
                                        {
                                            petResult.breed &&
                                            <h3>Breeds: {petResult.breed}</h3>
                                        }
                                        <h3>Gender: {petResult.gender}</h3>
                                        <h3>ID: {petResult.petId}</h3>
                                        <h3>Age: {petResult.age}</h3>
                                        <h3>Status: {petResult.status}</h3>
                                        <h3>Contact Information:
                                        <Link to={`/profile/${petResult.userId}`}>
                                            More Contact Information
                                        </Link></h3>
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
                pet.animal && pet.animal.id &&
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

