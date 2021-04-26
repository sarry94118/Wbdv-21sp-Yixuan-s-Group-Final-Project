import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import petService from "../../../services/admin-service/pet-service"
import PetDetail from "./pet-detail";
import NavBar from "../../nav-bar";
import sessionUserService from "../../../services/user-service";


const PetTab = ()=>{

    const {petId} = useParams()
    const [pets, setPets] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        console.log("petid= "+petId)
        sessionUserService.profile().then(user => {
            if(user !== null && user.username !== null){
                setCurrentUser(user)
                // userService.findUserById(userId).then(user => setUserName(user.username))
                // 从userlist挑战过来，查看某用户post的多个pets
                if(petId === "undefined" || typeof petId === "undefined") {
                    petService.findPetsForUser(user.userId).then(pets => setPets(pets))
                }
                // 从petlist点击某一pet名字之后跳转过来查看
                else{
                    petService.findPetById(petId).then(pet => {
                        console.log(JSON.stringify(pet))
                        setPets(new Array(pet))
                    })
                }
            }else{
                alert("Please login first")
            }
        })

    }, [])

    return <>
            <NavBar />
            <h3>Reported Pet By <label className="font-italic font-weight-bold">{currentUser.username}</label></h3>

            {/*<ul className="nav nav-tabs">*/}
            <div className="row">
                {
                    pets.map(pet=>
                        // <li className={`nav-item`} key={pet.petId}>
                            <PetDetail pet={pet}/>)
                        // </li>)
                }
                {
                    currentUser.userType === "admin" &&
                    <Link to={"/admin/pets"}>
                            <i className="btn btn-primary btn-block">Back to PetList</i>
                        </Link>
                }
                {/*{*/}
                {/*    currentUser.userType === "user" &&*/}
                {/*        <Link to={"/admin/pets"}>*/}
                {/*            <i className="btn btn-primary btn-block">Back to PetList</i>*/}
                {/*        </Link>*/}
                {/*}*/}
            {/*</ul>*/}
        </div>
    </>
}

export default PetTab