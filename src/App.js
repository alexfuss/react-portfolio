import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home";
import Menu from "../src/components/Nav";

function App() {
  return (
    <div className="App">
      <Menu />
        <Home />
    </div>
  );
}

export default App;