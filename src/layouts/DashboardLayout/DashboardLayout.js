import React from 'react';
import Footer from '../../components/Footer/Footer';
// Assume other imports and layout components are here

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content area */}
      <main style={{ flexGrow: 1, paddingBottom: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
