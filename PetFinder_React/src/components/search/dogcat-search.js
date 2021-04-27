import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import "../../index.css"
import movieService from "../../services/search-services/pet-service"
import {AuthContext} from "../../App"
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"



const DogCatSearch = () => {

    return (
        <form>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <Link to="/home">
                    <i className="far fa-arrow-alt-circle-left"></i>
                </Link>
                {" "}
            <h1 className="navbar-brand">Search Page</h1>
            </nav>
            {/*<div className="auth-wrapper">*/}
            {/*<div className="auth-inner">*/}

            <div className="form-row">
                <div className="col">
                    <Link to={`/search/types/dog`}>
                        <button type="button" className="btn btn-outline-info btn-lg btn-block">Dog</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={`/search/types/cat`}>
                        <button type="button" className="btn btn-outline-dark btn-lg btn-block">Cat</button>
                    </Link>
                </div>

            </div>


        </form>
    )
}


export default DogCatSearch