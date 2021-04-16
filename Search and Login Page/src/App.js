import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/login/register";
import Profile from "./components/login/profile";
import PostTable from "./components/table/pet-list";
import PostGrid from "./components/grid/pet-grid";
import ResetPassword from "./components/login/ResetPassword"
import React from 'react';
import UserManagement from "./components/user-management"
import PetListMainPage from "./components/table/pet-list-main-page";
import PetCard from "./components/grid/pet-card";
import PetCardMainPage from "./components/grid/pet-card-main-page"


import {useEffect, createContext, useState} from "react";
import './App.css';
import SearchScreen from "./components/search/search-screen";
import DetailsScreen from "./components/search/details-screen";
import HomeScreen from "./components/search/home-screen";
import DogCatSearch from "./components/search/dogcat-search"
import ProfilePage from "./components/search/profile-page"

// import api from "./api/oauth-token"

export const AuthContext = createContext();
const petFinderKey = "IERoPwTvvsgAtqgT71P7EhCx8nLMCsx4xvvP0zywOA6eSzWWal"
const petFinderSecret = "InqFifeZbO9QOwtLXTDQROwrzovrIbF2YfKVVl0o"


function App() {
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
            // console.log(1)
            // const res = await fetch(api);
            // const json = await res.json();
            // console.log(2)
            // setAccessToken(json.access_token);
        };

        fetchAccessToken();
    }, [])

    return (
        <AuthContext.Provider value={accessToken}>

            <BrowserRouter>

            <div className="App">
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            {/*<div className="container-fluid">*/}
              <i className="fas fa-dog"></i>
              <h2 className="navbar-brand">Welcome to Petfinder</h2>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                  </li>

                </ul>
              </div>
            {/*</div>*/}
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">

              <Route path="/">
                <UserManagement/>
              </Route>
              <Route path={["/petlist/:userId"]} exact={true}>
                <PetListMainPage/>
              </Route>
                <Route path="/petlist/post/card/:petId" exact={true}>
                    <PetCardMainPage/>
                </Route>
                    <Route path="/" exact={true}>
                        <HomeScreen/>
                    </Route>
                    <Route path={["/search"]}
                           exact={true}>
                        <DogCatSearch/>
                    </Route>

                    <Route path={["/search/:type/:breed"]}
                           exact={true}>
                        <SearchScreen/>
                    </Route>
                    <Route path="/details/:type/:id" exact={true}>
                        <DetailsScreen/>
                    </Route>
                    {/*<Route path="/profile/:userId" exact={true}>*/}
                    {/*    <ProfilePage/>*/}
                    {/*</Route>*/}
            </div>
          </div>



        </div>

        </div>
        </BrowserRouter>
        </AuthContext.Provider>

  );
}


export default App;
