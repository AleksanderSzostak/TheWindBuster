import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect, useRef } from 'react';

sessionStorage.setItem("speed",2);
sessionStorage.setItem("rotation",90);
sessionStorage.setItem("distance",0);

function App() {
 
  let [count, setCount] = useState(0);
  var [rotation,setRotation]= useState(0);
  let [speed, setSpeed] = useState(10);
  const [direction, setDirection] = useState("up"); 
  

  
  useEffect(() => {
    var speedVariable = document.getElementById("cssVariable");
    let rotateWindConvert;
   // const intervalId = setInterval(windTimer, 4000);
  setSpeed(10);
  setDirection("up");
  const main = document.getElementById("root");

    const gifUpdate = () => {
    main.style.animationDuration = `${sessionStorage.getItem("speed")}s`;
    if (direction === "up") {
      main.style.animationName = "moveBackgroundUp";
    } else {
      main.style.animationName = "moveBackgroundDown";
    }
  }




    const wholeWind = document.getElementById('wholeWind');
    const rotator = document.getElementById("rotator");
    const getCurrentRotation = (element) => {
    const style = getComputedStyle(element);
    const matrix = new DOMMatrix(style.transform);
    return Math.abs(Math.round(Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI)));
  };

  const rotateDiv = (targetRotation) => {


    wholeWind.style.transform = `translate(-50%, -50%) rotate(${targetRotation}deg)`;

  };

  rotator.style.visibility = "visible";
  const processTimer = () =>{
    let windRotationConverter = parseInt(rotator.style.zIndex) + 91;
 
    var winddir= getCurrentRotation(wholeWind);
    var dirdif=winddir - windRotationConverter;
    if(dirdif>0){
      dirdif=dirdif*-1
    }

   // console.log(dirdif);

    if(dirdif >-80 && dirdif<-40){
     // console.log("gitgut");
      if(sessionStorage.getItem("speed")>2){
      sessionStorage.setItem("speed",(sessionStorage.getItem("speed")-4));
      }
      else{
         sessionStorage.setItem("speed",1);
      }
    //  speedVariable.style.zIndex = parseInt(speedVariable.style.zIndex) - 8;
    }
    else{
      //console.log("gutgit");
        sessionStorage.setItem("speed",parseInt((sessionStorage.getItem("speed")))+1);
     // speedVariable.style.zIndex = parseInt(speedVariable.style.zIndex) - 8;
      }

    //console.log(sessionStorage.getItem("speed"));
    setSpeed(parseInt(sessionStorage.getItem("speed"))/4);

     if(rotator.style.visibility == "visible"){
      windTimer();
      rotator.style.visibility = "hidden";
     }
     else{
      rotator.style.visibility = "visible";
      
     }
     
    // console.log(sessionStorage.getItem("distance"));

     gifUpdate();
     sessionStorage.setItem("distance",parseInt((sessionStorage.getItem("distance")))+10-parseInt(sessionStorage.getItem("speed")));
     document.getElementById("distance").textContent = "Distance: "+sessionStorage.getItem("distance")+"m";
   };
  const windTimer = () =>{
    let rotation =  getCurrentRotation(wholeWind);

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
    rotateDiv(rotation);
    
  };
  const userTimer = setInterval(() => {

  })
  
 
  const processInterval = setInterval((processTimer), 2000);
  return () => {
   // clearInterval(intervalId);
    clearInterval(processInterval);
  }
 
 

    }, [speed, direction]);

 


  return (
    <>
    
      <div id="main">
      <h1 id="distance">Distance: 0m</h1>;
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
        <br/>
        <br/>
        <br/>
        <label id="katNatarcialabel"  htmlFor='katNatarcia'>Kąt natarcia</label>
        </div>

          <div id="rotator">

            <div id="cssVariable"></div>
          </div>
       </div>

       
    </>
  )
function rotateSail(value){
    setRotation(value)
    document.getElementById("rotator").style.zIndex = value;
    var sail= document.getElementById("sail");
    var sailbox=document.getElementById("sailflip");
    var workRotation=rotation;
   // console.log(rotation);
    if(rotation<0){
    //  console.log("flip,dammit!")
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

