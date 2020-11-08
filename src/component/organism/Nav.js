//React core 
import React from "react";
import {Link } from "react-router-dom";
// import logo image
import postlogo from "../../assets/images/postlogo.png";
// css file 
import "../../css/Nav.css";

export default function Nav () {
    return (
        <nav className="nav">
        <Link to="/">  { /* go back to the main page*/}
        <img id ="logo" src={postlogo} allt="logo" />
        </Link>
        <ul className="list">
        <Link to ="/parcel">
         <li className="navStyle"> <b>My Parcel</b></li>
         </Link>
        </ul>
     </nav>
    );
}