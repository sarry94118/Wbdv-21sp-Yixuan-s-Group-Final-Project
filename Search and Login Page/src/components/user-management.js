import React, {useState, useEffect} from 'react'
import Login from "./login/login"
import Profile from "./login/profile"
import Register from "./login/register"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import userService from "../services/user-service";
import ResetPassword from "./login/ResetPassword";
import Admin from "./admin/admin";



const UserManagement =() => {

    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    // const [serverUser, setServerUser] = useState({username:"", password:""})



     useEffect(() => {
        findAllUsers()
        console.log(users)
         // userService.profile().then(user => {
         //     console.log("usermanagement user=" + user.username)
         //     setUser(user)
         // })
    }, [])


    const findAllUsers = () =>{
        userService.findAllUsers()
            .then(users => setUsers(users))
    }

    const findUserForUsername =(uuser) => {
        userService.findUserForUsername(uuser.username)
            .then((newUser) => {
                setUser(newUser)
                console.log("finduser")
                console.log(user)})

    }


    // deleted by Meng Wang
    // const addUser=(user) => {
    //
    //     userService.createUser(user.username,user)
    //         .then(user => {setUsers({
    //                 users: [
    //                     ...users,
    //                     user
    //                 ]
    //             })
    //         // console.log("creatuser")
    //         console.log(users)})
    // }
    // ===============end====================



    const updateUser = (userId, user) => {
        userService.updateUser(userId, user)
            .then((status) =>{users.map(newuser => newuser.userId !== user.userId ? newuser : user)
                console.log("updateuser")
                console.log(user)})

    }

    const resetUser = (resetuser) => {
        userService.findUserForUsername(resetuser.username)
            .then(mapuser=> {updateUser(mapuser.userId, {...resetuser, userId:mapuser.userId, userType:mapuser.userType})

    })}


    return (

                <div>

                <Route path="/" exact={true}>
                    <Login
                        findUserForUsername = {findUserForUsername}
                        updateUser = {updateUser}
                        users={users}
                        user = {user}/>
                </Route>


                <Route path="/login" exact={true}>
                    <Login
                        findUserForUsername = {findUserForUsername}
                        updateUser = {updateUser}
                        users={users}
                        user = {user}
                        />
                </Route>
                <Route path="/register" exact={true}>
                    {/*<Register*/}
                    {/*    addUser = {addUser}*/}
                    {/*    users={user} />*/}
                    <Register />
                </Route>
                <Route path={["/profile","/profile/:userId"]} exact={true}>
                    <Profile
                        findUserForUsername = {findUserForUsername}
                        updateUser={updateUser}
                        // user={user}
                        show = {true}
                      />

                </Route>
                <Route path="/reset" exact={true}>
                    <ResetPassword
                        findUserForUsername = {findUserForUsername}
                        resetUser={resetUser}
                        user={user} />

                </Route>
                 {/*added by Meng Wang*/}





            </div>
        )



}

export default UserManagement