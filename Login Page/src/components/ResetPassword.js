import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class ResetPassword extends React.Component {
    render() {
        return (
            <form>
                <h3>Reset Password</h3>

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
                    <label>New Password</label>
                    <textarea type="number" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <label>Confirm New Password</label>
                    <textarea type="number" className="form-control" placeholder="Password" />
                </div>
                <Link to="/login">
                    <button className="btn btn-primary btn-block">Update</button>
                </Link>

            </form>
        );
    }
}
