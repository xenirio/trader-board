import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer'; // Import the Footer component

function App() {
  return (
    <div className="App">
      {/* Other components and content of your App */}
      <main style={{ flex: 1 }}>
        <h1>Welcome to Trader Board</h1>
        <p>Your trading dashboard</p>
      </main>
      <Footer /> {/* Integrate the Footer component */}
    </div>
  );
}

export default App;