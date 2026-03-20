
import React from 'react';
import Link from 'next/link';
import MobileMenu from '../Navigation/MobileMenu'; // Import the new MobileMenu component

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900 dark:text-white">
          <Link href="/">
            TraderBoard
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/trade" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Trade
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Component - Visible on mobile */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
