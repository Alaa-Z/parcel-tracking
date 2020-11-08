import React from "react";
import {useState} from "react";

import"../../css/detail.css";


export default function Detail ({data}){
    const {  
        id,
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_id,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_status_ok,
        user_phone,
        user_name,
        notes,
        last_updated,
          } = data;

        const [ openDetails, setOpenDetails] = useState(false); // Initially false

return (
    <ul className="detail">
    <li> <b>Name: {user_name}</b></li>
    <li> <b class="first">Parcel id: {parcel_id }</b></li>
    <li> Estimated time of arrival: {eta}</li>
    
            <button
                onClick={() => setOpenDetails(!openDetails)} // Make it true if false, or false if true
            >
                Show me more
            </button>
            { openDetails 
                ? // If true, your code
                  <p>
                     <li>Last_updated: {last_updated}</li>
                     <li> Status: {status} </li>  <li>Sender: {sender}</li>
                     <li>Location_name: {location_name}</li>
                     
                  </p>
                 
                : // If false, Nothing
                null  
            }
    
    </ul>
 


);

}