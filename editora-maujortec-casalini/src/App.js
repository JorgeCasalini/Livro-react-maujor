import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from './components/Topo.js'
import Home from './components/Home.js';
import Catalogo from './components/Catalogo.js';
import Frontend from './components/Frontend.js';
import Programacao from './components/Programacao.js';
import Design from './components/Design.js';
import NotFound from './components/NotFound.js';
import Rodape from './components/Rodape.js';
import "./index.css"
import Livro from './components/Livro';
import axios from 'axios';

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }

  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Frontend livros={this.state.livros} />} />
          <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route path="/design" element={<Design livros={this.state.livros} />} />
          <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route path="/livro/:livroSlug" element={<Livro livros={this.state.livros} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
