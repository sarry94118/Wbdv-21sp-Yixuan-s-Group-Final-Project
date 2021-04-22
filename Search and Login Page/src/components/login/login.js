import React, { useState } from "react";
import Profile from "./profile";
import {Link} from "react-router-dom";
import Popup from '../../components/popup/password';

// const newUser = {}
// export default newUser

const Login = ({findUserForUsername, users, updateUser, user, serverUser}) => {

    const [submitted, setSubmitted] = useState(false);
    const [changeUser, setChangeUser] = useState({username:"", password:""});
    const [isOpen, setIsOpen] = useState(false);



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
                {
                    submitted && !changeUser.username &&
                    <div className="alert alert-primary">user name is required!!</div>

                }


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
                        submitted && changeUser.password !== user.password &&
                        <div className="alert alert-primary">password is not correct!!</div>

                    }
                    {
                        submitted && !changeUser.password &&
                        <div className="alert alert-primary">password is required!!</div>

                    }
                </div>


                {
                    (!changeUser.password || !changeUser.username ||changeUser.password !== user.password) &&
                    <>
                    <Link to={`/login`}>
                        <button className="btn btn-primary btn-block"

                                onClick={() => {
                                    setSubmitted(true)
                                }}
                        >Sign In
                        </button>
                    </Link>
                    </>
                }
                {/*{*/}
                {/*    changeUser.password  && changeUser.password !== user.password &&*/}
                {/*    <>*/}
                {/*    <Link to={`/login`}>*/}
                {/*        <button className="btn btn-primary btn-block"*/}
                {/*                onClick={() => {*/}
                {/*                    setSubmitted(true)*/}
                {/*                }}*/}
                {/*        >Sign In*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*    </>*/}
                {/*}*/}
                {
                    changeUser.password  && changeUser.username &&  changeUser.password === user.password &&
                    <>
                    <Link to={`/profile/${user.userId}`}>
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

            </form>
        );
    }



export default Login

