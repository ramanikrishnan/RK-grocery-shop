import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header';
import Home from './Home';
import Products from './products';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';
import Cart from './Cart';
import Payment from './Payment';
import './App.css'
import Footer from './Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
