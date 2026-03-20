import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection = ({ heading, description }) => {
  return (
    <section className={styles.welcomeSection}>
      <h1>{heading}</h1>
      <p>{description}</p>
    </section>
  );
};

export default WelcomeSection;