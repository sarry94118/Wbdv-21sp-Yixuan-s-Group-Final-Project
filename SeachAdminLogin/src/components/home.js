import React, {useEffect, useState} from "react"
import {Link, useHistory} from "react-router-dom";
import petService from "../services/pet-service";

const Home = () =>{

    const [pets, setPets] = useState([])

    useEffect(() => {
        findAllPets()
        console.log(pets)
    }, [])


    const findAllPets = () =>{
        petService.findAllPets()
            .then(p => setPets(p))
        console.log(pets)
    }


    return(

        <div className="container-fluid">



            <div className="row">
                <div className="col text-center">
                    <img src="https://wallpaperaccess.com/full/115488.jpg" width={300} alt="Responsive image"/>
                    <h2>PetFinder</h2>

                    <Link to={"/search"}>
                        <button class="btn btn-default">Search</button>
                    </Link>
                    <br/>
                    <Link to={"/login"}>
                        <button class="btn btn-default">Login</button>
                    </Link>
                </div>
            </div>
            <br/>
            <br/>
            <h4>New Post Pet</h4>
            {

                pets && pets.map(pet =>
                    <tr>
                        {/*<Link to={`/petlist/post/card/${pet.petId}`}>*/}
                        <td scope="col">
                            {/*<Link to={`/petlist/post/card/${pet.petId}`}>*/}
                                {pet.name}
                            {/*</Link>*/}
                        </td>
                        {/*<Link/>*/}

                    </tr>
                )
            }


        </div>
    )
}

export default Home