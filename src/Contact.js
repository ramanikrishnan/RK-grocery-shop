import React from 'react';
import './Contect.css';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            required 
          />
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            required 
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;