import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [paymentOption, setPaymentOption] = useState('payNow');

  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('product');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [productId]);

  const handleOrder = () => {
    console.log('Order placed with payment option:', paymentOption);
  };

  return (
    <div style={checkoutStyle}>
      {product ? (
        <div style={checkoutCardStyle}>
          <h3>Checkout: {product.name}</h3>
          <img 
            src={`https://source.unsplash.com/400x300/?cotton,seed`} 
            alt={product.name} 
            style={productImageStyle} 
          />
          <p>Price: ₹{product.price} per kg</p>
          <label>
            <input
              type="radio"
              value="payNow"
              checked={paymentOption === 'payNow'}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
            Pay Now
          </label>
          <label>
            <input
              type="radio"
              value="payLater"
              checked={paymentOption === 'payLater'}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
            Buy Now, Pay Later (BNPL)
          </label>
          <button onClick={handleOrder} style={orderButtonStyle}>Place Order</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

const checkoutStyle = {
  textAlign: 'center',
  padding: '50px 20px',
};

const checkoutCardStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const productImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '20px',
};

const orderButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  marginTop: '20px',
  cursor: 'pointer',
};

export default Checkout;
