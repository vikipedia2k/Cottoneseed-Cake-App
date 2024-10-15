// src/components/Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Button;
