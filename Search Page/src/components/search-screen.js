import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import movieService from "../services/movie-service"
import {AuthContext} from "../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


const SearchScreen = () => {
    const history = useHistory()
    const {breed} = useParams();
    const [searchTitle, setSearchTitle] = useState(breed)
    const [results, setResults] = useState({animals: []})
    const accessToken = useContext(AuthContext);
    const [first, setFirst] = useState(false)
    // const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        // const fetchAccessToken = async () => {
        //     const params = new URLSearchParams();
        //     params.append("grant_type", "client_credentials");
        //     params.append("client_id", petFinderKey);
        //     params.append("client_secret", petFinderSecret);
        //     const petfinderRes = await fetch(
        //         "https://api.petfinder.com/v2/oauth2/token",
        //         {
        //             method: "POST",
        //             body: params,
        //         }
        //     )
        //
        //     const json = await petfinderRes.json()
        //     console.log(json.access_token)
        //     setAccessToken(json.access_token)
        // }
        // fetchAccessToken();
        setSearchTitle(breed)
        findMoviesByTitle("", accessToken)
        // console.log(accessToken)

    }, [])
    const findMoviesByTitle = (breed, accessToken) => {
        history.push(`/search/${breed}`)

        movieService.findMovieByTitle(breed, accessToken)
            .then((results) => {
                setResults(results)
                console.log(results)

            })
    }
    return (
        <div>
            <h2 className="text-warning">Search Screen</h2>
            <input placeholder="please enter either dog or cat" value={searchTitle}
                   onChange={(event) => {
                       setSearchTitle((event.target.value))

                   }}
                   className="form-control"/>
            <button
                onClick={() => {
                    setFirst(true)
                    findMoviesByTitle(searchTitle, accessToken)

                }}
                className="btn btn-primary form-control btn btn-warning">Search
            </button>

            <br/>
            <br/>
            {
                first === true &&
                <>
                <ul className="list-group">

                    {
                        results.animals.map(pet =>
                            // <li className="list-group-item">
                            <li className="list-group-item" key={pet.id}>

                                <Link to={`/details/${pet.id}`}>
                                    <div className="p-3 mb-2 bg-warning text-dark">Pet Name: {pet.name}</div>
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