import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Routes } from "react-router";

import './App.css'
import RecipeLogo from '/src/assets/recipe-logo.png'
//import { BrowserRouter } from "react-router";
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import About from './pages/About';
import NavBar from "./components/NavBar";


function App() {
  
  return (
    <>
{/* <HomePage/>
      <h1>Recipe Finder</h1>
      <img className={RecipeLogo} src= "./src/assets/recipe-logo.png " alt="Recipe-Logo" />
      <p className="read-the-docs">
        Hasitha's Recipe Finder
      </p>
      */}

      <Router>
        <NavBar/>
        <div className="container-main">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/about" element={<About/>} />

          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
