import React, { useState, useEffect} from 'react';
import { signInWithGoogle, auth } from "../config/firebase"
import axios from 'axios';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import { useSelector, useDispatch } from "react-redux";
import { login } from "redux/actions/auth";

export default function Login(props) {

  const [idToken, setIdToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const dispatch = useDispatch();

  function signIn() {
    signInWithGoogle()
  }
  
  useEffect(() => {
    auth.onAuthStateChanged(async nextUser => {
     // console.log(nextUser)
      if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
      //  dispatch(login(token))
        //checkauth
        axios({
          method: 'get',     //put
          url: `https://userservice-278719.uc.r.appspot.com/verify/user`,
          headers: {'Authorization': 'Bearer ' + token}, 
        }).then(response => {
          if (response.status == 200) {
            setIdToken(idToken);
            setUserId(response.data);
            dispatch(login(userId))
          }
        }).catch(error => {
          console.log(error);
        });
      } else {
        setIdToken(null)
        setUserId(null)
        dispatch(login(null))
      }
    })
  }, [userId])

    return (
      <div className="App">
      <button onClick={signIn}>Sign in with Google</button>
      <p>{auth.currentUser ? userId : "Please sign in"}</p>
    </div>
    );
  }

