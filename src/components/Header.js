import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <h1>Trader Board</h1>
            <nav>
                {/* Placeholder for navigation bar */}
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
