// src/components/FloatingContactButtons.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaTimes, FaComment, FaHeadset } from 'react-icons/fa';

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const phoneNumber = '+15551234567'; // Replace with actual number
  const whatsappNumber = '+15551234567'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello MT8! I'm interested in your forex trading services. Can you please provide more information?");

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallModal(false);
  };

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    setShowWhatsappModal(false);
  };

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="floating-contact-container"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999
        }}
      >
        {/* Secondary Buttons */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Call Button */}
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setShowCallModal(true)}
                className="floating-button"
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  right: '0',
                  background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                  color: '#0a1a3a',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 25px rgba(0, 255, 136, 0.4)',
                  fontSize: '1.5rem'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                <div className="tooltip" style={{
                  position: 'absolute',
                  right: '50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(10, 26, 58, 0.95)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  Call Support
                </div>
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setShowWhatsappModal(true)}
                className="floating-button"
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  right: '0',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 25px rgba(37, 211, 102, 0.4)',
                  fontSize: '1.5rem'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                <div className="tooltip" style={{
                  position: 'absolute',
                  right: '50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(10, 26, 58, 0.95)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  WhatsApp Support
                </div>
              </motion.button>

              {/* Chat Support Button */}
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => window.open('https://livechat.mt8broker.com', '_blank')}
                className="floating-button"
                style={{
                  position: 'absolute',
                  bottom: '150px',
                  right: '0',
                  background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                  color: '#0a1a3a',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 5px 25px rgba(255, 215, 0, 0.4)',
                  fontSize: '1.5rem'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaComment />
                <div className="tooltip" style={{
                  position: 'absolute',
                  right: '70px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(10, 26, 58, 0.95)',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}>
                  Live Chat
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="floating-main-button"
          style={{
            background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
            color: '#00ff88',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #00ff88',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.8rem',
            boxShadow: '0 5px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {isOpen ? <FaTimes /> : <FaHeadset />}
          
          {/* Notification Badge */}
          {/* <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '20px',
            height: '20px',
            background: '#ff4444',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: 'white',
            animation: 'pulse 2s infinite'
          }}>
            3
          </div> */}
        </motion.button>
      </motion.div>

      {/* Call Modal */}
      <AnimatePresence>
        {showCallModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setShowCallModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              style={{
                background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
                padding: '2rem',
                borderRadius: '15px',
                maxWidth: '400px',
                width: '90%',
                textAlign: 'center',
                border: '1px solid rgba(0, 255, 136, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#00ff88',
                fontSize: '2rem'
              }}>
                <FaPhone />
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>Call Support Team</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Our support team is available 24/7 to assist you
              </p>
              
              <div style={{
                background: 'rgba(0, 255, 136, 0.1)',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Primary Support Line
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff88' }}>
                  {phoneNumber}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={handleCallClick}
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                    color: '#0a1a3a',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    flex: 1
                  }}
                >
                  Call Now
                </button>
                
                <button
                  onClick={() => setShowCallModal(false)}
                  style={{
                    background: 'transparent',
                    color: '#94a3b8',
                    border: '1px solid #94a3b8',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    flex: 1
                  }}
                >
                  Cancel
                </button>
              </div>
              
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  <span style={{ color: '#00ff88' }}>Working Hours:</span> 24/7
                </p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  <span style={{ color: '#00ff88' }}>Average Wait Time:</span> Less than 2 minutes
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {showWhatsappModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setShowWhatsappModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              style={{
                background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
                padding: '2rem',
                borderRadius: '15px',
                maxWidth: '400px',
                width: '90%',
                textAlign: 'center',
                border: '1px solid rgba(37, 211, 102, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(37, 211, 102, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#25D366',
                fontSize: '2rem'
              }}>
                <FaWhatsapp />
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>WhatsApp Support</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Message us directly on WhatsApp for quick assistance
              </p>
              
              <div style={{
                background: 'rgba(37, 211, 102, 0.1)',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  WhatsApp Number
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#25D366' }}>
                  {whatsappNumber}
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Pre-written Message:
                </div>
                <div style={{ fontSize: '0.9rem', color: '#ffffff' }}>
                  Hello MT8! I'm interested in your forex trading services. Can you please provide more information?
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={handleWhatsappClick}
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <FaWhatsapp />
                  Open WhatsApp
                </button>
                
                <button
                  onClick={() => setShowWhatsappModal(false)}
                  style={{
                    background: 'transparent',
                    color: '#94a3b8',
                    border: '1px solid #94a3b8',
                    padding: '12px 30px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    flex: 1
                  }}
                >
                  Cancel
                </button>
              </div>
              
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  <span style={{ color: '#25D366' }}>Response Time:</span> Usually within 5 minutes
                </p>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  <span style={{ color: '#25D366' }}>Available:</span> 24/7 for urgent queries
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButtons;