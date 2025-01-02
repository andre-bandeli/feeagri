import React from 'react';
import Navbar from './Navbar'; 


export default function Header() {
  return (
    <div>
        <header className="header">
        {/* <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div> */}
      <Navbar /> 
    </header>
    </div>

  );
}