import React, { Component } from "react";
import {Link} from "react-router-dom";


export default class SignUp extends React.Component {
    render() {
        return (
            <form>
                <h3>Sign up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to="/login">
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </Link>
                <p className="forgot-password text-right">

                    <Link to="/login" passHref>
                        <a href="sign-in">Already registered</a>
                    </Link>

                    {/*<Link to={"/sign-in"}>Login</Link>*/}
                </p>
            </form>
        );
    }
}