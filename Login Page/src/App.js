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

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
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
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Route path="/">
                <UserManagement/>
              </Route>
              {/*  <Route path="/" exact={true}>*/}
              {/*    <Login/>*/}
              {/*  </Route>*/}
              {/*<Route path="/login" exact={true}>*/}
              {/*  <Login/>*/}
              {/*</Route>*/}
              {/*<Route path="/register" exact={true}>*/}
              {/*  <SignUp/>*/}
              {/*</Route>*/}
              {/*<Route path="/profile" exact = {true}>*/}
              {/*    <Profile/>*/}
              {/*</Route>*/}
              <Route path={["/petlist/:userId"]} exact={true}>
                <PetListMainPage/>
              </Route>
              {/*<Route path="/reset">*/}
              {/*  <ResetPassword/>*/}
              {/*</Route>*/}
                <Route path="/petlist/post/card/:petId" exact={true}>
                    <PetCardMainPage/>
                </Route>
            </div>
          </div>


        </div>
        </BrowserRouter>

  );
}

export default App;
