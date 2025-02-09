import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Topo from './components/Topo.js';
import Principal from './components/Principal.js';
import Rodape from './components/Rodape.js';

const App = () => {
  return (
    <>
      <Topo />
      <Principal />
      <Rodape />
    </>
  );
}

export default App;
