import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const div = document.getElementById('wholeWind');

    const getCurrentRotation = (element) => {
    const style = getComputedStyle(element);
    const matrix = new DOMMatrix(style.transform);
    return Math.round(Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI));
  };

  const rotateDiv = (targetRotation) => {

    const currentRotation = getCurrentRotation(div);
    console.log(div.style.rotate.valueOf);


    const keyframes = `
        @keyframes rotateAnimation {
            0% {
                transform: translate(-50%, -50%) rotate(${currentRotation}deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(${targetRotation}deg);
            }
        }
    `;

 
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);


    div.style.animation = `rotateAnimation 1s forwards`; // 
    div.style.transform = `translate(-50%, -50%) rotate(${targetRotation}deg)`;

  };
  let windAngle = 0;
  const windTimer = () =>{
    if(windAngle+45 == 90){
      windAngle += 90;
    }
    else if(windAngle+45 >325){
      windAngle = 0;
    }
    else{
      windAngle += 45;
    }
    rotateDiv(windAngle);
    
  };

  const intervalId = setInterval(windTimer, 4000);


    }, []);


  return (
    <>
    
      <div id="main">
        <img src="src/assets/bot.png" id="bot" />
        <div id="wholeWind">
        <img id="wind1" className="wind" src="src/assets/wind.gif"></img>
        <br></br>
        <img id="wind2" className="wind" src="src/assets/wind.gif"></img>
        </div>

        <div id="katNatarciaDiv">
        <input id="katNatarcia" className="sterowanie" type="range" name="katNatarcia"></input>
        <button id="btn"></button>
        <br/>
        <br/>
        <br/>
        <label id="katNatarcialabel"  htmlFor='katNatarcia'>Kąt natarcia</label>
        </div>

        
       </div>

       
    </>
  )

}

export default App

