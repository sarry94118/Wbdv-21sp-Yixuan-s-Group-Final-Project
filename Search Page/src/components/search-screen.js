import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import petService from "../services/pet-service"
import {AuthContext} from "../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


const SearchScreen = () => {
    const history = useHistory()
    const {type} = useParams();
    const {breed} = useParams();
    // const [searchType, setSearchType] = useState(type)
    const [typeResults, setTypeResults] = useState({animals: []})
    const [breedResults, setBreedResults] = useState({animals: []})
    const accessToken = useContext(AuthContext);
    const [first, setFirst] = useState(false)
    // const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {

        setBreedResults(breed);
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
    return (
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            <h2 className="text-warning">Search Screen</h2>
            <input placeholder="please enter breed name"
                   onChange={(event) => {
                       setBreedResults(event.target.value)
                   }}
                   className="form-control"/>

           {/*<select onChange={(e) =>*/}
           {/*    setBreedResults((e.target.value))}>*/}
           {/*    {*/}
           {/*        typeResults.animals.map(pet =>*/}

           {/*        <option>Breed: {pet.breeds.primary}</option>*/}
           {/*        )*/}
           {/*    }*/}
           {/*</select>*/}

            <button
                onClick={() => {
                    setFirst(true)
                    findBreed(breedResults, accessToken)
                }}
                className="btn btn-primary form-control btn btn-warning">Search
            </button>
            {/*{JSON.stringify(typeResults)}*/}
            <br/>
            <br/>
            {
                // first === true &&
                <>
                <ul className="list-group">

                    {
                        // results && results.animals && results.animals.photos
                        // && results.animals.photos[0] &&
                        // results.animals.photos[0].medium && results.animals.map(pet =>

                        breedResults && breedResults.animals && breedResults.animals.map(pet =>
                            <li className="list-group-item" key={pet.id}>
                                {/*<img src={pet.photos[0].medium} width={250} style={{float:"right"}}/>*/}

                                <Link to={`/details/${type}/${pet.id}`}>
                                    <div className="p-3 mb-2 bg-warning text-dark"> Name: {pet.name}</div>
                                </Link>
                                <br/>
                                <div className="p-3 mb-2 bg-light text-dark">Pet Gender: {pet.gender}</div>
                                <div className="p-3 mb-2 bg-light text-dark">Age: {pet.age}</div>
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