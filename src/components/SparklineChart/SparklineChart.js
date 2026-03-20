import React from 'react';
import styles from './SparklineChart.module.css';

const SparklineChart = ({ data }) => {
  if (!data || data.length < 2) {
    return <div className={styles.sparklineContainer}>N/A</div>;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / (max - min)) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={styles.sparklineContainer}>
      <svg className={styles.sparklineSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={points}
        />
      </svg>
    </div>
  );
};

export default SparklineChart;