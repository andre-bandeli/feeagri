import React, { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/coneegri">Coneeagri</a></li>
            <li><a href="/parceiros">Parceiros</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;