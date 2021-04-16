import React, { useState, useEffect } from "react";
import {Link, useHistory, useParams} from 'react-router-dom'
import newUser from "./login"
import userService from "../../services/./search-services/user-service";

const Profile =({updateUser, findUserForUsername,user=null, show = false})=> {
    const {userId} = useParams()
    const [edited, setEdited] = useState(false);
    const [changeUser, setChangeUser] = useState(user);
    const [contact, setContact] = useState({})
    const  history = useHistory();
    const [shows, setShows] = useState(show)

    useEffect(() => {
        // if (changeUser !== {}) {
        //     console.log(shows)
        //     setShows(true)
        //     console.log("true1")
        //     console.log(changeUser)
        // }else {
        console.log(changeUser)
        if(!changeUser.username){
            console.log(shows)
            findUserByUserId(userId)
        }
    }, [userId])

    const findUserByUserId = (userId) => {
        userService.findUserByUserId(userId)
            .then((data) => {
                setContact(data)
                console.log("data")
                console.log(data)
                console.log("contact")
                console.log(contact)
                console.log("updatepuppy")
                console.log(changeUser)
                console.log(shows)
            })
        console.log(contact)
    }

    // useEffect(() => {
    //     //     // findUserForUsername(changeUser)
    //     //     console.log(changeUser)
    //     // }, [user])
    //     console.log("profile")
    //     console.log(user)
    //     if (changeUser !== "undefined" && typeof changeUser !== "undefined") {
    //         findUserForUsername(changeUser)
    //             .then((user)=>{setChangeUser(user)})}
    //     // } else {
    //     //     findUserForUsername(changeUser)
    //     //         .then((user)=>{setChangeUser(user)})
    //     // }
    // }, [userId])
        return (
            <div>
                <button onClick={() => {history.goBack()}}>Back</button>
                {
                    !changeUser.username &&
                    <>
                        <ul>
                            {/*{JSON.stringify(contact)}*/}
                            {

                                <li className="list-group-item" key={contact.userId}>

                                    <h3>First Name: {contact.firstName}</h3>
                                    <h3>Last Name: {contact.lastName}</h3>
                                    <h3>Contact email address: {contact.email}</h3>
                                    <br/>
                                    <br/>

                                </li>
                            }
                        </ul>

                    </>
                }

                {
                    // changeUser && changeUser[0] && changeUser[0].username &&
                    shows  && changeUser.username &&

                    <form>
                        <h3>Profile</h3>
                        {/*{JSON.stringify(changeUser)}*/}
                        {/*{JSON.stringify(contact.name)}*/}

                        <div className="form-group">
                            {
                                !shows &&
                                <label>{contact.name}</label>
                            }
                            <label>User Name111</label>
                            <textarea  className="form-control" value={changeUser.username}
                                      onChange={(e) =>
                                          setChangeUser({
                                              ...changeUser,
                                              username:e.target.value
                                          })}
                                      >{changeUser.username}</textarea>
                        </div>

                        <div className="form-group">
                            <label>First name</label>
                            <textarea type="text" className="form-control"  value={changeUser.firstName}
                                      onChange={(e) =>
                                          setChangeUser({
                                              ...changeUser,
                                              firstName:e.target.value
                                          })}
                                      placeholder="First name">{changeUser.firstName}</textarea>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <textarea type="text" className="form-control" value={changeUser.lastName}
                                      onChange={(e) =>
                                          setChangeUser({
                                              ...changeUser,
                                              lastName:e.target.value
                                          })}
                                      placeholder="Last name">{changeUser.lastName}</textarea>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <textarea type="email" className="form-control" value={changeUser.email}
                                      onChange={(e) =>
                                          setChangeUser({
                                              ...changeUser,
                                              email:e.target.value
                                          })}
                                      placeholder="Enter email">{changeUser.email}</textarea>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <textarea type="number" className="form-control"
                                      value={changeUser.password}
                                      onChange={(e) =>
                                          setChangeUser({
                                              ...changeUser,
                                              password:e.target.value
                                          })}
                                      placeholder="Password">{changeUser.password}</textarea>
                        </div>
                        <Link to="/profile/">
                            <button className="btn btn-primary btn-block"
                                    onClick={() => {
                                        findUserForUsername(changeUser)
                                        updateUser(changeUser.userId, changeUser)
                                        findUserForUsername(changeUser)
                                    }}>Update</button>
                        </Link>
                        <br/>

                        <Link to={`/petlist/${changeUser.userId}`}>
                            <button className="btn btn-primary btn-block">See your post</button>
                        </Link>
                    </form>
                }

            {/*{*/}
            {/*    shows && !changeUser.username &&*/}

            {/*    <form>*/}
            {/*    <h3>Profile</h3>*/}
            {/*    /!*<div className="form-group">*!/*/}
            {/*    /!*    <label>User type</label>*!/*/}
            {/*    /!*    <select type="text" className="form-select form-control" aria-label="Default select example">*!/*/}
            {/*    /!*        <option selected>User type</option>*!/*/}
            {/*    /!*        <option value="1">User</option>*!/*/}
            {/*    /!*        <option value="2">Admin</option>*!/*/}
            {/*    /!*    </select>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*{JSON.stringify(contact)}*!/*/}
            {/*    /!*{JSON.stringify(changeUser)}*!/*/}
            {/*    <div className="form-group">*/}
            {/*        <label>User Name222</label>*/}
            {/*        <textarea type="text" className="form-control" placeholder="User Name" />*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label>First name</label>*/}
            {/*        <textarea type="text" className="form-control" placeholder="First name" />*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label>Last name</label>*/}
            {/*        <textarea type="text" className="form-control" placeholder="Last name" />*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label>Email address</label>*/}
            {/*        <textarea type="email" className="form-control" placeholder="Enter email" />*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label>Password</label>*/}
            {/*        <textarea type="number" className="form-control" placeholder="Password" />*/}
            {/*    </div>*/}
            {/*    <Link to="/profile">*/}
            {/*        <button className="btn btn-primary btn-block"*/}
            {/*                onClick={() => {*/}
            {/*                    findUserForUsername(changeUser)*/}
            {/*                    updateUser(changeUser)*/}
            {/*                    findUserForUsername(changeUser)*/}
            {/*                }}>Update</button>*/}
            {/*    </Link>*/}
            {/*    <br/>*/}

            {/*    <Link to="/petlist">*/}
            {/*        <button className="btn btn-primary btn-block">See your post</button>*/}
            {/*    </Link>*/}
            {/*</form>*/}
            {/*}*/}


            </div>
        )
    }


export default Profile
