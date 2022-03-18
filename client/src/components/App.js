import './App.css';
import { Switch, Route } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

import NavigationBar from './Navbar/Navbar';
import Landing from './Landing/Landing';
import Documents from './Documents/Documents';
import CreateDocument from './Documents/createDocument';
import { Navbar, Container, Nav } from "react-bootstrap"
import Register from './Register/Register';
import Login from './Login/Login';
import Notes from './Notes/Notes';
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
				<NavigationBar />

				<Switch>
					<Route exact path = "/" ><Landing /></Route>
					<Route component = {Documents} path="/documents" />
					<Route component = {CreateDocument} path="/createDocument" />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/notes" component={Notes} />

				</Switch>
				
			</div>
				
							
	);
}

export default App;