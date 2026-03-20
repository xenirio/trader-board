import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Footer from '../../components/Footer/Footer';

const DashboardLandingPage = () => {
  return (
    <DashboardLayout>
      <div>
        <h1>Welcome to Trader Board</h1>
        <p>This is your main dashboard landing page.</p>
      </div>
      <Footer />
    </DashboardLayout>
  );
};

export default DashboardLandingPage;