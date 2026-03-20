import React from 'react';
import WatchlistTable from '../components/WatchlistTable'; // Import the new component

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Other dashboard content can go here */}
            <WatchlistTable /> {/* Integrate the WatchlistTable component */}
        </div>
    );
};

export default Dashboard;