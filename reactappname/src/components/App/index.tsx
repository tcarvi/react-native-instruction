import React, { Text } from 'react';
import { Component1 } from '../Component1';
import logo from '../../assets/logo.svg';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component1 />
        <Text>Viage rápido, ms com segurança.</Text>
      </header>
    </div>
  );
}

export default App;
