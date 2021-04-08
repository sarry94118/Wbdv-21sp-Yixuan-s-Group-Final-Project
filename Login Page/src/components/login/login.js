import React, { useState } from "react";
import Profile from "./profile";
import {Link} from "react-router-dom";

// const newUser = {}
// export default newUser

const Login = ({findUserForUsername, users, updateUser, user}) => {

    const [edited, setEdited] = useState(false);
    const [changeUser, setChangeUser] = useState(null);


        return (
            <form>
                <h3>Sign In</h3>
                {JSON.stringify(changeUser)}
                <div className="form-group">
                    <label>Username</label>

                    <input type="email" className="form-control"
                           onChange={(e) =>
                               setChangeUser({
                                   ...changeUser,
                                   username:e.target.value
                               })}
                           placeholder="Enter username" />
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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Link to="/profile">
                    <button className="btn btn-primary btn-block"
                            onClick={() => {
                                findUserForUsername(changeUser)
                            }}>Sign In</button>
                </Link>
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

