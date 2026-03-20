
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = "1.0.0"; // Placeholder, can be dynamically fetched

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Trader Board. All rights reserved.</p>
      <p>Version: {version}</p>
    </footer>
  );
};

export default Footer;
