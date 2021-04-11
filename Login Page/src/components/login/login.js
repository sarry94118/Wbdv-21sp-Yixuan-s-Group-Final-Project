import React, { useState } from "react";
import Profile from "./profile";
import {Link} from "react-router-dom";

// const newUser = {}
// export default newUser

const Login = ({findUserForUsername, users, updateUser, user, serverUser}) => {

    const [submitted, setSubmitted] = useState(false);
    const [changeUser, setChangeUser] = useState({username:"", password:""});


        return (
            <form>
                <h3>Sign In</h3>
                {JSON.stringify(user)}
                {JSON.stringify(changeUser)}
                <div className="form-group">
                    <label>Username</label>

                    <input className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   username:e.target.value
                               })}
                           onClick={() => {
                               findUserForUsername(changeUser)
                           }}
                           placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={changeUser.password} className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   password:e.target.value
                               })}
                           onClick={() => {
                               findUserForUsername(changeUser)
                           }}
                           placeholder="Enter password" />

                    {
                        submitted && !changeUser.password &&
                    <div className="alert alert-primary">Password is required!!</div>
                    }
                    {
                        submitted && changeUser.password && changeUser.password !== user.password &&
                        <div className="alert alert-primary">Password is not correct!!</div>
                    }
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                {
                    !changeUser.password &&
                    <>
                        <button className="btn btn-primary btn-block"
                                onClick={() => {
                                    setSubmitted(true)
                                }}
                        >Sign In
                        </button>
                    </>
                }
                {
                    changeUser.password  && changeUser.password !== user.password &&
                    <>
                        <button className="btn btn-primary btn-block"
                                onClick={() => {
                                    setSubmitted(true)
                                }}
                        >Sign In
                        </button>
                    </>
                }
                {
                    changeUser.password  &&  changeUser.password === user.password &&
                    <>
                    <Link to="/profile">
                        <button className="btn btn-primary btn-block"
                                onClick={() => {
                                    setSubmitted(true)
                                }}
                        >Sign In
                        </button>
                    </Link>
                    </>
                }
                <Link to="/reset" passHref>
                    <a lassName="forgot-password text-right">Forgot password?</a>
                </Link>
                {/*<p className="forgot-password text-right">*/}
                {/*     <a href="#">Forgot password?</a>*/}
                {/*</p>*/}
            </form>
        );
    }


export default Login

