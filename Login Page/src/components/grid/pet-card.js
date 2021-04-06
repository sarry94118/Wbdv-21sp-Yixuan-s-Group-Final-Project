import React,  {useState} from "react"
import {Link} from "react-router-dom";

const PetCard =(
    {
        // deleteCourse,
        // updateCourse,
        // course,
        // lastModified,
        // title,
        // owner
    }) => {
    // const [editing, setEditing] = useState(false)
    // const [newTitle, setNewTitle] = useState(title)
    // const saveTitle = () => {
    //     setEditing(false)
    //     const newCourse = {
    //         ...course,
    //         title: newTitle
    //     }
    //     updateCourse(newCourse)
    // }


// const CourseCard = ({course}) =>
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 col-xl-2">
            <div className="mt-3">
                <div className="card" style={{"width": "20rem"}}>
                    <div className="card-body">
                        <h5 className="card-title text-secondary">{}</h5>
                        <p className="card-text">Some description.

                            <img className="card-img-top" alt="Card image cap"
                                 src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzaE-yVJFUm_0dmcYTWdYn-Oe-0rFaxi76A&usqp=CAU`}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PetCard