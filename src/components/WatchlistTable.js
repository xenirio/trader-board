import React from 'react';
import styles from '../styles/WatchlistTable.module.css';

const WatchlistTable = () => {
    const watchlistData = [
        { symbol: 'BTC', name: 'Bitcoin', price: '$60,000', change: '+2.50%', volume: '$30B', marketCap: '$1.2T' },
        { symbol: 'ETH', name: 'Ethereum', price: '$4,000', change: '+1.80%', volume: '$15B', marketCap: '$480B' },
        { symbol: 'BNB', name: 'Binance Coin', price: '$500', change: '-0.50%', volume: '$5B', marketCap: '$80B' },
        { symbol: 'ADA', name: 'Cardano', price: '$1.50', change: '+3.10%', volume: '$2B', marketCap: '$50B' },
        { symbol: 'XRP', name: 'Ripple', price: '$0.80', change: '-1.20%', volume: '$1B', marketCap: '$40B' },
    ];

    return (
        <div className={styles.card}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Volume</th>
                        <th>Market Cap</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {watchlistData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.symbol}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td className={item.change.startsWith('+') ? styles.positiveChange : styles.negativeChange}>{item.change}</td>
                            <td>{item.volume}</td>
                            <td>{item.marketCap}</td>
                            <td><span className={styles.starIcon}>&#9733;</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WatchlistTable;