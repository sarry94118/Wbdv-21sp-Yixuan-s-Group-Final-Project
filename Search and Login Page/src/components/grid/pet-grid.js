import React from 'react'
import {Link} from "react-router-dom";
import PetCard from "./pet-card";

class PostGrid extends React.Component{
    constructor(props) {
        super(props);
        // console.log(props)
    }

    render() {
        return(
            <div>
                <h1>Post Grid</h1>
                <div className="row">
                    <div className="col-4 d-none d-md-block">
                        <div style={{fontWeight: 'bold', fontSize: '21px'}}>Recent Document</div>
                    </div>
                    <div className="col-5 d-none d-md-block">
                        <div style={{fontWeight: 'bold', fontSize: '21px'}}>
                            Owned by Me
                            <i className="fas fa-caret-down"></i>
                        </div>

                    </div>

                    <div className="col-3">
                        <Link to="/petlist">
                            Back to Previous Page
                        </Link>
                    </div>
                </div>

<div className="container">
                <div className="row">

                <div className="col-sm-4">
                <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 col-xl-2">
                    <div className="mt-3">
                        <div className="card" style={{"width": "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title text-secondary">{}</h5>
                                <p className="card-text">Some description.

                                    <img className="card-img-top" alt="Card image cap"
                                         src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXojCGo9FSBfcPQpauxOt6dB7Mn2aZMCAfgA&usqp=CAU`}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



                </div>
</div>
            </div>)
    }
}
export default PostGrid