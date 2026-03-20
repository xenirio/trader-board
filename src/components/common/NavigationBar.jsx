import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../../styles/components/NavigationBar.module.css';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'; // Assuming react-icons for icons

const NavigationBar = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return `${styles.navLink} ${location.pathname === path ? styles.navLinkActive : ''}`;
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>TraderBoard</div>

      <div className={styles.navLinks}>
        <NavLink to="/dashboard" className={getNavLinkClass('/dashboard')}>
          Dashboard
        </NavLink>
        <NavLink to="/markets" className={getNavLinkClass('/markets')}>
          Markets
        </NavLink>
        <NavLink to="/portfolio" className={getNavLinkClass('/portfolio')}>
          Portfolio
        </NavLink>
        <NavLink to="/watchlist" className={getNavLinkClass('/watchlist')}>
          Watchlist
        </NavLink>
      </div>

      <div className={styles.iconGroup}>
        <div className={styles.icon}>
          <FaSearch />
        </div>
        <div className={styles.icon}>
          <FaBell />
          <span className={styles.notificationBadge}></span> {/* Placeholder for notification badge */}
        </div>
        <div className={styles.icon}>
          <FaUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
