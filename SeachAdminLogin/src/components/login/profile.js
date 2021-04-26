import React, { useState, useEffect } from "react";
import {Link, useHistory, useParams} from 'react-router-dom'
// import newUser from "./login"
import userService from "../../services/admin-service/user-service";
import sessionUserService from "../../services/user-service"
import NavBar from "../nav-bar";
// import Popup from '../popup/password';
// import Login from "./login";

//modified by Meng Wang
// const Profile =({updateUser, findUserForUsername,user=null, show = false})=> {
const Profile =({findUserForUsername, show = false})=> {
    const {userId} = useParams()
    const [edited, setEdited] = useState(false);
    const [changeUser, setChangeUser] = useState({});
    // const [contact, setContact] = useState({})
    const history = useHistory();
    const [shows, setShows] = useState(show)
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [userType, setUserType] = useState("anonymous")
    const [userNameError, setUserNameError] = useState(false);
    const [userTypeError, setUserTypeError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function isValidEmailAddress(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return false;

        }
        return true;
    }

    useEffect(() => {
        sessionUserService.profile().then(user => {
            console.log("profile: useEffect user=" + JSON.stringify(user))
            console.log("profile change changeUser = " + JSON.stringify(changeUser))
            if (user !== null && user.username !== null) {
                setUserType(user.userType)
                if(user.userType === "user"){
                    console.log("someone view it's own profile")
                    setChangeUser(user)
                }else if(user.userType === "admin"){
                    console.log("admin view "+ userId + "'s profile")
                    userService.findUserById(userId).then(currentUser => {
                        console.log("currentUser= " + JSON.stringify(currentUser))
                        setChangeUser(currentUser)
                    })
                }
            } else {
                console.log("anonymous view someone else's profile")
                userService.findUserById(userId).then(user => {
                    setChangeUser(user)
                    setUserType("anonymous")
                })
            }
        })
        // if(!changeUser.username){
        //     console.log(shows)
        //     findUserByUserId(userId)
        // }
    }, [])

    const updateUser = ()=> {
        console.log("profile update")
        if(changeUser.username === null || changeUser.username === ""){
            setUserNameError(true)
        }
        if(changeUser.userType === null || changeUser.userType === ""){
            setUserTypeError(true)
        }
        if(isValidEmailAddress()){
            setEmailError(true)
        }
        if(changeUser.password === null || changeUser.password === ""){
            setPasswordError(true)
        }
        if(!userNameError && !userTypeError && !emailError && !passwordError){
            userService.updateUser(userId, changeUser)
                .then((status) =>{
                    console.log("profile updata status=" + status)
                    setEdited(false)
                })
        }
    }
    // const findUserByUserId = (userId) => {
    //     userService.findUserByUserId(userId)
    //         .then((data) => {
    //             setContact(data)
    //             console.log("data")
    //             console.log(data)
    //             console.log("contact")
    //             console.log(contact)
    //             console.log("updatepuppy")
    //             console.log(changeUser)
    //             console.log(shows)
    //         })
    //     console.log(contact)
    // }

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
        <>
            <NavBar/>

            <div>
                <button onClick={() => {
                    history.goBack()
                }}>Back
                </button>
                <h3>Profile</h3>
                {
                    // !changeUser.username &&
                    userType === "anonymous" &&
                    <div>
                        <ul>
                            {/*{JSON.stringify(contact)}*/}
                            {

                                <li className="list-group-item" key={changeUser.userId}>

                                    <h3>First Name: {changeUser.firstName}</h3>
                                    <h3>Last Name: {changeUser.lastName}</h3>
                                    <h3>Contact email address: {changeUser.email}</h3>
                                    <br/>
                                    <br/>

                                </li>
                            }
                        </ul>

                    </div>
                }
                {
                    !edited && (userType === "user" || userType === "admin") &&
                    <>
                        <div className="form-group">
                            <label>User Name:  {changeUser.username}</label>

                        </div>


                        <div className="form-group">
                            <label>First name:  {changeUser.firstName}</label>

                        </div>

                        <div className="form-group">
                            <label>Last name:  {changeUser.lastName}</label>
                        </div>

                        <div className="form-group">
                            <label>Email address:   {changeUser.email}</label>
                        </div>

                        <div className="form-group">
                            <label>Password:  {changeUser.password}</label>
                        </div>
                        <i className="btn btn-primary btn-block" onClick={() => setEdited(true)}>
                            Edit
                        </i>
                        <br/>
                    </>
                }
                {
                    // changeUser && changeUser[0] && changeUser[0].username &&
                    edited && (userType === "user" || userType === "admin") &&

                    <form>

                        {/*{JSON.stringify(changeUser)}*/}
                        {/*{JSON.stringify(contact.name)}*/}

                        <div className="form-group row">
                            <label className="col-2">
                                <label className="text-danger">*</label>
                                User name
                            </label>
                            <input type="text" className="form-control col-10"
                                   onBlur={(e) =>{
                                       if(e.target.value) {
                                           setChangeUser({
                                               ...changeUser,
                                               username:e.target.value
                                           })
                                           setUserNameError(false)
                                       }
                                       else{
                                           setUserNameError(true)
                                       }
                                   }
                                   }
                                   onChange={()=>setUserNameError(false)}
                                   placeholder="User name"
                                   value={changeUser.username}/>
                        </div>
                        {
                            userNameError &&
                            <div className="alert alert-primary">User name is required!!</div>
                        }
                        <div className="form-group row">
                            <label className="col-2">
                                <label className="text-danger">*</label>
                                User type
                            </label>
                            <select className="form-control col-10" onChange={(e) =>
                                setChangeUser({
                                    ...changeUser,
                                    userType:e.target.value
                                })} value={changeUser.userType}>
                                {/*<option value={""}>Please select User Type</option>*/}
                                <option value={"user"}>User</option>
                                <option value={"admin"}>Admin</option>
                            </select>
                        </div>
                        {
                            userTypeError && !changeUser.userType &&
                            <div className="alert alert-primary">user type is required!!</div>
                        }
                        <div className="form-group row">
                            <label className="col-2">First name</label>
                            <input type="text" className="form-control col-10"
                                   value={changeUser.firstName}
                                   onChange={(e) =>
                                       setChangeUser({
                                           ...changeUser,
                                           firstName:e.target.value
                                       })}
                                   placeholder="First name" />
                        </div>

                        <div className="form-group row">
                            <label className="col-2">Last name</label>
                            <input type="text" className="form-control col-10"
                                   value={changeUser.lastName}
                                   onChange={(e) =>
                                       setChangeUser({
                                           ...changeUser,
                                           lastName:e.target.value
                                       })}
                                   placeholder="Last name" />
                        </div>

                        <div className="form-group row">
                            <label className="col-2">Email address</label>
                            <input type="email" className="form-control col-10"
                                   value={changeUser.email}
                                   onChange={(e) =>{
                                       if(!isValidEmailAddress(changeUser.email)){
                                           setEmailError(true)
                                       }else{
                                           setChangeUser({
                                               ...changeUser,
                                               email:e.target.value
                                           })
                                           setEmailError(false)
                                       }
                                   }
                                   }
                                   placeholder="Enter email" />
                        </div>
                        {
                            emailError &&
                            <div className="alert alert-primary">email address is invalid!!</div>
                        }

                        <div className="form-group row">
                            <label className="col-2">
                                <label className="text-danger">*</label>
                                Password
                            </label>
                            <input type="password" className="form-control col-10"
                                   value={changeUser.password}
                                   onBlur={(e) =>{
                                       if(e.target.value) {
                                           setChangeUser({
                                               ...changeUser,
                                               password:e.target.value
                                           })
                                           setPasswordError(false)
                                       }
                                       else{
                                           setPasswordError(true)
                                       }
                                   }
                                   }
                                   onChange={()=>setPasswordError(false)}
                                   placeholder="Enter password" />
                        </div>
                        {
                            passwordError &&
                            <div className="alert alert-primary">password is required!!</div>

                        }

                        <Link>
                            <i onClick={() => {
                                updateUser(changeUser.userId, changeUser)
                            }}
                               className="btn btn-primary btn-block">
                                Update</i>
                        </Link>
                        <br/>


                    </form>
                }
                {
                    userType === "admin" &&
                    <Link to="/admin/users">
                        <i className="btn btn-primary btn-block">
                            Back to UserList
                        </i>
                    </Link>
                }
                {
                    userType === "user" &&
                    <Link to={`/petlist/${changeUser.userId}`}>
                        <i className="btn btn-primary btn-block">See my post</i>
                    </Link>
                }

            </div>
        </>
    )
}
// const stmp = (state) => {}
//
// const dtmp = (dispatch) => {
//
// }

export default Profile
