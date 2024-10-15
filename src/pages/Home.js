import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1>Welcome to CottonSeed Cake Market</h1>
      <p>Your trusted source for high-quality cottonseed cake for farming.</p>
      <img src="https://via.placeholder.com/800x400?text=Cottonseed+Cake" alt="Cotton Seed" style={imageStyle} />
      <Link to="/products" style={buttonStyle}>
        Browse Products
      </Link>
    </div>
  );
};

const homeStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

const imageStyle = {
  width: '80%',
  borderRadius: '10px',
  marginTop: '20px',
};

const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  marginTop: '20px',
  fontSize: '18px',
};

export default Home;
