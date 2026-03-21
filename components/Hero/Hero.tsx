import React from 'react';
import styles from './Hero.module.css';

export interface HeroProps {
  headline: string;
  subtext: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subtext, buttonText, onButtonClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>{headline}</h1>
      <p className={styles.subtext}>{subtext}</p>
      <button className={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Hero;
