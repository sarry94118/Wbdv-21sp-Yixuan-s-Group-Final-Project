import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import userService from "../../../services/admin-service/user-service"
import NavBar from "../../nav-bar";

const UserDetail = ()=>{

    const [user, setUser] = useState({})
    const {userId} = useParams()

    useEffect(()=>{
        userService.findUserById(userId).then(user=>setUser(user))
    }, [])

    return <div>
        <NavBar />
        <h3 className="wm-logo">User Profile</h3>
        <table className="table table-striped wm-background wm-table">
            <tbody>
            <tr>
                <td className="wm-table-label">UserName</td>
                <td className="wm-table-content">{user.username}</td>
            </tr>
            <tr>
                <td className="wm-table-label">FirstName</td>
                <td className="wm-table-content">{user.firstName}</td>
            </tr>
            <tr>
                <td className="wm-table-label">LastName</td>
                <td className="wm-table-content">{user.lastName}</td>
            </tr>
            <tr>
                <td className="wm-table-label">Password</td>
                <td className="wm-table-content">******</td>
            </tr>
            {/*<tr>*/}
            {/*    <td className="wm-table-label">UserType</td>*/}
            {/*    <td className="wm-table-content">{user.userType}</td>*/}
            {/*</tr>*/}
            <tr>
                <td className="wm-table-label">Email</td>
                <td className="wm-table-content">{user.email}</td>
            </tr>
            </tbody>
        </table>
        <br />
        <button type="submit" className="btn btn-primary wm-icon">Update</button>
        {/*<button type="submit" className="btn btn-primary wm-icon">Delete</button>*/}
    </div>
}

export default UserDetail