import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Fad from '../fad/fad'
import Decade from '../decade/decade';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
