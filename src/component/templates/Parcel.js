import React, { useEffect, useState } from "react";

import Header from "../organism/Nav";
import Detail from "../molecules/Detail";

import "../../css/HomePage.css";


export default function HomePage() {
      // o is loading 1 is ready 2 is error 
  const [status,setStatus]= useState(0);
  const [information, setInformation] = useState([]);

  const endpoint ="https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // like a constructor 
  useEffect( ()=> {
    // will run at the begining
    const getData = async() =>{
      // if there is data
      try {
            const response = await fetch(endpoint, { mode: "cors"});
            const data = await response.json();

            console.log("inside use effect");
            console.log(data);

            setInformation(data);
            setStatus(1);
      }
      catch {
        // handel error
             console.log("ther is an error");
             setStatus(2);
      }
    };
    getData();

  }, []);
  // Render component using map
  const Details = information.map((item) => {
    return <Detail key={item.id} data={item} />;
  });

return (
  <div className="home-page">
    <Header/ >
     
        <h2> Parcels:</h2>
          <section className="container">
           { status === 0 ? <p> Loading..  </p>: null}
           { status === 1 ? [Details]  : null }
           { status === 2 ? <p> Sorry! the data is unavailable </p> : null }
          </section>
  </div>
);
}