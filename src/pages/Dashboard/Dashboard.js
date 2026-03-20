import React from 'react';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import './Dashboard.css'; // Assuming Dashboard has its own CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Assuming there's a header component here already */}
      <WelcomeSection />
      {/* Other dashboard content will go here */}
      <h2>Your Dashboard Content</h2>
      <p>This is where your trading data and tools will be displayed.</p>
    </div>
  );
};

export default Dashboard;
