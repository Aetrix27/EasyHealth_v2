import { React, useEffect, useState } from 'react';

import authService from "../../services/auth-service";
import { Link, useHistory } from 'react-router-dom';

function Login() {

  var history = useHistory();
    const [loginUsername, setUsername] = useState('');
    const [loginPassword, setPassword] = useState('');
    // create react references to username and password input elements
    //var loginUsername = React.createRef();
    //var loginPassword = React.createRef();
  
    // declare function to login user on submit
    //var loginUser = loginUser.bind(this);
  
    // takes current values of inputted username and password and submits it to the backend through auth-services
    const loginUser = () => {
      history.push('/');

      authService.login(loginUsername, loginPassword)
      console.log(`Username: ${loginUsername} \nPassword: ${loginPassword}`)
    }


  return (
      <div>
      <h1>Login</h1>    
          <form>
          <label for="loginUsername"> Username: </label>
      <br />

      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <br />
      <label for="loginPassword"> Password: </label>
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />

              <input type="button" value="Submit" onClick={() => loginUser(loginUsername, loginPassword)}></input>
          </form>
      </div>
  );
  
}

export default Login