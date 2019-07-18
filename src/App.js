import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{process.env.NODE_ENV}</div>
        <h1>TEST BUILD</h1>
      </header>
    </div>
  );
}

export default App;
