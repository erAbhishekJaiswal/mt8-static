// src/pages/LiveMonitoring.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaChartLine, FaShieldAlt, FaSync, FaUserCheck, FaHistory } from 'react-icons/fa';

const LiveMonitoring = () => {
  const [tradeData, setTradeData] = useState([
    { id: 1, pair: 'EUR/USD', type: 'BUY', lot: 0.5, entry: 1.0850, current: 1.0875, profit: '+2.5%', time: '2 min ago' },
    { id: 2, pair: 'GBP/USD', type: 'SELL', lot: 0.3, entry: 1.2650, current: 1.2625, profit: '+1.8%', time: '5 min ago' },
    { id: 3, pair: 'XAU/USD', type: 'BUY', lot: 0.1, entry: 1980.50, current: 1985.75, profit: '+4.2%', time: '10 min ago' },
    { id: 4, pair: 'USD/JPY', type: 'SELL', lot: 0.4, entry: 148.50, current: 148.25, profit: '+1.2%', time: '15 min ago' },
  ]);

  const [stats, setStats] = useState({
    activeTrades: 12,
    winRate: 78,
    dailyProfit: 3.2,
    totalTrades: 145
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTradeData(prev => prev.map(trade => ({
        ...trade,
        current: trade.type === 'BUY' 
          ? (parseFloat(trade.current) + 0.0005).toFixed(4)
          : (parseFloat(trade.current) - 0.0005).toFixed(4),
        profit: trade.type === 'BUY'
          ? `+${(parseFloat(trade.profit) + 0.1).toFixed(1)}%`
          : `+${(parseFloat(trade.profit) + 0.05).toFixed(1)}%`
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-monitoring-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Live <span style={{ color: '#00ff88' }}>Trade Monitoring</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Complete transparency with real-time trade monitoring and full visibility
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { icon: <FaEye />, value: stats.activeTrades, label: 'Active Trades', color: '#00ff88' },
            { icon: <FaChartLine />, value: `${stats.winRate}%`, label: 'Win Rate', color: '#00ff88' },
            { icon: <FaShieldAlt />, value: `${stats.dailyProfit}%`, label: 'Daily Profit', color: '#ffd700' },
            { icon: <FaHistory />, value: stats.totalTrades, label: 'Total Trades', color: '#00ff88' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ textAlign: 'center' }}
            >
              <div style={{ color: stat.color, fontSize: '2rem', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ color: '#94a3b8' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Trades Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ marginBottom: '3rem', overflowX: 'auto' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem' }}>Live Trading Activity</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00ff88' }}>
              <FaSync className="pulse-animation" />
              <span>Live Updating</span>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Pair</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Type</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Lot Size</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Entry Price</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Current Price</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Profit/Loss</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: '#94a3b8' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {tradeData.map((trade) => (
                <tr key={trade.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{trade.pair}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      background: trade.type === 'BUY' ? '#00ff8820' : '#ff444420',
                      color: trade.type === 'BUY' ? '#00ff88' : '#ff4444',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {trade.type}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>{trade.lot}</td>
                  <td style={{ padding: '1rem' }}>{trade.entry}</td>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{trade.current}</td>
                  <td style={{ padding: '1rem', color: '#00ff88', fontWeight: 'bold' }}>{trade.profit}</td>
                  <td style={{ padding: '1rem', color: '#94a3b8' }}>{trade.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Features */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Transparency <span style={{ color: '#00ff88' }}>Features</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            {
              icon: <FaEye size={30} />,
              title: "Real-time Monitoring",
              description: "Watch your trades execute in real-time with live updates every second",
              features: ["Live price feeds", "Instant execution", "Real-time P&L"]
            },
            {
              icon: <FaUserCheck size={30} />,
              title: "Client Dashboard",
              description: "Access your personal dashboard with complete trading history",
              features: ["Portfolio overview", "Trade history", "Performance analytics"]
            },
            {
              icon: <FaShieldAlt size={30} />,
              title: "Security & Trust",
              description: "Bank-level security with complete transparency in all operations",
              features: ["Encrypted data", "Secure access", "Audit trail"]
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
            >
              <div style={{ color: '#00ff88', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>{feature.title}</h4>
              <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>{feature.description}</p>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {feature.features.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Demo Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
            borderRadius: '15px',
            padding: '3rem',
            textAlign: 'center',
            marginTop: '3rem'
          }}
        >
          <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
            Experience <span style={{ color: '#00ff88' }}>Live Dashboard</span>
          </h3>
          <p style={{ marginBottom: '2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Get a personalized dashboard where you can monitor all your trades in real-time
          </p>
          
          <div style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '10px',
            padding: '2rem',
            marginTop: '2rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { label: 'Equity', value: '$15,250', change: '+2.5%' },
                { label: 'Balance', value: '$12,000', change: '0%' },
                { label: 'Margin', value: '$1,200', change: '-0.5%' },
                { label: 'Free Margin', value: '$10,800', change: '+2.8%' }
              ].map((metric, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {metric.value}
                  </div>
                  <div style={{ 
                    color: metric.change.startsWith('+') ? '#00ff88' : '#ff4444',
                    fontSize: '0.9rem'
                  }}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              height: '200px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8'
            }}>
              <div>
                <FaChartLine size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p>Live Trading Chart Visualization</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveMonitoring;