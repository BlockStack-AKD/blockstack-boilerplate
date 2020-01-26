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
        <div data-testid="signedinTestID">
            <div>
                <h1>{userSession.isUserSignedIn() ? userSession.loadUserData().username : 'No User' }</h1>
                <button onClick={e => handleSignOut(e)}>Sign Out</button>
            </div>
        </div>
    )
}


  
  export default SignedIn;

