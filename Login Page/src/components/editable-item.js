import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {}) => {
    const [editing, setEditing] = useState(false)
    return (
        <>
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }

            {
                editing &&
                <>
                    <i onClick={() => {
                        setEditing(false)
                    }} className="fas fa-check"></i>
                    <i onClick={() =>{
                    }} className="fas fa-times"></i>
                </>
            }
        </>
    )
}

export default EditableItem