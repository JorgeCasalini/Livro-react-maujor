import React from "react";
import { NavLink } from "react-router-dom";

const Navegacao = () => {
  return (
    <ul>
      <li>
        <NavLink 
          to="/" 
          style={({ isActive }) => (isActive ? { color: "#027399" } : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/frontend" 
          style={({ isActive }) => (isActive ? { color: "#027399" } : undefined)}
        >
          Frontend
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/programacao" 
          style={({ isActive }) => (isActive ? { color: "#027399" } : undefined)}
        >
          Programação
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/design" 
          style={({ isActive }) => (isActive ? { color: "#027399" } : undefined)}
        >
          Design
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/catalogo" 
          style={({ isActive }) => (isActive ? { color: "#027399" } : undefined)}
        >
          Catálogo
        </NavLink>
      </li>
    </ul>
  );
};

export default Navegacao;
