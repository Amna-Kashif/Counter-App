
import React from 'react'
import { useState } from "react";
import './App.css'



const App = () => {
  const [num, setNum] = useState(0) 
  return (
    <div className="container">
    <h1 className="heading">Count: {num}</h1>
    <div className="button-container">
      <button onClick={() => setNum(num + 1)} className="button">Increment</button>
      <button onClick={() => setNum(num - 1)} className="button">Decrement</button>
    </div>
  </div>
  )
}

export default App
