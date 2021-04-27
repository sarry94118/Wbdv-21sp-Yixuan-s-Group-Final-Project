import React from "react";

const PetDetail = ({pet}) => {

    // const {userId, petId} =useParams()

    // const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
    const defaultImg = process.env.PUBLIC_URL + "/petfinder.png"


    return <>
        <div className="col-6">
        <div className="card wm-card">
            <div className="card-body">
                <div className="row">
                    <img
                        alt="pet photo"
                        src={`${pet.image === "" ? defaultImg : pet.image}`}
                         width={`${pet.width==="null"? "200": pet.width}`}
                         width={`${pet.height===""? "200": pet.height}`}
                         // height={pet.height}
                        className="col-6"/>
                    <ul className="col-6 text-left">
                        <li>Name: {pet.name}</li>
                        <li>Breed: {pet.breed}</li>
                        <li>Gender: {pet.gender}</li>
                        <li>City: {pet.city}</li>
                        <li>Status: {pet.status}</li>
                    </ul>
                </div>
            </div>
            <br />

            <div className="row wm-botton-margin">
                <div className="wm-auto-margin">
                    <button type="submit" className="btn btn-primary wm-icon">Update</button>
                    {/*<button type="submit" className="btn btn-primary wm-icon">Delete</button>*/}
                </div>
            </div>
        {/*</li>*/}
        </div>
        </div>
    </>
}

export default PetDetail