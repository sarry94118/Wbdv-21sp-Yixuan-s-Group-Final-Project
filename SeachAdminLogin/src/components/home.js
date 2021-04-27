import React, {useEffect, useState} from "react"
import {Link, useHistory} from "react-router-dom";
import petService from "../services/pet-service";
import sessionUserService from "../services/user-service";
import userService from "../services/admin-service/user-service";


const Home = () =>{

    const [pets, setPets] = useState([])
    const [changeUserPets, setChangeUserPets] = useState([])
    const [userType, setUserType] = useState("anonymous")
    const [changeUser, setChangeUser] = useState({});
    useEffect(() => {
        findAllPets()
        sessionUserService.profile().then(user => {
            console.log("profile: useEffect user=" + JSON.stringify(user))
            console.log("profile change changeUser = " + JSON.stringify(changeUser))
            if (user !== null && user.username !== null) {
                setUserType(user.userType)
                if(user.userType === "user" || user.userType === "admin"){
                    console.log("someone view it's own profile")
                    console.log(user)
                    console.log(user.userType)
                    console.log(user.userId)
                    setChangeUser(user)
                    findPetForUser(user.userId)
                }
            } else {
                console.log("anonymous view someone else's profile")
                console.log(user.userType)
            }
        })
    }, [])


    const findAllPets = () =>{
        petService.findAllPets()
            .then(p => setPets(p))
        console.log(pets)
    }

    const findPetForUser =(pd)=>{
        petService.findPetForUser(pd)
            .then(pp => setChangeUserPets(pp))
    }


    return(

        <div className="container-fluid">



            <div className="row">
                <div className="col text-center">
                    <h1>PetFinder</h1>
                    <img src="https://wallpaperaccess.com/full/115488.jpg" width={550} alt="Responsive image"/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to={"/search"}>

                        <button type="button" className="btn btn-outline-info btn-lg btn-block">Search</button>
                    </Link>
                    <br/>
                    <Link to={"/login"}>
                        <button type="button" className="btn btn-outline-info btn-lg btn-block">Login</button>
                    </Link>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
            <div className="col-md-1 d-none d-md-block"></div>
                <div className="col-sm-12 col-md-10">
                    <div className="row" style={{paddingTop: 15}}>
                        <div className="col-md-7 col-lg-8">
                        <h4>New Post Pet Name</h4>
                        {

                            pets && pets.map(pet =>
                                <tr>

                                    <td scope="col">
                                            {pet.name}
                                    </td>

                                </tr>
                            )
                        }
                         </div>
                         <div className="col-md-5 col-lg-3 d-none d-md-block">
                             {
                                 changeUser.firstName &&
                                     <>
                                <h4>{changeUser.firstName} Post Pet</h4>
                                {/*{JSON.stringify(changeUserPets)}*/}
                                {

                                    changeUserPets && changeUserPets.map(pett =>
                                        <tr>

                                            <td scope="col">
                                                {pett.name}
                                            </td>


                                        </tr>
                                    )
                                }
                                     </>
                            }
                             {
                                 !changeUser.firstName &&
                                     <h6>please login to see your post</h6>
                             }
                         </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block"></div>
            </div>
            </div>
        </div>
    )
}


export default Home