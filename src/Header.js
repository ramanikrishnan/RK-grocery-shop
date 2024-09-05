import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://content.jdmagicbox.com/comp/alappuzha/t6/0477px477.x477.210905220021.y7t6/catalogue/rk-silks-charummoodu-alappuzha-readymade-garment-retailers-9ya99sj2gg.jpg" alt="Logo" className="logo-icon" />            
      <h1> RK Grocery Shop</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
