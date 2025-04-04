import React, { useState, useRef } from 'react';
import "./Landing.css"
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar'
import Laptop from "../../static/images/laptop.jpg"
import { Container, Nav } from 'react-bootstrap';
import '../App.css';

export default function Landing() {
    return (
        
        <div>
            
            <div class="page-title text-center">
                <h2>Welcome to a new era of medical communication.</h2>
            </div>
            <div class="section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src= {Laptop} id = "bigPicture" alt="Doctor Using Laptop"></img>
            </div>
         
            <div class="row text-center section"> 
                <h3> Have all your medical documents in one place.</h3>
               
            </div>
        </div>
    )

}
