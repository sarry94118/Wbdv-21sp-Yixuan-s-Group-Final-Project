import React, {useEffect, useState} from "react";
import UserRow from "./user-row";
import userService from "../../../services/user-service";
import {Link} from "react-router-dom";

const UserList =()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.findAllUsers().then(users=>setUsers(users))
    },[])

    return <div>

        <div className="nav nav-tabs wm-auto-margin">
            <div className="nav-item">
                {/*<a className="nav-link text-white"*/}
                <Link className="nav-link active" to="/admin/users">User</Link>
                <Link className="nav-link" to="/admin/pets">Pet</Link>
            </div>
            <div className="wm-floating-child">
                <input placeholder="search users"/>
                <i className="fas fa-search wm-icon"></i>
                <i className="fas fa-plus wm-icon"></i>
             </div>
        </div>
        <div className="wm-auto-margin">
            <table className="table table-striped wm-background">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Reported pets</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user=><UserRow user={user}/>)
                }
                </tbody>
            </table>
        </div>
    </div>
}

export default UserList