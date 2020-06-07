import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from "./config/firebase"
import axios from 'axios';
import { selectFirebaseToken } from 'redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Login from "views/Login";
import { createBrowserHistory } from "history";

const App = () => {
  const [authorizeAccess, setAuthorizeAccess] = useState(false);
  const userId = useSelector(selectFirebaseToken);
  const hist = createBrowserHistory();
  const defaultRoute = userId ? '/admin/dashboard' : '/';

  const setAuthorize = (prop) => {
    setAuthorizeAccess(prop);
    console.log(authorizeAccess);
  }
  useEffect(() => {
  }, [userId]);

  return (
    <Router history={hist}>
      <Switch>
        {
          userId
            ?
            <>
              <Router history={hist}>
                <Switch>
                  <Route path="/admin" render={props => <AdminLayout {...props} />} />
                  <Route path="/rtl" render={props => <RTLLayout {...props} />} />
                  <Redirect from="/" to="/admin/dashboard" />
                </Switch>
              </Router>
            </>
            : (
              <Route path="/">
                <Login />
              </Route>
            )
        }
        <Redirect to={defaultRoute} />
      </Switch>
    </Router>
  );
}

export default App;