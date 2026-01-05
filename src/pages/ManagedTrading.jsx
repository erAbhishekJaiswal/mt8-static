// src/pages/ManagedTrading.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaMoneyBillWave, FaUserTie, FaClock, FaPercentage } from 'react-icons/fa';

const ManagedTrading = () => {
  return (
    <div className="managed-trading-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Managed <span style={{ color: '#00ff88' }}>Forex Trading</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Professional risk-controlled trading with expert management and proven strategies
          </p>
        </motion.div>

        {/* Risk Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: '#00ff8820',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00ff88'
            }}>
              <FaShieldAlt size={24} />
            </div>
            <h2 style={{ fontSize: '2rem' }}>Professional Risk Management</h2>
          </div>
          
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            We implement strict risk control measures to protect your capital while maximizing 
            profit potential. Our managed accounts follow disciplined trading strategies with 
            proper Stop Loss (SL) and Take Profit (TP) placements.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ff4444',
                marginBottom: '0.5rem'
              }}>
                5%
              </div>
              <div style={{ color: '#94a3b8' }}>
                Maximum Daily Loss Limit
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#00ff88',
                marginBottom: '0.5rem'
              }}>
                Up to 25%
              </div>
              <div style={{ color: '#94a3b8' }}>
                Daily Profit Target
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ffd700',
                marginBottom: '0.5rem'
              }}>
                $100
              </div>
              <div style={{ color: '#94a3b8' }}>
                Minimum Investment
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trading Process */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          How <span style={{ color: '#00ff88' }}>It Works</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {[
            {
              step: "01",
              icon: <FaMoneyBillWave />,
              title: "Account Setup",
              description: "Deposit minimum $100 to start"
            },
            {
              step: "02",
              icon: <FaUserTie />,
              title: "Expert Assignment",
              description: "Professional trader manages your account"
            },
            {
              step: "03",
              icon: <FaChartLine />,
              title: "Strategy Execution",
              description: "Proven trading strategies applied"
            },
            {
              step: "04",
              icon: <FaPercentage />,
              title: "Profit Withdrawal",
              description: "Withdraw profits anytime, no restrictions"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ textAlign: 'center' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: '#00ff8820',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#00ff88'
              }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.step}</span>
              </div>
              <div style={{ marginBottom: '1rem', color: '#00ff88' }}>
                {item.icon}
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: '#94a3b8' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
            padding: '3rem',
            borderRadius: '15px'
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
            Key <span style={{ color: '#00ff88' }}>Features</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              "Professional Risk Management",
              "Real-time Trade Monitoring",
              "Transparent Reporting",
              "24/7 Market Analysis",
              "Regular Profit Distribution",
              "No Hidden Fees"
            ].map((feature, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{ color: '#00ff88' }}>✓</div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManagedTrading;