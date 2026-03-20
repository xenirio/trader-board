import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = ({ title, description }) => {
  return (
    <section className="welcome-section">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default WelcomeSection;