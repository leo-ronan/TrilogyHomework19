import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Home from "./Home.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Home exact path="/TrilogyHomework19/" />
    </Router>
  );
}

export default App;
