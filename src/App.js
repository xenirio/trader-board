import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLandingPage from './components/DashboardLandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
