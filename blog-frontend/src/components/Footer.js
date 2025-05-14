// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  position: 'relative',
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundColor: '#343a40',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
  zIndex: 100,
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',  // Add some padding for spacing
};

const footerLeftStyle = {
  flex: 1,
  textAlign: 'left',
};

const footerCenterStyle = {
  flex: 1,
  textAlign: 'center',
};

const footerRightStyle = {
  flex: 1,
  textAlign: 'right',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={footerContentStyle}>
        {/* Left Side - Terms & Conditions */}
        <div style={footerLeftStyle}>
          <Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link>
        </div>
        
        {/* Center - Copyright */}
        <div style={footerCenterStyle}>
          <p className="mb-0">&copy; 2025 My Blog. All rights reserved.</p>
        </div>
        
        {/* Right Side - Privacy Policy */}
        <div style={footerRightStyle}>
          <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
