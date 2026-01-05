// src/components/GlassCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', style = {}, hoverEffect = true }) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '1.5rem',
        ...style
      }}
      whileHover={hoverEffect ? { 
        y: -5,
        boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)',
        borderColor: 'rgba(0, 255, 136, 0.3)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;