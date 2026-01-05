// src/components/ToastNotification.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

const ToastNotification = ({ message, type = 'success', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const config = {
    success: {
      icon: <FaCheckCircle />,
      bgColor: 'linear-gradient(135deg, #00ff88, #00cc6a)',
      iconColor: '#ffffff'
    },
    error: {
      icon: <FaExclamationCircle />,
      bgColor: 'linear-gradient(135deg, #ff4444, #cc0000)',
      iconColor: '#ffffff'
    },
    warning: {
      icon: <FaExclamationCircle />,
      bgColor: 'linear-gradient(135deg, #ffd700, #ffaa00)',
      iconColor: '#0a1a3a'
    }
  };

  const { icon, bgColor, iconColor } = config[type];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          zIndex: 10000,
          minWidth: '300px',
          maxWidth: '400px'
        }}
      >
        <div style={{
          background: bgColor,
          color: type === 'warning' ? '#0a1a3a' : 'white',
          padding: '1rem',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontSize: '1.2rem', color: iconColor }}>
            {icon}
          </div>
          <div style={{ flex: 1 }}>
            {message}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: type === 'warning' ? '#0a1a3a' : 'white',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            <FaTimes />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToastNotification;