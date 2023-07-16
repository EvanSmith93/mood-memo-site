import React, { useState } from 'react';
import Header from './Header';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Email: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:moodmemofeedback@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <div className="form">
        <Header color="pink" />
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button className="send-button" onClick={handleSendEmail}>Send Email</button>
      </div>
    </div>
  );
}

export default Contact;
