import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Axios from "axios";

//IMPORTING ALL THE COMPONENTS 
import Header  from './Components/Header'
import Homepage from './Components/HomePage'
import Login from './Components/Login'

import ForParent from './Components/ForParents/ForParents'
import ForNannies from './Components/ForNannies/ForNannies'
import ParentsForm from './Components/ForParents/ParentsForm'
import NanniesForm from './Components/ForNannies/NanniesForm'
import NanniesAccount from './Components/ForNannies/NanniesAccount'
import ParentsAccount from './Components/ForParents/ParentsAccount'

export default function App() {
return (
    <>
    <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Homepage" component={Homepage} />
            <Route path="/ForParent" component={ForParent} />
            <Route path="/ForNannies" component={ForNannies} />
            <Route path="/ParentsForm" component={ParentsForm} />
            <Route path="/NanniesForm" component={NanniesForm} />
            {/* <Route path="/NanniesAccount" component={NanniesAccount} />
            <Route path="/ParentsAccount" component={ParentsAccount} /> */}
            <Route path="/login" component={Login} />
          </Switch>
        </div>
  
    </BrowserRouter>
  </>
);
}