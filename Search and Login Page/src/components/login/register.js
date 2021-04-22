import React, {Component, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Popup from '../popup/password';
import { useHistory } from 'react-router'


const SignUp =({addUser, user, isValidEmailAddress}) => {
    const [edited, setEdited] = useState(false);
    const [changeUser, setChangeUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory()


    function isValidEmailAddress(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return false;

        }
        return true;
    }
    useEffect(() => {


    }, [])

        return (
            <form>
                <h3>Sign up</h3>
                {JSON.stringify(changeUser)}
                <div className="form-group">
                    <label>User type</label>
                    <select className="form-group" onChange={(e) =>
                        setChangeUser({
                            ...changeUser,
                            userType:e.target.value
                        })} value={changeUser.userType}>
                        <option value={""}>Please select User Type</option>
                        <option value={"admin"}>Admin</option>
                        <option value={"user"}>User</option>
                    </select>
                </div>
                {
                    submitted && !changeUser.userType &&
                    <div className="alert alert-primary">user type is required!!</div>

                }
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
                {
                    submitted && !changeUser.username &&
                    <div className="alert alert-primary">user name is required!!</div>

                }
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
                {
                    submitted && !isValidEmailAddress(changeUser.email) &&
                    <div className="alert alert-primary">email address is invalid!!</div>

                }

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
                {
                    submitted && !changeUser.password &&
                    <div className="alert alert-primary">password is required!!</div>

                }

                {/*{*/}
                {/*    !isOpen && submitted && !changeUser.password &&*/}
                {/*    <Popup*/}
                {/*        content={*/}
                {/*            <>*/}
                {/*                <b>Password is required</b>*/}
                {/*            </>*/}
                {/*        }*/}

                {/*        handleClose={togglePopup}/>*/}
                {/*}*/}

                {/*{*/}
                {/*    !isOpen && submitted && !changeUser.username &&*/}
                {/*    <Popup*/}
                {/*        content={*/}
                {/*            <>*/}
                {/*                <b>User name is required</b>*/}
                {/*            </>*/}
                {/*        }*/}
                {/*        handleClose={togglePopup}/>*/}
                {/*}*/}
                {
                    (!changeUser.password || !changeUser.username || !changeUser.userType || !isValidEmailAddress(changeUser.email)) &&
                    <Link to="/register">
                        <button className="btn btn-primary btn-block"
                                // onClick={togglePopup}
                                onClick={() => {
                                    setSubmitted(true)
                                }}>Sign Up
                        </button>
                    </Link>
                }

                {
                    changeUser.username && changeUser.password && changeUser.userType && isValidEmailAddress(changeUser.email) &&
                    <Link to="/login">
                    <button className="btn btn-primary btn-block"
                            onClick={() => {
                                addUser(changeUser)
                            }}>Sign Up
                    </button>
                </Link>
                }
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
