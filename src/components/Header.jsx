import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ color }) {
  const linkStyle = {
    color: color === 'white' ? 'white' : '#dc828e',
    textDecoration: 'none',
  };

  return (
    <Container className="header pb-5 pb-5 mt-3">
      <Link to="/" style={linkStyle} className="header-link px-2">
        Home
      </Link>
      <Link to="/contact" style={linkStyle} className="header-link px-2">
        Contact
      </Link>
      <Link to="/privacy" style={linkStyle} className="header-link px-2">
        Privacy Policy
      </Link>
    </Container>
  );
}

export default Header;
