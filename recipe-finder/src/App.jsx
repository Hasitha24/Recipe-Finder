import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeLogo from '/src/assets/recipe-logo.png'
import Login from './MainLogin.jsx'

function App() {
  
  return (
    <>
     
      <h1>Recipe Finder</h1>
      <img className={RecipeLogo} src= "./src/assets/recipe-logo.png " alt="Recipe-Logo" />
      <p className="read-the-docs">
        Hasitha's Recipe Finder
      </p>
      <Login/>

    </>
  )
}

export default App
