// src/components/MobileMenu.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars, FaChartLine, FaHome, FaInfo, FaBook, FaEnvelope } from 'react-icons/fa';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfo /> },
    { path: '/services', label: 'Services', icon: <FaHome /> },
    { path: '/book-now', label: 'Book Now', icon: <FaBook /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'none'
        }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '98px',
              left: 0,
              right: 0,
              background: 'rgba(10, 26, 58, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 999,
              padding: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {menuItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.indexOf(item) * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      color: location.pathname === item.path ? '#00ff88' : 'white',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '1.1rem' }}>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div style={{ padding: '1rem', marginTop: '1rem' }}>
              <Link
                to="/book-now"
                className="cta-button"
                onClick={() => setIsOpen(false)}
                style={{ width: '100%', textAlign: 'center' }}
              >
                Start Trading
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;