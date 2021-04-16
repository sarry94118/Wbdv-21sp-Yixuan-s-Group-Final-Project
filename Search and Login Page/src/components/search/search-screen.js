import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import petService from "../../services/search-services/pet-service"
import petSelfService from "../../services/search-services/self-created-pet-service"
import {AuthContext} from "../../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


const SearchScreen = () => {
    const history = useHistory()
    const {type} = useParams();
    const {breed} = useParams();
    const [petBreedResult, setPetBreedResult] = useState([])
    const [typeResults, setTypeResults] = useState({animals: []})
    const [breedResults, setBreedResults] = useState({animals: []})
    // const accessToken = useContext(AuthContext);
    const [first, setFirst] = useState(false)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [zipcode, setZipcode] = useState(null)
    const [access, setAccess] = useState();
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
        }
        fetchAccessToken();
        console.log(breed)
        // setAccess(access)
        // setBreedResults(breed)
        findSelfBreed(breed)
        findPetByTypes(type, accessToken)
        findBreed(breed, accessToken)


        // setBreedResults(breed)
        // findSelfBreed(breed)
        // findPetByTypes(type, accessToken)
        // findBreed(breed, accessToken)


    }, [])
    const findPetByTypes = (type, accessToken) => {
        // history.push(`/search/types/${type}`)
        // history.push(breed)

        petService.findPetByTypes(type, accessToken)
            .then((typeResults) => {
                setTypeResults(typeResults)
                console.log(typeResults)

            })
    }

    const findBreed = (breed, accessToken) => {
        history.push(`/search/${type}/${breed}`)
        // history.push(breed)

        petService.findBreed(breed, accessToken)
            .then((breedResults) => {
                setBreedResults(breedResults)
                console.log(breedResults)

            })
    }
    const findSelfBreed = (breed) => {
        // history.push(`/search/${type}/${breed}`)
        // // history.push(breed)

        petSelfService.findBreed(breed)
            .then((breedResults) => {
                setPetBreedResult(breedResults)
                // console.log(breedResults)
            })
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <Link to="/search">
                <i className="far fa-arrow-alt-circle-left"></i>
            </Link>
            <br/>
            {/*<button onClick={() => {history.goBack()}}>Back</button>*/}
            <h2 className="navbar-brand">Search Screen</h2>



            <input placeholder="please enter breed name"
                   onChange={(event) => {
                       setBreedResults(event.target.value)
                   }}
                   className="form-control"/>



            <button
                onClick={() => {
                    setFirst(true)
                    findSelfBreed(breedResults)
                    findBreed(breedResults, accessToken)
                }}
                className="btn btn-primary">Search
            </button>
            {/*{JSON.stringify(breedResults.animals)}*/}
            </nav>
            <br/>
            <br/>
            {
                // first === true &&
                <>
                <ul className="list-group">
                    {/*{JSON.stringify(petBreedResult)}*/}
                    {
                        petBreedResult && petBreedResult.map(selfPet =>
                        <li className="list-group-item" key={selfPet.petId}>
                            <Link to={`/details/${breed}/${selfPet.petId}`}>
                                <div className="p-3 mb-2 bg-info text-white"> Name: {selfPet.name}</div>
                            </Link>
                        <br/>
                        <div className="p-3 mb-2 bg-light text-dark">Pet Gender: {selfPet.gender}</div>
                        <div className="p-3 mb-2 bg-light text-dark">Age: {selfPet.age}</div>
                        <div className="p-3 mb-2 bg-light text-dark">State: {selfPet.state}</div>
                        <div className="p-3 mb-2 bg-light text-dark">Description: {selfPet.description}</div>
                        </li>
                        )
                    }


                    {
                        // results && results.animals && results.animals.photos
                        // && results.animals.photos[0] &&
                        // results.animals.photos[0].medium && results.animals.map(pet =>

                        breedResults && breedResults.animals && breedResults.animals.map(pet =>
                            <li className="list-group-item" key={pet.id}>
                                {/*<img src={pet.photos[0].medium} width={250} style={{float:"right"}}/>*/}

                                <Link to={`/details/${breed}/${pet.id}`}>
                                    <div className="p-3 mb-2 bg-info text-white"> Name: {pet.name}</div>
                                </Link>
                                <br/>
                                <div className="p-3 mb-2 bg-light text-dark">Pet Gender: {pet.gender}</div>
                                <div className="p-3 mb-2 bg-light text-dark">Age: {pet.age}</div>
                                <div className="p-3 mb-2 bg-light text-dark">State: {pet.contact.address.state}</div>
                                <div className="p-3 mb-2 bg-light text-dark">Description: {pet.description}</div>
                            </li>
                        )
                    }

                </ul>
                </>
            }
            {

                <ul className="list-group">

                    <div>
                        <h3>no results!</h3>
                    </div>
                </ul>
            }

        </div>
    )
}


export default SearchScreen