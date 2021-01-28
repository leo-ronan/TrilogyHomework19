import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Home from "./components/Home.js";
import "./App.css";

function App() {
  return (
    <div>
        <Navbar />
        <Home />
    </div>

  );
}

export default App;
