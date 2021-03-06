import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ParentContext from "./ParentContext";
import Axios from "axios";

//IMPORTING ALL THE COMPONENTS 
import Header  from './Components/Header'
import Homepage from './Components/HomePage'
import Login from './Components/Login'

import ForParents from './Components/ForParents/ForParents'
import ForNannies from './Components/ForNannies/ForNannies'
import RegisterParent from './Components/ForParents/RegisterParent'
import RegisterNannies from './Components/ForNannies/RegisterNanny'
import NanniesAccount from './Components/ForNannies/DisplayNannies'
import SearchNannies from './Components/ForNannies/SearchNannies'



// import ParentsAccount from './Components/ForParents/ParentsAccount'

export default function App() {

  const [parentData, setParentData] = useState ({
    token : undefined,
    parent : undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/parent/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const parentRes = await Axios.get("http://localhost:5000/parent/", {
          headers: { "x-auth-token": token },
        });
        setParentData({
          token,
          parent: parentRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
      <>
      <BrowserRouter>
        <ParentContext.Provider value ={{parentData, setParentData}} >
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/Homepage" component={Homepage} />
              <Route path="/ForParents" component={ForParents} />
              <Route path="/ForNannies" component={ForNannies} />
              <Route path="/RegisterParent" component={RegisterParent} />
              <Route path="/RegisterNannies" component={RegisterNannies} />
              <Route path="/login" component={Login} />
              <Route path="/displaynannies" component={NanniesAccount} />
              <Route path="/searchnannies" component={SearchNannies} />

            </Switch>
          </div>
        </ParentContext.Provider>
      </BrowserRouter>
    </>
  );

}