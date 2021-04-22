import React, {useEffect, useState} from "react";

const Privacy =() => {

    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    // const [serverUser, setServerUser] = useState({username:"", password:""})





    return (

        <div>

            <h1>Privacy Policy</h1>
            <br/>
            <h3 className="float-left">Data we collect</h3>
            <br/>
            <br/>
            <br/>
            <p>
                <h5>User Information</h5>
                When you create an account on PetFinder, we only need your username and your password. You may choose to give us more information in your Profile, such as the first name, last name, and email address you enter.
                We may publicly display the first name, last name and email address that you provide.
            </p>
            <br/>
            <p>
                <h5>Pet Information</h5>
                If you are registered as an user, you may post missing pet information. We will collect your posts including the pet name, age, location and image link, and publicly display them along with your username.

            </p>
            <br/> <br/> <br/>
            <h3 className="float-left">How we use your data</h3>
            <br/>
            <br/>
            <br/>
            <p>
                We use your Profile Information to create your account, fill out your profile and to share that part of the profile (username, first name and last name) with the public.
            </p>
            <p>We may use your email address to communicate with you when it’s necessary.</p>
            <p>We use your posts to collect information for search function, and help you to find your pet</p>


        </div>
    )



}

export default Privacy