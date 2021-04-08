import React from "react";
import {Link} from "react-router-dom";
import "./home.css";

const Home = ()=>{
    return <div>
        <div>
            <img
                className="wm-logo"
                src={`${process.env.PUBLIC_URL}/petfinder.png`}
                width="200"
                height="200"></img>
        </div>
        <br/>
        <br/>
        <div>
            <a href="https://petfindersearch.herokuapp.com/search" target="_blank">
                <button type="submit" className="btn btn-light">Search pets</button>
            </a>
        </div>
        <div className="container-fluid">
            <a href="https://petfinderlogin.herokuapp.com/login" target="_blank" className="wm-link">
                Log in
            </a>
            <a href="https://petfinderlogin.herokuapp.com/register" target="_blank" className="wm-link">
                Register
            </a>
        </div>
    </div>
}

export default Home