import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Home from "./components/Home.js";

function App() {
  return (
    <div>
        <Navbar />
        <Route exact path="/TrilogyHomework19/" component={Home} />
    </div>

  );
}

export default App;
