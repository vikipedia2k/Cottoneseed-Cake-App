import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
