import React from "react";

import { UserSession } from "blockstack";

import { appConfig } from "../config/constants";

const Landing = props => {

    const userSession = new UserSession(appConfig);

    const signIn = (e) => {
        e.preventDefault();
        userSession.redirectToSignIn();
    }

    return (
        <div>
            <div>
                <h1>Blockstack Boilerplate</h1>
                <button onClick={e => signIn(e)}>Sign In With Blockstack</button>
            </div>
        </div>
    )
}

export default Landing;