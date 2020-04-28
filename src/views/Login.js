import React, { useState, useEffect} from 'react';
import { signInWithGoogle, auth } from "../config/firebase"
import axios from 'axios';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";


const Login = (setAuthorizeAccess) => {

  const [idToken, setIdToken] = useState(null)
  const [userId, setUserId] = useState(null)

  function signIn() {
    signInWithGoogle()
  }

  function signOut() {
    auth.signOut()
  }

  useEffect(() => {
    /*
     *
     * We save the id token using state for the sake of updating our React app
     * and for convenience. 
     * 
     * By accessing the token using getIdToken, we don't have to worry about
     * storing it in localStorage or worrying about it expiring. 
     * 
     * 
     */
    auth.onAuthStateChanged(async nextUser => {
      console.log("currentUser changed to:", nextUser)
      if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        //checkauth
        axios({
          method: 'get',     //put
          url: `http://127.0.0.1:8080/verify/user`,
          headers: {'Authorization': 'Bearer ' + token}, 
        }).then(response => {
          if (response.status == 200) {
            setIdToken(idToken);
            setUserId(response.data);
            setAuthorizeAccess(true);
          }
        }).catch(error => {
          console.log(error);
        });
      } else {
        setIdToken(null)
        setUserId(null)
      }
    })
  }, [userId])

    return (
      <div className="App">
      <p>{auth.currentUser ? auth.currentUser.displayName + " is signed in" : "Please sign in"}</p>
      <button onClick={signIn}>Sign in with Google</button>
      <button onClick={signOut}>Sign me out</button>

      <p>The ID token is:</p>
      <code>{auth.currentUser ? userId : "Please sign in"}</code>
    </div>
    );
  }

export default Login;
