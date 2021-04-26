import React, {useEffect, useState} from "react";
import UserRow from "./user-row";
import userService from "../../../services/admin-service/user-service";
import {Link} from "react-router-dom";

const UserList =()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.findAllUsers().then(users=>setUsers(users))
    },[])

    const deleteUser = (delUser)=>{
        console.log("delete user = " + delUser.userId)
        userService.deleteUser(delUser.userId)
            .then(status=>{
                //TODO
                // this.setState((preState)=>{
                //     return {
                //         ...preState,
                //         users: preState.users.filter(user =>user !== delUser)
                //     }
                // })
            })
    }

    return <div>

        <div className="nav nav-tabs wm-auto-margin">
            <div className="nav-item wm-nav-item">
                {/*<a className="nav-link text-white"*/}
                <Link className="nav-link active" to="/admin/users">User</Link>
                <Link to="/register">
                    <i className="fas fa-plus wm-icon"></i>
                </Link>
                <Link className="nav-link" to="/admin/pets">Pet</Link>
            </div>
            {/*<div className="wm-floating-child">*/}
            {/*    <input placeholder="search users"/>*/}
            {/*    <i className="fas fa-search wm-icon"></i>*/}
            {/* </div>*/}
        </div>
        <div className="wm-auto-margin">
            <table className="table table-striped wm-background">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>UserType</th>
                    <th>Reported pets</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user=><UserRow user={user} deleteUser = {deleteUser}/>)
                }
                </tbody>
            </table>
        </div>
    </div>
}

export default UserList