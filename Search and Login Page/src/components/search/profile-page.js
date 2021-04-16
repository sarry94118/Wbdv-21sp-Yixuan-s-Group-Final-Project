import React, {useState, useEffect, useContext} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import petSelfService from "../../services/search-services/self-created-pet-service"
import userService from "../../services/search-services/user-service";

const ProfilePage = () => {
    const {userId} = useParams()
    const [contact, setContact] = useState([{}])
    const  history = useHistory();

    useEffect(() => {
        findUserByUserId(userId)
    }, [])

    const findUserByUserId = (userId) => {

        userService.findUserByUserId(userId)
            .then((data) => {
                setContact(data)
            })
        console.log(contact)
    }
    return(
        <div>
            <button onClick={() => {history.goBack()}}>Back</button>
            {/*{JSON.stringify(contact)}*/}
            {
                contact &&
                    <>
                        <ul>
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

        </div>
    )

}

export default ProfilePage