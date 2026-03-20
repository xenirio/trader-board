import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import assetData from '../../data/mockAssetData';
import './AssetAllocationChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const AssetAllocationChart = () => {
  return (
    <div className="asset-allocation-chart-container">
      <h3>Asset Allocation</h3>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart layout="vertical" data={assetData} stackOffset="expand">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip content={<CustomTooltip />} />
          {assetData.map((entry, index) => (
            <Bar key={`bar-${index}`} dataKey="percentage" stackId="a" fill={entry.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        {assetData.map((entry, index) => (
          <div key={`legend-${index}`} className="legend-item">
            <span className="legend-color-box" style={{ backgroundColor: entry.color }}></span>
            <span className="legend-name">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetAllocationChart;