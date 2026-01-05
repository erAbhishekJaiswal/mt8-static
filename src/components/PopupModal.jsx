// src/components/PopupModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaChartLine, FaGift, FaUser, FaEnvelope, FaPhone, FaGlobe, FaDollarSign, FaComment } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
const PopupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    depositAmount: '100',
    message: ''
  });


  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyHzMNCLVNhZ7B4lpY60qvaNbybYRelbS-Skd3HL9bR8UmHXgzasSmkt_RrClM-a6Zx2A/exec";

const initialState = {
  name: '',
  email: '',
  phone: '',
  country: '',
  depositAmount: '100',
  message: ''
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ submitting: true, submitted: false, error: null });

  try {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formDataToSend
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    // ✅ Show success state
    setStatus({ submitting: false, submitted: true, error: null });

    // ✅ Optional toast (if modal supports it)
    if (typeof setToast === 'function') {
      setToast({
        message: 'Form submitted successfully! We will contact you soon.',
        type: 'success'
      });
    }

    // ✅ Auto close modal after 3 seconds
    setTimeout(() => {
      onClose();

      setFormData(initialState);
      setStatus({ submitting: false, submitted: false, error: null });
    }, 3000);

  } catch (error) {
    setStatus({
      submitting: false,
      submitted: false,
      error: error.message || 'Submission failed'
    });

    if (typeof setToast === 'function') {
      setToast({
        message: 'Submission failed. Please try again.',
        type: 'error'
      });
    }
  }
};


  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popup-modal-overlay"
          onClick={onClose}
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
            zIndex: 10001,
            backdropFilter: 'blur(10px)',
            padding: '20px'
          }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="popup-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
              borderRadius: '20px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              border: '2px solid rgba(0, 255, 136, 0.3)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="popup-close-btn"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '1.2rem',
                zIndex: 2,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 68, 68, 0.8)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <FaTimes />
            </button>

            <div style={{ display: 'flex', flexDirection: 'row', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
              {/* Left Side - Benefits */}
               
              <div className='popup-form' style={{
                padding: '40px',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '18px',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: '#0a1a3a',
                    fontSize: '2rem'
                  }}>
                    <FaChartLine />
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                    Limited Time <span style={{ color: '#00ff88' }}>Offer</span>
                  </h2>
                  <p style={{ color: '#94a3b8' }}>Start your trading journey today!</p>
                </div>

                <CountdownTimer />

                <div style={{ marginBottom: '30px' }}>
                  {[
                    { icon: <FaGift />, text: "100% Deposit Bonus", color: "#ffd700" },
                    { icon: <FaCalendarAlt />, text: "Free 30-Minute Consultation", color: "#00ff88" },
                    { icon: <FaChartLine />, text: "Personal Trading Strategy", color: "#00ff88" }
                  ].map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '15px',
                      marginBottom: '15px',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px'
                    }}>
                      <div style={{ color: item.color, fontSize: '1.2rem' }}>
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* <div style={{
                  padding: '20px',
                  background: 'rgba(0, 255, 136, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 255, 136, 0.2)'
                }}>
                  <h4 style={{ marginBottom: '10px', color: '#00ff88' }}>Special Offer Ending Soon!</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#94a3b8' }}>Spots Available:</span>
                    <span style={{ color: '#ffd700', fontWeight: 'bold' }}>12/50</span>
                  </div>
                  <div style={{ 
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      width: '24%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #ffd700, #ffaa00)',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', textAlign: 'center' }}>
                    Hurry! Limited spots available
                  </p>
                </div> */}
              </div>

             



              {/* Right Side - Form */}
              <div className='popup-right-form' style={{ padding: '40px' }}>
                <h3 style={{ marginBottom: '25px', fontSize: '1.8rem', textAlign: 'center' }}>
                  Book Your <span style={{ color: '#00ff88' }}>Free Consultation</span>
                </h3>

                {status.submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      background: 'rgba(0, 255, 136, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px',
                      color: '#00ff88',
                      fontSize: '3rem',
                      animation: 'successPulse 2s infinite'
                    }}>
                      ✓
                    </div>
                    <h4 style={{ marginBottom: '15px', color: '#00ff88' }}>Success!</h4>
                    <p style={{ marginBottom: '25px' }}>
                      Thank you for your interest. Our trading expert will contact you within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      style={{
                        background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                        color: '#0a1a3a',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gap: '20px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                          <label htmlFor="popup-name" style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <FaUser style={{ marginRight: '8px' }} />
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="popup-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="popup-email" style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <FaEnvelope style={{ marginRight: '8px' }} />
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="popup-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div>
                          <label htmlFor="popup-phone" style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <FaPhone style={{ marginRight: '8px' }} />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="popup-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '1rem'
                            }}
                            placeholder="Enter your phone"
                          />
                        </div>

                        <div>
                          <label htmlFor="popup-country" style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <FaGlobe style={{ marginRight: '8px' }} />
                            Country
                          </label>
                          <select
                            id="popup-country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '1rem',
                              cursor: 'pointer'
                            }}
                          >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="SG">Singapore</option>
                            <option value="AE">UAE</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                          <FaDollarSign style={{ marginRight: '8px' }} />
                          Investment Amount
                        </label>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                          {['100', '500', '1000', '5000', '10000', '25000'].map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => setFormData({...formData, depositAmount: amount})}
                              style={{
                                padding: '10px 15px',
                                background: formData.depositAmount === amount ? '#00ff88' : 'rgba(255, 255, 255, 0.05)',
                                color: formData.depositAmount === amount ? '#0a1a3a' : 'white',
                                border: `1px solid ${formData.depositAmount === amount ? '#00ff88' : 'rgba(255, 255, 255, 0.1)'}`,
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem'
                              }}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          value={`$${formData.depositAmount}`}
                          readOnly
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '1rem',
                            textAlign: 'center'
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="popup-message" style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
                          <FaComment style={{ marginRight: '8px' }} />
                          Trading Experience (Optional)
                        </label>
                        <textarea
                          id="popup-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="3"
                          style={{
                            width: '100%',
                            padding: '12px 15px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '1rem',
                            resize: 'vertical'
                          }}
                          placeholder="Tell us about your trading experience..."
                        />
                      </div>

                      {status.error && (
                        <div style={{
                          padding: '12px',
                          background: 'rgba(255, 68, 68, 0.1)',
                          border: '1px solid rgba(255, 68, 68, 0.3)',
                          borderRadius: '8px',
                          color: '#ff4444',
                          textAlign: 'center'
                        }}>
                          {status.error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status.submitting}
                        style={{
                          background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
                          color: '#0a1a3a',
                          border: 'none',
                          padding: '15px',
                          borderRadius: '30px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        {status.submitting ? (
                          <>
                            <span style={{ opacity: 0 }}>Book Free Consultation</span>
                            <div style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '24px',
                              height: '24px',
                              border: '3px solid rgba(10, 26, 58, 0.3)',
                              borderTop: '3px solid #0a1a3a',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite'
                            }}></div>
                          </>
                        ) : (
                          'Book Free Consultation Now'
                        )}
                      </button>

                      <p style={{ 
                        fontSize: '0.8rem', 
                        color: '#94a3b8', 
                        textAlign: 'center',
                        marginTop: '10px'
                      }}>
                        By submitting, you agree to our Terms & Conditions and Privacy Policy.
                        <br />
                        <span style={{ color: '#ffd700', fontSize: '0.7rem' }}>
                          Limited spots available! Offer ends soon.
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;