import React from "react";
import {Link} from "react-router-dom";

const UserList = ()=>{
    return <div>
        <h4 className="text-white wm-logo">User Profile</h4>
        <table className="table table-striped wm-background wm-table">
            <tbody>
            <tr>
                <td className="wm-table-label">Name</td>
                <td className="wm-table-content">Alice</td>
            </tr>
            <tr>
                <td className="wm-table-label">Password</td>
                <td className="wm-table-content">******</td>
            </tr>
            <tr>
                <td className="wm-table-label">Phone</td>
                <td className="wm-table-content">2061011234</td>
            </tr>
            <tr>
                <td className="wm-table-label">Location</td>
                <td className="wm-table-content">Seattle</td>
            </tr>
            </tbody>
        </table>
        <br />
        <button type="submit" className="btn btn-light wm-icon">Update</button>
        <button type="submit" className="btn btn-light wm-icon">Delete</button>
    </div>
}

export default UserList