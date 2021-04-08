import React, {useState} from "react"
import {Link} from "react-router-dom";

import "./admin.css";



const Admin = ()=>{

    const [label, setLabel] = useState("users");

    return <div>
        <div>
            <h3 className="text-white wm-logo">Administration</h3>
        </div>
        <div className="nav nav-tabs wm_align_middle">
            <div className="nav-item">
                {/*<a className="nav-link text-white"*/}
                <a className={`nav-link ${label === "users"? "active" : ""}`}
                    onClick={()=>{setLabel("users")}}>User</a>
            </div>
            <div className="nav-item">
                <a className={`nav-link ${label === "pets"? "active" : ""}`}
                   onClick={()=>{setLabel("pets")}}>Pet</a>
            </div>
            {
                label === "users" &&
                <span className="wm-floating-child">
                <input placeholder="search users"/>
                <i className="fas fa-search text-white wm-icon"></i>
                <i className="fas fa-plus text-white wm-icon"></i>
             </span>
            }
            {
                label === "pets" &&
                <span className="wm-floating-child">
                <input placeholder="search pets"/>
                <i className="fas fa-search text-white wm-icon"></i>
                <i className="fas fa-plus text-white wm-icon"></i>
             </span>
            }
        </div>


        {
            label === "users" &&
            <div className="wm_align_middle">
            <table className="table table-striped wm-background">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>password</th>
                    <th>reported pets</th>
                    <th>City</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="users">Alice</Link></td>
                        <td>*****</td>
                        <td><Link to="/pets">2</Link></td>
                        <td>Seattle</td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                    <tr>
                        <td><Link to="users">John</Link></td>
                        <td>*****</td>
                        <td><Link to="/pets">1</Link></td>
                        <td>SF</td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                    <tr>
                        <td><Link to="users">Zoey</Link></td>
                        <td>*****</td>
                        <td><Link to="/pets">3</Link></td>
                        <td>LA</td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
        {
            label === "pets" &&
            <div className="wm_align_middle">
            <table className="table table-striped wm-background">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>type</th>
                    <th>breed</th>
                    <th>owner</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="pets">Bob</Link></td>
                        <td>type111</td>
                        <td>breed111</td>
                        <td><Link to="/users">Alice</Link></td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                    <tr>
                        <td><Link to="pets">Kitty</Link></td>
                        <td>type22</td>
                        <td>breed22</td>
                        <td><Link to="/users">Joey</Link></td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                    <tr>
                        <td><Link to="pets">Angel</Link></td>
                        <td>*****</td>
                        <td>3</td>
                        <td><Link to="/users">Tom</Link></td>
                        <td><i className="fas fa-times float-right" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </div>
}

export default Admin