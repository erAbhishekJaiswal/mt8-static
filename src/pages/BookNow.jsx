// src/pages/BookNow.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaDollarSign, FaComment } from 'react-icons/fa';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    depositAmount: '100',
    message: ''
  });

  const [toast, setToast] = useState(null);

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, submitted: false, error: null });

//     try {
//       // This is where you would integrate with Google Sheets
//       // Using Google Apps Script or a backend API
//       const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
//       const formDataObj = new FormData();
//       Object.keys(formData).forEach(key => {
//         formDataObj.append(key, formData[key]);
//       });

//       // For demo purposes, we'll simulate a successful submission
//       setTimeout(() => {
//         setStatus({ submitting: false, submitted: true, error: null });
        
//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           country: '',
//           depositAmount: '100',
//           message: ''
//         });
//       }, 2000);

//       // Uncomment for actual Google Sheets integration:
//       // const response = await fetch(scriptURL, {
//       //   method: 'POST',
//       //   body: formDataObj
//       // });
      
//       // if (response.ok) {
//       //   setStatus({ submitting: false, submitted: true, error: null });
//       // } else {
//       //   throw new Error('Submission failed');
//       // }
      
//     } catch (error) {
//       setStatus({ submitting: false, submitted: false, error: error.message });
//     }
//   };


// Update handleSubmit
// "https://script.google.com/macros/s/AKfycbyHzMNCLVNhZ7B4lpY60qvaNbybYRelbS-Skd3HL9bR8UmHXgzasSmkt_RrClM-a6Zx2A/exec";

const handleSubmit = async (e) => {
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHzMNCLVNhZ7B4lpY60qvaNbybYRelbS-Skd3HL9bR8UmHXgzasSmkt_RrClM-a6Zx2A/exec";

  e.preventDefault();
  setStatus({ submitting: true, submitted: false, error: null });

  try {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formDataToSend
    });

    if (!response.ok) throw new Error("Submission failed");

    setStatus({ submitting: false, submitted: true, error: null });
    setToast({
      message: "Form submitted successfully! We will contact you soon.",
      type: "success"
    });

    setFormData(initialState);

  } catch (error) {
    setStatus({ submitting: false, submitted: false, error: error.message });
    setToast({
      message: "Submission failed. Please try again.",
      type: "error"
    });
  }
};




  return (
    <div className="book-now-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* {toast && (
      <ToastNotification
        message={toast.message}
        type={toast.type}
        onClose={() => setToast(null)}
      />
    )} */}

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Start Your <span style={{ color: '#00ff88' }}>Trading Journey</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Complete the form below and our expert team will contact you within 24 hours
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-container">
              {status.submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: '#00ff8820',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: '#00ff88'
                  }}>
                    ✓
                  </div>
                  <h3 style={{ marginBottom: '1rem', color: '#00ff88' }}>Success!</h3>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Thank you for your interest in MT8. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="cta-button"
                  >
                    Submit Another Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser style={{ marginRight: '10px' }} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope style={{ marginRight: '10px' }} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone style={{ marginRight: '10px' }} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">
                      <FaGlobe style={{ marginRight: '10px' }} />
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="SG">Singapore</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="depositAmount">
                      <FaDollarSign style={{ marginRight: '10px' }} />
                      Preferred Deposit Amount
                    </label>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {['100', '500', '1000', '5000', '10000', '25000'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData({...formData, depositAmount: amount})}
                          style={{
                            padding: '10px 15px',
                            background: formData.depositAmount === amount ? '#00ff88' : '#f1f5f9',
                            color: formData.depositAmount === amount ? '#0a1a3a' : '#64748b',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      id="depositAmount"
                      name="depositAmount"
                      className="form-control"
                      value={`$${formData.depositAmount}`}
                      readOnly
                      style={{ marginTop: '10px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <FaComment style={{ marginRight: '10px' }} />
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your trading experience or any specific requirements..."
                    ></textarea>
                  </div>

                  {status.error && (
                    <div style={{
                      padding: '10px',
                      background: '#fee',
                      color: '#c33',
                      borderRadius: '5px',
                      marginBottom: '1rem'
                    }}>
                      {status.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="cta-button"
                    disabled={status.submitting}
                    style={{ width: '100%', padding: '15px' }}
                  >
                    {status.submitting ? 'Submitting...' : 'Book Free Consultation'}
                  </button>

                  <p style={{ 
                    marginTop: '1rem', 
                    fontSize: '0.9rem', 
                    color: '#64748b',
                    textAlign: 'center'
                  }}>
                    By submitting, you agree to our Terms & Conditions and Privacy Policy
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card" style={{ height: '100%' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>
                What Happens Next?
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#00ff8820',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff88',
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Expert Consultation</h4>
                    <p style={{ color: '#94a3b8' }}>Free 30-minute consultation with our trading experts</p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#00ff8820',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff88',
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Account Setup</h4>
                    <p style={{ color: '#94a3b8' }}>Quick and secure account setup with minimum $100 deposit</p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#00ff8820',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00ff88',
                    flexShrink: 0
                  }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Start Trading</h4>
                    <p style={{ color: '#94a3b8' }}>Begin your trading journey with expert guidance</p>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '1.5rem',
                background: '#00ff8810',
                borderRadius: '10px',
                marginTop: '2rem'
              }}>
                <h4 style={{ marginBottom: '1rem', color: '#00ff88' }}>Why Book With MT8?</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span> 9 years of proven expertise
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span> 5% maximum daily loss protection
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span> 100% deposit bonus available
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span> 24/7 customer support
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span> Anytime profit withdrawals
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;