import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    // Add your login logic here
    navigate('/products'); // Navigate to the products page after login
  };
  return (
<div className="login-page">
<div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      {/* </div>
      <div>
        <br /> */}
      <p>
        New User? <Link to="/signup">Sign Up</Link>
      </p>
      </div>
    </div>
  );
};

export default Login;
