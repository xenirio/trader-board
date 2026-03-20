import React from 'react';
import MarketSummaryCard from './MarketSummaryCard';

const mockData = [
  { ticker: 'BTC/USD', price: 60000.00, change24h: 1.5 },
  { ticker: 'ETH/USD', price: 3000.00, change24h: -2.1 },
  { ticker: 'SPX', price: 5200.50, change24h: 0.75 },
  { ticker: 'NASDAQ', price: 16200.25, change24h: 0.90 },
];

const MarketSummaryCardsContainer = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-4 sm:overflow-x-hidden">
      {mockData.map((data, index) => (
        <MarketSummaryCard key={index} {...data} />
      ))}
    </div>
  );
};

export default MarketSummaryCardsContainer;
