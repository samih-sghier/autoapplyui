import React, { useState, useEffect} from 'react';
import { signInWithGoogle, auth } from "./config/firebase"
import axios from 'axios';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Login from "views/Login";
import { createBrowserHistory } from "history";
import PublicRoute from "./PublicRoute"

const App = () => {
  const [authorizeAccess, setAuthorizeAccess] = useState(false);

  const hist = createBrowserHistory();
  
  const setAuthorize = (prop) => {
    setAuthorizeAccess(prop);
    console.log(authorizeAccess);
  }
  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      authorizeAccess ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
    )} />
  )

  return (
      // <Login setAuthorizeAccess = {setAuthorize}></Login>
      <Router history={hist}>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/signin" exact />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/rtl" render={props => <RTLLayout {...props} />} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Switch>
    </Router>
  );
}

export default App;