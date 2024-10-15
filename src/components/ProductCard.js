// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <img src={product.imageUrl} alt={product.name} style={imageStyle} />
      <h3>{product.name}</h3>
      <p>₹{product.price} per kg</p>
      <Link to={`/checkout?product=${product._id}`} style={buyNowLinkStyle}>Buy Now</Link>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '15px',
};

const buyNowLinkStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
  cursor: 'pointer',
};

export default ProductCard;
