import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import NavBar from "../nav-bar";

const ResetPassword =({resetUser, findUserForUsername,user}) => {
    const [changeUser, setChangeUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);


    function isValidEmailAddress(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return false;

        }
        return true;
    }
        return (
            <form>
                <NavBar />
                <h3>Reset Password</h3>
                {/*{JSON.stringify(changeUser)}*/}
                <div className="form-group">
                    <label className="text-danger">*</label>
                    <label>User Name</label>
                    <textarea type="text" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      username:e.target.value
                                  })}
                              placeholder="Please type correct User Name" />
                </div>
                {
                    submitted && !changeUser.username &&
                    <div className="alert alert-primary">username is required</div>
                }

                <div className="form-group">
                    <label>First name</label>
                    <textarea type="text" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      firstName:e.target.value
                                  })}
                              placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <textarea type="text" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      lastName:e.target.value
                                  })}
                              placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label className="text-danger">*</label>
                    <label>Email address</label>
                    <textarea type="email" className="form-control"
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
                    <label className="text-danger">*</label>
                    <label>New Password</label>
                    <textarea type="number" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      password:e.target.value
                                  })}
                              placeholder="Password" />
                </div>
                {
                    submitted && !changeUser.password &&
                    <div className="alert alert-primary">password is required</div>
                }

                {/*<div className="form-group">*/}
                {/*    <label>Confirm New Password</label>*/}
                {/*    <textarea type="number" className="form-control"*/}
                {/*              value={changeUser.password}*/}
                {/*              onChange={(e) =>*/}
                {/*                  setChangeUser({*/}
                {/*                      ...changeUser,*/}
                {/*                      password:e.target.value*/}
                {/*                  })}*/}
                {/*              placeholder="Password" />*/}
                {/*</div>*/}
                {
                    (!changeUser.password || !changeUser.username || !isValidEmailAddress(changeUser.email)) &&


                        <button className="btn btn-primary btn-block"
                                onClick={() => {
                                    // findUserForUsername(changeUser)
                                    setSubmitted(true)

                                }}
                        >Update
                        </button>
                }
                {
                    changeUser.password && changeUser.username && isValidEmailAddress(changeUser.email) &&
                    <Link to="/login">
                        <button className="btn btn-primary btn-block"
                                onClick={() => {
                                    // findUserForUsername(changeUser)
                                    resetUser(changeUser)

                                }}
                        >Update
                        </button>
                    </Link>
                }

            </form>
        );
    }
export default ResetPassword
