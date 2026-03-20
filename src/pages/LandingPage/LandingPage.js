import React from 'react';
import Header from '../../components/Header/Header';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        {/* Main content of the landing page */}
        <h2>Welcome to Trader Board</h2>
        <p>Your ultimate platform for trading insights.</p>
      </main>
    </div>
  );
}

export default LandingPage;