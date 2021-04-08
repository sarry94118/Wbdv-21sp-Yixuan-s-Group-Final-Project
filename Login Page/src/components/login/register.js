import React, {Component, useState} from "react";
import {Link} from "react-router-dom";


const SignUp =({addUser, user}) => {
    const [edited, setEdited] = useState(false);
    const [changeUser, setChangeUser] = useState([]);

        return (
            <form>
                <h3>Sign up</h3>
                {JSON.stringify(changeUser)}
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   username:e.target.value
                               })}
                           placeholder="User name" />
                </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   firstName:e.target.value
                               })}
                           placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   lastName:e.target.value
                               })}
                           placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   email:e.target.value
                               })}
                           placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   password:e.target.value
                               })}
                           placeholder="Enter password" />
                </div>

                <Link to="/login">
                    <button className="btn btn-primary btn-block"
                            onClick={() => {
                                addUser(changeUser)
                            }}>Sign Up</button>
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

export default SignUp
