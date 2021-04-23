import React, {useEffect} from "react"
import {Link, useHistory} from "react-router-dom";
import userService from "";

const NavBar = ()=>{



    return <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <i className="fas fa-dog"></i>
            <h2 className="navbar-brand">Welcome to Petfinder</h2>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {/*    <ul className="navbar-nav ml-auto">*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link className="nav-link" to={"/login"}>Login</Link>*/}
            {/*        </li>*/}
            {/*        <li className="nav-item">*/}
            {/*            <Link className="nav-link" to={"/register"}>Sign up</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
                <ul className="navbar-nav ml-auto">
                    {
                        !loginOrNot &&
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>Login</Link>
                        </li>
                    }
                    {
                        loginOrNot &&
                        <li className="nav-item">
                            <Link className="nav-link" onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    }
                    <li className="nav-item">
                        <Link className="nav-link" to={"/register"}>Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/privacy"}>Privacy Policy</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
}

export default NavBar