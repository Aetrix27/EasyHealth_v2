import { React, useEffect, useState } from 'react';

import authService from "../../services/auth-service";
import { Link, useHistory } from 'react-router-dom';

// page for registering a user account
function RegisterUser() {
    var history = useHistory();
    const [registerUsername, setUsername] = useState('');
    const [registerPassword, setPassword] = useState('');
    
    // create react references to username and password input elements
    //var registerUsername = React.createRef();
    //var registerPassword = React.createRef();

    // declare function to register user on submit
    //var registerUser = registerUser.bind(this);

  // takes current values of inputted username and password and submits it to the backend through auth-services
  const register = () => {
    history.push('/');

    const username = registerUsername; 
    const password = registerPassword;
    authService.register(username, password)
    console.log(`Username: ${username} \nPassword: ${password}`)
  }

    return (
        <div>
        <h1>Registration</h1>    
            <form>
            <label for="registerUsername"> Username: </label>
				<br />

				<input
					type="text"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				></input>
				<br />
				<label for="registerPassword"> Password: </label>
				<br />
				<input
        type="password"

					onChange={(e) => {
						setPassword(e.target.value);
					}}
				></input>
				<br />

                <input type="button" value="Submit" onClick={() => register(registerUsername, registerPassword)}></input>
            </form>
        </div>
    )
  
}

export default RegisterUser