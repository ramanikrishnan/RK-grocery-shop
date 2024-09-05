import React from 'react';
import Login from './Login';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to RK Grocery Shop</h2>
      <p>Your one-stop shop for all your grocery needs.</p>
      <Login />
    </div>
  );
};

export default Home;
