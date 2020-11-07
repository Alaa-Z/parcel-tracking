//React core 
import React from "react";
import {Link } from "react-router-dom";

import postlogo from "../../assets/images/postlogo.png";

import "../../css/Nav.css";

export default function Nav () {
    return (
        <nav className="nav">
        <Link to="/">
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