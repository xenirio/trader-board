import React from 'react';
import SparklineChart from './SparklineChart/SparklineChart';

const MarketSummaryCard = ({ market, data }) => {
  // Assume 'data' contains a 'priceTrend' array for the sparkline
  return (
    <div className="market-summary-card">
      <h3>{market.name}</h3>
      <p>Current Price: {market.price}</p>
      <div className="sparkline-container">
        <SparklineChart data={data.priceTrend} />
      </div>
    </div>
  );
};

export default MarketSummaryCard;