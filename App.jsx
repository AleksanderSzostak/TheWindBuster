import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="src/assets/bot.png" id="bot" />
        <svg
        className="w-20 h-100 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 24 24">
        <path
            fill='none'
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            d="M 1,-1 A 5,3 20 0 1 8,3"

        />
    </svg>

       </div>
    </>
  )
}

export default App
