// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Cottonseed Cake. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  marginTop: '50px',
  textAlign: 'center',
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
};

export default Footer;
