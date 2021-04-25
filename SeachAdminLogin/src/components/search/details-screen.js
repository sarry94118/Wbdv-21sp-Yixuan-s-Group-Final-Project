import React, {useContext, useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import petService from "../../services/search-services/pet-service"
import {AuthContext} from "../../App"
import petSelfService from "../../services/search-services/self-created-pet-service";
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"




const DetailsScreen = () => {
    const {id} = useParams();
    const  history = useHistory();
    const [pet, setPet] = useState({animal:{}})
    const [petResult, setPetResult] = useState([])
    // const accessToken = useContext(AuthContext);
    const [accessToken, setAccessToken] = useState(null);
    useEffect(() => {
        const fetchAccessToken = async () => {
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", petFinderKey);
            params.append("client_secret", petFinderSecret);
            const petfinderRes = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params,
                }
            )
            const json = await petfinderRes.json()
            console.log(json.access_token)
            setAccessToken(json.access_token)
            // findBreed(breed, accessToken)

            petService.findPetByID(id, json.access_token)
                .then((breedResults) => {
                    setPet(breedResults)
                    console.log(breedResults)

                })

            findSelfBreedById(id)

            // console.log(petBreedResult)
            // console.log(breedResults)
        }
        fetchAccessToken();
        console.log(id)
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


                    <div>
                        <ul>
                            {


                                <li className="list-group-item" key={petResult.petId}>
                                    <h4>Name: {petResult.name}</h4>
                                    {
                                        petResult.image &&
                                        <img src={petResult.image} width={250} style={{float:"right"}}/>

                                    }
                                    {
                                        petResult.breed &&
                                        <h4>Breeds: {petResult.breed}</h4>
                                    }
                                    <h4>Gender: {petResult.gender}</h4>
                                    <h4>ID: {petResult.petId}</h4>
                                    <h4>Age: {petResult.age}</h4>
                                    <h4>Status: {petResult.status}</h4>
                                    <h4>Contact Information:
                                        <Link to={`/profile/${petResult.userId}`}>
                                            More Contact Information
                                        </Link></h4>
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
