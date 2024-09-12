// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Si vas a usar react-router para la navegación.

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <h1>Gimnasio Atila</h1>
      <nav>
        <Link to="/" style={{ margin: '10px', color: 'white' }}>Inicio</Link>
        <Link to="/about" style={{ margin: '10px', color: 'white' }}>Acerca de Nosotros</Link>
        <Link to="/shop" style={{ margin: '10px', color: 'white' }}>Tienda</Link>
      </nav>
    </header>
  );
};

export default Header;
