import React, {Component, useState} from "react";
import {Link} from "react-router-dom";

const ResetPassword =({resetUser, findUserForUsername,user}) => {
    const [changeUser, setChangeUser] = useState([]);
        return (
            <form>
                <h3>Reset Password</h3>
                {JSON.stringify(changeUser)}
                <div className="form-group">
                    <label>User Name</label>
                    <textarea type="text" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      username:e.target.value
                                  })}
                              placeholder="User Name" />
                </div>

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
                    <label>Email address</label>
                    <textarea type="email" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      email:e.target.value
                                  })}
                              placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>New Password</label>
                    <textarea type="number" className="form-control"
                              onChange={(e) =>
                                  setChangeUser({
                                      ...changeUser,
                                      password:e.target.value
                                  })}
                              placeholder="Password" />
                </div>

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
                <Link to="/login">
                    <button className="btn btn-primary btn-block"
                            onClick={() => {
                                // findUserForUsername(changeUser)
                                resetUser(changeUser)

                            }}
                    >Update</button>
                </Link>

            </form>
        );
    }
export default ResetPassword
