import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <Route exact path="/TrilogyHomework19" component={Home} />
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
