import React, { useState, useRef } from 'react';
import "./Landing.css"
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar'
import Laptop from "../../static/images/laptop.jpg"
import { Container, Nav } from 'react-bootstrap';

export default function Landing() {
    return (
        
        <div>
            
            <div id = "info">
                <h2>Welcome to a new era of medical communication.</h2>
                <div class="container">
                    <img src= {Laptop} id = "bigPicture" alt="Doctor Using Laptop"></img>
                </div>
            </div>
            <div class="row text-center"> 
                <h3> Have all your medical documents in one place.</h3>
               
            </div>
        </div>
    )

}
