import React from "react";

import { UserSession } from "blockstack";

import { appConfig } from "../config/constants";

const SignedIn = props => {

    const userSession = new UserSession({appConfig});

    const handleSignOut = (e) => {
        e.preventDefault();
        userSession.signUserOut(window.location.origin)
    }

    return(
        <div>
            <h1>{userSession.loadUserData().username}</h1>
            <button onClick={e => handleSignOut(e)}>Sign Out</button>
        </div>
    )
}


  
  export default SignedIn;

