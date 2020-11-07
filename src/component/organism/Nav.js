//React core 
import React from "react";
import {Link } from "react-router-dom";

import postlogo from "../../asserts/images/postlogo.png";

import "../../css/Nav.css";

export default function Nav () {
    return (
        <nav>
        <Link to="/">
        <img id ="logo" src={postlogo} allt="logo" />
        </Link>
        <ul className="list">
        <Link to ="/parcel">
         <li className="navStyle"> My Parcel</li>
         </Link>
        </ul>
     </nav>
    );
}