import './App.css';
import { Routes, Route } from 'react-router-dom';
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

				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route element={<Documents />} path="/documents" />
					<Route element={<CreateDocument />} path="/createDocument" />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/notes" element={<Notes />} />

				</Routes>
				<footer class="container-fluid footer footer-main">
					<div class="row text-white">
						2025 David Guerrero
					</div>
				</footer>
			</div>
				
							
	);
}

export default App;