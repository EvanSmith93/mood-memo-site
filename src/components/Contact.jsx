import React, { useState } from 'react';
import Header from './Header';

function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendEmail = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(`Message sent through the website.\n\n${message}`);
    window.location.href = `mailto:moodmemofeedback@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div className="contact-page">
      <div className="form">
        <Header color="pink" />
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={subject} onChange={handleSubjectChange} />
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
