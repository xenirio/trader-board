import React from 'react';

const MarketSummaryCard = ({ ticker, price, change24h }) => {
  const changeColorClass = change24h >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="flex-none w-64 p-4 m-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700/[0.5] rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white">{ticker}</h3>
      <p className="text-3xl font-bold text-white my-2">${price.toFixed(2)}</p>
      <p className={`text-lg ${changeColorClass}`}>{change24h.toFixed(2)}%</p>
    </div>
  );
};

export default MarketSummaryCard;
