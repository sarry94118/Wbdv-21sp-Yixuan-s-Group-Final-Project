import React, {useEffect, useState} from "react"
import {Route} from "react-router-dom";
import NavBar from "../nav-bar";
import UserList from "./user/user-list";
import PetList from "./pet/pet-list";

import sessionUserService from "../../services/user-service"

const Admin = ()=>{

    const [loginOrNot, setLoginOrNot] = useState(false)
    useEffect(()=>{
        sessionUserService.profile().then(user=>{
            if(user !== null && user.username !== null){
                console.log(user.username + " has logged in")
                setLoginOrNot(true)
            }else{
                console.log("nobody has logged in")
                // alert("Please login first")
                setLoginOrNot(false)
            }
        })
    }, [])

    return <>
        <NavBar />
        {
            loginOrNot &&
            <>
                <div>
                    <h3 className="wm-logo">Administration</h3>
                </div>
                <Route path="/admin/users">
                    <UserList />
                </Route>
                <Route path="/admin/pets">
                    <PetList />
                </Route>
            </>
        }
        {
            !loginOrNot &&
            <h3>Please log in </h3>
        }
    </>
}

export default Admin