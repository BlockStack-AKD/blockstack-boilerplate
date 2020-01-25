import React, { useState, useEffect } from "react";

import { UserSession } from "blockstack";

import { appConfig } from "../config/constants";

const SignedIn = props => {

    const userSession = new UserSession({appConfig});

    return(
        <div>
            <h1>{userSession.loadUserData().username}</h1>
        </div>
    )
}

export default SignedIn;