import React, { Component } from 'react';


import GoogleLogin from 'react-google-login';

class Login extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      


      <GoogleLogin
        clientId="46635325496-p0s45m08iths3of0a1qfvmh778bj06na.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    );
  }
}

export default Login;
