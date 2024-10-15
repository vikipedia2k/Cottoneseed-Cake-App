// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}><Link to="/">Home</Link></li>
        <li style={navItemStyle}><Link to="/products">Products</Link></li>
        <li style={navItemStyle}><Link to="/about">About</Link></li>
        <li style={navItemStyle}><Link to="/contact">Contact</Link></li>
        <li style={navItemStyle}><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  padding: '10px',
  color: '#fff',
};

export default Navbar;
