import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect, useRef } from 'react';


function App() {
  let [count, setCount] = useState(0);
  var [rotation,setRotation]= useState(0);
  let [speed, setSpeed] = useState(10);
  const [direction, setDirection] = useState("up"); 
  useEffect(() => {
  setSpeed(1);
  setDirection("down");

    const main = document.getElementById("root");
    main.style.animationDuration = `${speed}s`;
    if (direction === "up") {
      main.style.animationName = "moveBackgroundUp";
    } else {
      main.style.animationName = "moveBackgroundDown";
    }





    const wholeWind = document.getElementById('wholeWind');

    const getCurrentRotation = (element) => {
    const style = getComputedStyle(element);
    const matrix = new DOMMatrix(style.transform);
    return Math.abs(Math.round(Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI)));
  };

  const rotateDiv = (targetRotation) => {


    wholeWind.style.transform = `translate(-50%, -50%) rotate(${targetRotation}deg)`;

  };
  const windTimer = () =>{
    let rotation =  getCurrentRotation(wholeWind);
    console.log("1 "+rotation);
    let direction;
    if(Math.random() <0.70){
      direction = 0;
    }else{
      direction = 1;
    }

    if(direction == 1){
      if(rotation == 0){
        rotation = 315;
      }else if(rotation == 135){
        rotation = 45;
      }else{
        rotation -=45;
      }
    }
    else{
      if(rotation == 315){
        rotation = 0;
      }else if(rotation == 45){
        rotation = 135;
      }else{
        rotation +=45;
      }
    }
    console.log("2 "+rotation);
    rotateDiv(rotation);
    
  };

  const intervalId = setInterval(windTimer, 4000);
  return () => clearInterval(intervalId);

    }, [speed, direction]);


  return (
    <>
    
      <div id="main">
        <div id="ship">
        <img src="src/assets/bot.png" id="bot" />
        <div id="sailflip"><img src="src/assets/zagiel.png" id="sail"/></div>
        </div>
        <div id="wholeWind">
        <img id="wind1" className="wind" src="src/assets/wind.gif"></img>
        <br></br>
        <img id="wind2" className="wind" src="src/assets/wind.gif"></img>
        </div>

        <div id="katNatarciaDiv">
       <input id="katNatarcia" className="sterowanie" type="range" min="-91" max="90" value={rotation} onChange={e => rotateSail(e.target.value)} name="katNatarcia"></input>
        <button id="btn"></button>
        <br/>
        <br/>
        <br/>
        <label id="katNatarcialabel"  htmlFor='katNatarcia'>Kąt natarcia</label>
        </div>

        
       </div>

       
    </>
  )
function rotateSail(value){
    setRotation(value)
    var sail= document.getElementById("sail");
    var sailbox=document.getElementById("sailflip");
    var workRotation=rotation;
    console.log(rotation);
    if(rotation<0){
      console.log("flip,dammit!")
     sailbox.style.transform="scaleY(-1)";
     sail.style.rotate=(-1*(rotation-90)+"deg");
     sail.style.top="44%";
    }
    else{
      sail.style.rotate=((rotation-90)+"deg");
      sailbox.style.transform="scaleY(1)";
       sail.style.top="49%";
    }
  }
}

export default App

