//React core
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Parcel from "./component/templates/Parcel";
import HomePage from "./component/templates/Homepage";

import "./css/App.css"; 

export default function App()  {

  return (
    <Router>
     <div className="App">
       <Switch>
        <Route 
          path="/"  
          exact
          component={HomePage} 
        />
        <Route 
          path="/parcel"  
          exact
          component={Parcel} 
        />
       </Switch>
      </div>
    </Router>
  );
}