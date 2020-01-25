import React, { useEffect } from 'react';
import Landing from './Landing';
import SignedIn from './SignedIn';
import { UserSession } from 'blockstack';

const  App = props => {

  const userSession = new UserSession();

  useEffect(() => {
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
        .then(userData => {
          if(!userData.username) {
            throw new Error("This app requires a username to be set")
          }
        })
    }
  }, [userSession])


  return (
    <div className="App">
      {userSession.isUserSignedIn() ? 
      <SignedIn/>
      :
      <Landing/>
      }
    </div>
  );
}

export default App;
