import React, {useEffect, useState} from "react"
import NavBar from "../nav-bar";
import {Link, useParams} from "react-router-dom";

import userService from "../../../services/admin-service/user-service"

const ReportUser = () => {
    const {userId} = useParams();

    const [newUser, setNewUser] = useState({
        // userId: userId,
        username: "",
        password: "",
        userType: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    useEffect(() => {
    }, [])
    return <div>
        <NavBar/>
        <h3>Create New User</h3>
        <div className="container-fluid wm-auto-margin">
            <div className="row">
                <label className="col-3">
                    <label className="text-danger">*</label>
                    UserName</label>
                <input
                    className="col"
                    placeholder="Input Username"
                    value={newUser.username}
                    onChange={event => setNewUser({...newUser, username:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">
                    <label className="text-danger">*</label>
                    Password
                </label>
                <input
                    className="col"
                    placeholder="Input Password"
                    value={newUser.password}
                    onChange={event => setNewUser({...newUser, password:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">UserType</label>
                <select className="col" value={newUser.userType}
                        onChange={event => setNewUser({...newUser, userType:event.target.value})}>
                    <option value="User">Female</option>
                    <option value="Admin">Male</option>
                </select>
            </div>
            <div className="row">
                <label className="col-3">FirstName</label>
                <input
                    type="number"
                    className="col"
                    placeholder="Input Firstname"
                    value={newUser.firstName}
                    onChange={event => setNewUser({...newUser, firstName:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">LastName</label>
                <input
                    className="col"
                    placeholder="Input Lastname"
                    value={newUser.lastName}
                    onChange={event => setNewUser({...newUser, lastName:event.target.value})}/>
            </div>
            <div className="row">
                <label className="col-3">Email</label>
                <input
                    className="col"
                    placeholder="Input Email"
                    value={newUser.email}
                    onChange={event => setNewUser({...newUser, email:event.target.value})}/>
            </div>
        </div>
        <br />
        <Link to="/admin/users" onClick={()=>{
            console.log("report newUser=" + JSON.stringify(newUser))
            userService.createUser(userId, newUser)
                .then(res => console.log(res))
        }}>
            <i className="btn btn-primary">Create</i>
        </Link>
    </div>

}

export default ReportUser