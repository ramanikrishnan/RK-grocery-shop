import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayNow = () => {
    navigate('/payment', { state: { total } });
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handlePayNow} className="pay-now-button">Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
