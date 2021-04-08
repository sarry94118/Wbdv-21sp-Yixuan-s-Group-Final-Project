import React,{useState} from "react";
import {Link} from "react-router-dom";

const Pet_list = ()=>{

    const [pet, setPet] = useState("pet1")

    return <div>
        <h4 className="text-white">Alice Reported Pet</h4>
        <div className="nav nav-tabs wm_align_middle">
            <div className="nav-item">
                <a className={`nav-link ${pet === "pet1"? "active" : ""}`}
                   onClick={()=>{setPet("pet1")}}>Bob</a>
            </div>
            <div className="nav-item">
                <a className={`nav-link ${pet === "pet2"? "active" : ""}`}
                   onClick={()=>{setPet("pet2")}}>Kitty</a>
            </div>
        </div>



        {
            pet==="pet1" &&
            <div className="row wm_pet_info wm_align_middle">
                <div className="c">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1955939207,2121848497&fm=26&gp=0.jpg"
                         width="100" height="150"/>
                </div>
                <ul className="c">
                    <li>Name: Bob</li>
                    <li>DOB: 2010-10-1</li>
                    <li>Type: sdfds</li>
                    <li>Color: black and white</li>
                    <li>Breed: sdfsd</li>
                    <li>Owner: <Link to="/users">Alice</Link></li>
                    <li>Contact info: 123456789</li>
                    <li>Status: Lost</li>
                </ul>
            </div>
        }
        {
            pet==="pet2" &&
            <div className="row wm_pet_info wm_align_middle">
            <div className="c">
                <img src="https://tse2-mm.cn.bing.net/th/id/OIP.DueA8jb4NC84SbLCes2Y2wHaI6?pid=ImgDet&rs=1"
                     width="140" height="170"/>
            </div>
            <ul className="c">
                <li>Name: Kitty</li>
                <li>DOB: 2015-5-1</li>
                <li>Type: sdfds</li>
                <li>Color: black and white</li>
                <li>Breed: sdfsd</li>
                <li>Owner: <Link to="/users">Alice</Link></li>
                <li>Contact info: 123456789</li>
                <li>Status: Lost</li>
            </ul>
        </div>
        }
        <br />
        <button type="submit" className="btn btn-light wm-icon">Update</button>
        <button type="submit" className="btn btn-light wm-icon">Delete</button>
    </div>
}

export default Pet_list