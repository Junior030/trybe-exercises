import React from 'react';
import logo from './logo.svg';
import './App.css';

const compromissos = ['Trabalhar', 'Trybe', 'Estudar', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lista de Compromissos 
        </p>
        {compromissos.map((comp) => task(comp))}
      </header>
    </div>
  );
}

export default App;
