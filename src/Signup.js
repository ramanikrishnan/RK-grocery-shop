import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert('Please fill out all fields');
      return;
    }
    // Add your signup logic here
    navigate('/'); // Navigate to the login page after signup
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
