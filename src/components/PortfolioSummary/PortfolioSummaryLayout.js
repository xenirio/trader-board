import React from 'react';
import styles from './PortfolioSummary.module.css';

const PortfolioSummaryLayout = ({ children }) => {
  return (
    <div className={styles.portfolioSummaryLayout}>
      {children}
    </div>
  );
};

export default PortfolioSummaryLayout;