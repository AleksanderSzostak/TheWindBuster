import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <img src="src/assets/bot.png" id="bot" />
        <div id="wybieranieDiv">
        <input id="wybieranie" class="sterowanie" type="range" name="wybranie"></input>
        <br></br>
        <br></br>
        <br></br>
        <label id="wybieranielabel" htmlFor='wybranie'>Wybieranie</label>
        </div>
        <div id="katNatarciaDiv">
        <input id="katNatarcia" class="sterowanie" type="range" name="katNatarcia"></input>
        <br></br>
        <br></br>
        <br></br>
        <label id="katNatarcialabel"  htmlFor='katNatarcia'>Kąt natarcia</label>
        </div>

       </div>
    </>
  )
}

export default App
