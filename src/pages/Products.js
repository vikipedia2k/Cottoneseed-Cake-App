import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={productPageStyle}>
      <h2 style={pageTitleStyle}>Buy Cottonseed Cake</h2>
      <div style={productsGridStyle}>
        {products.map(product => (
          <div key={product._id} style={productCardStyle}>
            <img 
              src={product.imageUrl || 'https://source.unsplash.com/400x300/?cotton,seed'} 
              alt={product.name} 
              style={productImageStyle} 
            />
            <h3 style={productTitleStyle}>{product.name}</h3>
            <p style={productPriceStyle}>₹{product.price} per kg</p>
            <Link to={`/checkout?product=${product._id}`} style={buyNowLinkStyle}>Buy Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const productPageStyle = {
  textAlign: 'center',
  padding: '50px 20px',
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
};

const pageTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '40px',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
};

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};

const productCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
};

const productCardHoverStyle = {
  transform: 'scale(1.05)',
};

const productImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '15px',
  transition: 'opacity 0.3s ease',
};

const productTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#333',
};

const productPriceStyle = {
  fontSize: '1.2rem',
  color: '#4CAF50',
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
  transition: 'background-color 0.3s ease',
};

export default Products;
