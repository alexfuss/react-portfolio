import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home";
import Nav from "../src/components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
        <Home />
    </div>
  );
}

export default App;
