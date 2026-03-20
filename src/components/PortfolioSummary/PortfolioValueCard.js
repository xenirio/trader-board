import React from 'react';
import styles from './PortfolioSummary.module.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const PortfolioValueCard = () => {
  const totalValue = 123456.78; // Placeholder value
  const percentageChange = 1.25; // Placeholder value
  const isPositive = percentageChange >= 0;

  return (
    <div className={styles.portfolioValueCard}>
      <h2 className={styles.cardTitle}>Portfolio Value</h2>
      <div className={styles.totalValue}>${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      <div className={`${styles.percentageChange} ${isPositive ? styles.positive : styles.negative}`}>
        {isPositive ? <FaArrowUp /> : <FaArrowDown />}
        {Math.abs(percentageChange).toFixed(2)}%
      </div>
      <a href="#" className={styles.viewDetailsButton}>View Details</a>
    </div>
  );
};

export default PortfolioValueCard;