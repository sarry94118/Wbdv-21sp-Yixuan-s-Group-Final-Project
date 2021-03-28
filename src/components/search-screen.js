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
        findMoviesByTitle("dog", accessToken)
        console.log(accessToken)

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
            <h2 className="text-warning">Search Screen{results.length}</h2>
            <input value={searchTitle}
                   onChange={(event) => {
                       setSearchTitle((event.target.value))
                   }}
                   className="form-control"/>
            <button
                onClick={() => {
                    findMoviesByTitle(searchTitle, accessToken)
                }}
                className="btn btn-primary form-control btn btn-warning">Search
            </button>
            <>
                {/*{JSON.stringify(results)}*/}
            </>
            <br/>
            <br/>
            <ul className="list-group">

                {
                    results.animals.map(pet =>
                        // <li className="list-group-item">
                        <li className="list-group-item" key={pet.id}>

                            <Link to={`/details/${pet.id}`}>
                                <h5><div className="p-3 mb-2 bg-warning text-dark">Pet Name: {pet.name}</div></h5>
                            </Link>
                            <br/>
                            <div className="p-3 mb-2 bg-light text-dark">Pet Gender: {pet.gender}</div>
                            <div className="p-3 mb-2 bg-light text-dark">Age: {pet.age}</div>
                            <div className="p-3 mb-2 bg-light text-dark">Description: {pet.description}</div>
                        </li>
                    )
                }

            </ul>
            {JSON.stringify(results)}
            {/*<li className="list-group-item">*/}
            {/*    <Link to={`/details/dsdsd`}>*/}
            {/*    Titanic*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">*/}
            {/*    Rock Star*/}
            {/*</li>*/}
            {/*<li className="list-group-item">*/}
            {/*    You are lover*/}
            {/*</li>*/}

        </div>
    )
}

export default SearchScreen


// import React, { Component } from 'react';
// import axios from 'axios';
// import './search-style.css';
//
// axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = '9edd9d8f-8716-4a0a-825f-cbc087d86a63';
//
// class SearchScreen extends Component {
//
//     async getBreeds() {
//         const res = await axios('/breeds');
//         return res.data;
//     }
//     async getCatsImagesByBreed(breed_id, amount) {
//         const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);
//
//         console.table(res.data)
//         return res.data;
//     }
//
//     async loadBreedImages() {
//         console.log('Load Breed Images:', this.state.selected_breed)
//
//         let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed, 5)
//
//         this.setState({ images: breed_images });
//     }
//
//     constructor(...args) {
//
//         super(...args);
//         this.state = {
//             images: [],
//             breeds: [],
//             selected_breed: 0
//         };
//
//         this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
//     }
//     async onBreedSelectChange(e) {
//         console.log("Breed Selected. ID:",e.target.value)
//         await this.setState({selected_breed:e.target.value});
//         await this.loadBreedImages();
//     }
//     componentDidMount() {
//         if (this.state.breeds.length===0) {
//             (async () => {
//                 try {
//                     this.setState({breeds: await this.getBreeds()});
//                 } catch (e) {
//                     //...handle the error...
//                     console.error(e)
//                 }
//             })();
//         }
//     }
//     render() {
//         return (
//             <div>
//
//                 <select value={this.state.selected_breed}
//                         onChange={this.onBreedSelectChange}>
//                     {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
//                 </select>
//
//                 <ul className="list-group">
//                     {this.state.images.map((image) =>
//
//                         <li className="list-group-item" key={image.id}>
//                             <img className="cat-image" alt="" src={image.url}></img>
//                         </li>
//                     )
//                     }
//
//                     {/*{this.state.map((pet) =>*/}
//
//                     {/*    <li className="list-group-item" key={pet.images.id}>*/}
//                     {/*        <img className="cat-image" alt="" src={pet.images.url}></img>*/}
//                     {/*    </li>*/}
//                     {/*)*/}
//                     {/*}*/}
//                 </ul>
//
//             </div>
//         );
//     }
// }
//
// export default SearchScreen;
