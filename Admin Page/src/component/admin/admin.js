import React, {useState, useEffect} from "react"
import {Link, Route} from "react-router-dom";

import "./admin.css";
import UserList from "./user/user-list";
import PetList from "./pet/pet-list";
import NavBar from "./nav-bar";


const Admin = ()=>{

    // return <div className="auth-wrapper">
    return <>
        <NavBar />
        <div className="auth-wrapper">
            <div className="auth-inner">
                <div>
                    <h3 className="wm-logo">Administration</h3>
                </div>

                <Route path="/admin/users">
                    <UserList />
                </Route>
                <Route path="/admin/pets">
                    <PetList />
                </Route>
            </div>
        </div>
    </>
}

export default Admin