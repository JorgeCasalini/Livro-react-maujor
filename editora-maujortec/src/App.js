import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from './components/Topo.js'
import Home from './components/Home.js';
import Catalogo from './components/Catalogo.js';
import Frontend from './components/Frontend.js';
import NotFound from './components/NotFound.js';
import Rodape from './components/Rodape.js';
import "./index.css"
import Programacao from './components/Programacao.js';
import Design from './components/Design.js';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/frontend" element={<Frontend />} />
            <Route exact path="/programacao" element={<Programacao />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/catalogo" element={<Catalogo />} />
            <Route element={<NotFound />}/>
          </Routes>
        </>
      </Router>
    )
  }
}

export default App;
