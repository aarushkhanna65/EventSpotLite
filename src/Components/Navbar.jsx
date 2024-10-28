import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1>EventSpot Lite</h1>
      <div className="theme-toggle">
      </div>
    </nav>
  );
};

export default Navbar;
