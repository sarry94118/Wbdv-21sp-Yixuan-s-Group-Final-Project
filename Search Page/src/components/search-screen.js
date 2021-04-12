import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import petService from "../services/pet-service"
import petSelfService from "../services/self-created-pet-service"
import {AuthContext} from "../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


const SearchScreen = () => {
    const history = useHistory()
    const {type} = useParams();
    const {breed} = useParams();
    const [petBreedResult, setPetBreedResult] = useState([])
    const [typeResults, setTypeResults] = useState({animals: []})
    const [breedResults, setBreedResults] = useState({animals: []})
    const accessToken = useContext(AuthContext);
    const [first, setFirst] = useState(false)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [zipcode, setZipcode] = useState(null)
    // const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {

        setBreedResults(breed)
        findSelfBreed(breed)
        findPetByTypes(type, accessToken)
        findBreed(breed, accessToken)


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
                console.log(breedResults)
            })
    }



    return (
        <div>
            <Link to="/search">
                <buttin>Back</buttin>
            </Link>
            {/*<button onClick={() => {history.goBack()}}>Back</button>*/}
            <h2 className="text-warning">Search Screen</h2>
            <input placeholder="please enter breed name"
                   onChange={(event) => {
                       setBreedResults(event.target.value)
                   }}
                   className="form-control"/>

           {/*<select onChange={(e) =>*/}
           {/*    setState((e.target.value))} value={state} className="form-control">*/}
           {/*    <option value={"AL"}>AL</option>*/}
           {/*    <option value={"AK"}>AK</option>*/}
           {/*    <option value={"AZ"}>AZ</option>*/}
           {/*    <option value={"AR"}>AR</option>*/}
           {/*    <option value={"CA"}>CA</option>*/}
           {/*    <option value={"CO"}>CO</option>*/}
           {/*    <option value={"CT"}>CT</option>*/}
           {/*    <option value={"DE"}>DE</option>*/}
           {/*    <option value={"FL"}>FL</option>*/}
           {/*    <option value={"GA"}>GA</option>*/}
           {/*    <option value={"HI"}>HI</option>*/}
           {/*    <option value={"ID"}>ID</option>*/}
           {/*    <option value={"IL"}>IL</option>*/}
           {/*    <option value={"IA"}>IA</option>*/}
           {/*    <option value={"KY"}>KY</option>*/}
           {/*    <option value={"ME"}>ME</option>*/}
           {/*    <option value={"MD"}>MD</option>*/}
           {/*    <option value={"MA"}>MA</option>*/}
           {/*    <option value={"MI"}>MI</option>*/}
           {/*    <option value={"MN"}>MN</option>*/}
           {/*    <option value={"MS"}>MS</option>*/}
           {/*    <option value={"MO"}>MO</option>*/}
           {/*    <option value={"MT"}>MT</option>*/}
           {/*    <option value={"NE"}>NE</option>*/}
           {/*    <option value={"NV"}>NV</option>*/}
           {/*    <option value={"NH"}>NH</option>*/}
           {/*    <option value={"NJ"}>NJ</option>*/}
           {/*    <option value={"NM"}>NM</option>*/}
           {/*    <option value={"NY"}>NY</option>*/}
           {/*    <option value={"NC"}>NC</option>*/}
           {/*    <option value={"ND"}>ND</option>*/}
           {/*    <option value={"OH"}>OH</option>*/}
           {/*    <option value={"PA"}>PA</option>*/}
           {/*    <option value={"TX"}>TX</option>*/}
           {/*    <option value={"UT"}>UT</option>*/}
           {/*    <option value={"VA"}>VA</option>*/}
           {/*    <option value={"WA"}>WA</option>*/}
           {/*    <option value={"WV"}>WV</option>*/}
           {/*    <option value={"WI"}>WI</option>*/}
           {/*    <option value={"WY"}>WY</option>*/}
           {/*</select>*/}

            <button
                onClick={() => {
                    setFirst(true)
                    findSelfBreed(breedResults)
                    findBreed(breedResults, accessToken)
                }}
                className="btn btn-primary form-control btn btn-warning">Search
            </button>
            {/*{JSON.stringify(breedResults.animals)}*/}
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
                                <div className="p-3 mb-2 bg-warning text-dark"> Name: {selfPet.name}</div>
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
                                    <div className="p-3 mb-2 bg-warning text-dark"> Name: {pet.name}</div>
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

        </div>
    )
}


export default SearchScreen