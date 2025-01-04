import React, { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/coneegri">Coneeagri</a></li>
          <li><a href="/membros">Membros</a></li>
          <li><a href="/parceiros">Parceiros</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <div className="close-icon">✕</div> // Ícone de "X"
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
