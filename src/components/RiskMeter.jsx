// src/components/RiskMeter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const RiskMeter = ({ riskLevel = 30, maxRisk = 100 }) => {
  const percentage = (riskLevel / maxRisk) * 100;
  
  return (
    <div style={{ width: '100%' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '0.5rem'
      }}>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Risk Level</span>
        <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: riskLevel > 70 ? '#ff4444' : riskLevel > 40 ? '#ffd700' : '#00ff88' }}>
          {riskLevel}%
        </span>
      </div>
      
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            height: '100%',
            background: riskLevel > 70 
              ? 'linear-gradient(90deg, #ff4444, #ff8888)' 
              : riskLevel > 40 
              ? 'linear-gradient(90deg, #ffd700, #ffed4e)' 
              : 'linear-gradient(90deg, #00ff88, #00cc6a)',
            borderRadius: '4px'
          }}
        />
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '0.5rem'
      }}>
        <span style={{ fontSize: '0.8rem', color: '#00ff88' }}>Low</span>
        <span style={{ fontSize: '0.8rem', color: '#ffd700' }}>Medium</span>
        <span style={{ fontSize: '0.8rem', color: '#ff4444' }}>High</span>
      </div>
    </div>
  );
};

export default RiskMeter;