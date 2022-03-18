import React, { useState } from "react"

//import AuthService from "../../services/auth-service";
import Canvas from '../Canvas.js'
import './Notes.css'
import './draw.js'
//var user = AuthService.getCurrentUser();

const draw = context => {
var drawing = false;
var context;

window.onload = function()
{
    document.getElementById('buttonClear').addEventListener('click', function(){
            context.clearRect(0,0, context.canvas.width, context.canvas.height);       
    }, false);
    
    document.getElementById('buttonClear').addEventListener('click', function(){
            document.getElementById('myCanvas').style.display = "block";
            document.getElementById('saveArea').style.display = "none";
            document.getElementById('tools').style.display = "block";
            
        }, false);
    
    document.getElementById('lineWidth').addEventListener('change', function(){
            context.lineWidth = document.getElementById('lineWidth').value;
        }, false);
    
    document.getElementById('colorChange').addEventListener('change', function(){
            context.strokeStyle = document.getElementById('colorChange').value;
        }, false);
    
    document.getElementById('buttonSave').addEventListener('click', function(){
            document.getElementById('myCanvas').style.display = "none";
            document.getElementById('saveArea').style.display = "block";
            document.getElementById('tools').style.display = "none";
            
            var dataURL = document.getElementById('myCanvas').toDataURL();
            document.getElementById('canvasImg').src = dataURL;
        }, false);
    
    context = document.getElementById('myCanvas').getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight-60;
    
    //Mouse movement
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleDown;
    document.onmouseup = handleUp;
    
    //Style line
    context.strokeStyle = "#000";
    context.lineJoin = "round";
    context.lineWidth = 5;
    
    //Hide Save Area
    document.getElementById('saveArea').style.display = "none";
}

function handleMouseMove(e)
{
    console.log(e.clientX);
    console.log(e.clientY);
    if(drawing)
    {
      
        context.lineTo(e.clientX, e.clientY);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX, e.clientY);
    } else
    {
        context.moveTo(e.clientX, e.clientY);
    }
    
}

function handleDown(e)
{
    drawing = !drawing; 
    console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();
    
}

function handleUp()
{
    drawing = !drawing;
    console.log(drawing);
}



};

function Notes(){
  
  return (

    <div>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"></meta>
          <h2>New Note</h2>
            <Canvas draw={draw} height={100} width={100} />
            <script type="text/javascript" src="draw.js"></script>

            <div id='saveArea'>
              <img id = "canvasImg" />
              <button id = "buttonBack">Back</button>

            </div>
            <div id = "tools">
              <table>
                <tbody>
                    <tr>
                      <td><label for = "colorChange">Color: </label><input type = "color" id = "colorChange"/>
                      </td>
                      <td><label for = "lineWidth">Width:</label><input type = "range" id = "lineWidth" min = "1" max = "10" step = "1" /></td>
                      <td><button id = "buttonSave">Save</button><button id = "buttonClear">Clear</button></td>
                    </tr>
                  </tbody>
              </table>
            </div>
    
    </div>
  );
  
}

export default Notes