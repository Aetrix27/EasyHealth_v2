import './App.css';
import { Switch, Route } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

//import NavigationBar from './components/Navbar/NavigationBar';
import Landing from './Landing/Landing';
//import Document from './components/Documents/Documents';
//import CreateDocument from './components/Documents/createDocument';
import { Navbar, Container, Nav } from "react-bootstrap"
//import Register from './components/Register/Register';
//import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';


/*
				<NavigationBar />
	<Route component = {Landing} exact path="/" />
				<Route component = {Documents} path="/documents" />
				<Route component = {CreateDocument} path="/createCard" />
                <Route path="/register" component={Register} />
				<Route path="/login" component={Login} />

*/

function App() {
	return (
			<div id = "App">

				<Switch>
					<Route exact path = "/" ><Landing /></Route>
					
				</Switch>
				
				
			</div>
			
	);
}

export default App;