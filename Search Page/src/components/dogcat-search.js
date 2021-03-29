import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import movieService from "../services/pet-service"
import {AuthContext} from "../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


const DogCatSearch = () => {

    return (
        <div>
            <h2 className="text-warning">Search Page</h2>

            <Link to={`/search/types/dog`}>
               Dog
            </Link>
            <br/>
            <Link to={`/search/types/cat`}>
               Cat
            </Link>

        </div>
    )
}


export default DogCatSearch