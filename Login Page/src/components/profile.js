import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Profile extends React.Component {
    render() {
        return (
            <form>
                <h3>Profile</h3>
                {/*<div className="form-group">*/}
                {/*    <label>User type</label>*/}
                {/*    <select type="text" className="form-select form-control" aria-label="Default select example">*/}
                {/*        <option selected>User type</option>*/}
                {/*        <option value="1">User</option>*/}
                {/*        <option value="2">Admin</option>*/}
                {/*    </select>*/}
                {/*</div>*/}

                <div className="form-group">
                    <label>User Name</label>
                    <textarea type="text" className="form-control" placeholder="User Name" />
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <textarea type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <textarea type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <textarea type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <textarea type="number" className="form-control" placeholder="Password" />
                </div>
                <Link to="/profile">
                    <button className="btn btn-primary btn-block">Update</button>
                </Link>
                <br/>

                <Link to="/petlist">
                    <button className="btn btn-primary btn-block">See your post</button>
                </Link>
            </form>
        )
    }
}