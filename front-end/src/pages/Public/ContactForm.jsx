import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/contact', { email, message });
      // Show success message or clear form
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
