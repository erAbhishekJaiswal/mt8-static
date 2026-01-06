// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJXmgCDaqUJQ5EOZubYrYLPH1phxBMS0XjKDWYsalM5skwbJdY64RhTpuIWKa9uxK9/exec";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus({ submitting: true, submitted: false, error: null });

  //   try {
  //     // Google Sheets integration would go here
  //     // Same as Book Now page
      
  //     setTimeout(() => {
  //       setStatus({ submitting: false, submitted: true, error: null });
  //       setFormData({
  //         name: '',
  //         email: '',
  //         subject: '',
  //         message: ''
  //       });
  //     }, 2000);
      
  //   } catch (error) {
  //     setStatus({ submitting: false, submitted: false, error: error.message });
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ submitting: true, submitted: false, error: null });

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwJXmgCDaqUJQ5EOZubYrYLPH1phxBMS0XjKDWYsalM5skwbJdY64RhTpuIWKa9uxK9/exec";

  try {
    const formDataToSend = new FormData();

    // Append all form fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Optional extra fields
    formDataToSend.append("source", "Contact Page");
    formDataToSend.append("timestamp", new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formDataToSend
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    // ✅ SUCCESS
    setStatus({ submitting: false, submitted: true, error: null });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  } catch (error) {
    setStatus({
      submitting: false,
      submitted: false,
      error: "Something went wrong. Please try again later."
    });
  }
};


  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "support@mt8broker.com",
      subtitle: "24/7 Support Available"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subtitle: "International Toll-Free"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      info: "24/7",
      subtitle: "Round-the-clock support"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Global Headquarters",
      info: "Financial District",
      subtitle: "Global presence in 50+ countries"
    }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Get In <span style={{ color: '#00ff88' }}>Touch</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Have questions? Our support team is here to help you 24/7
          </p>
        </motion.div>

        {/* Contact Info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {contactInfo.map((item, index) => (
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
                {item.icon}
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.info}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-container">
              <h2 style={{ marginBottom: '1.5rem', textAlign: 'center',color: '#00ff88' }}>
                Send Us a Message
              </h2>
              
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
                  <h3 style={{ marginBottom: '1rem', color: '#00ff88' }}>Message Sent!</h3>
                  <p>Thank you for contacting MT8. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message..."
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
                    <FaPaperPlane style={{ marginRight: '10px' }} />
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card" style={{ height: '100%' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>
                  What is the minimum deposit?
                </h4>
                <p style={{ color: '#94a3b8' }}>
                  You can start trading with MT8 with a minimum deposit of just $100.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>
                  How are withdrawals processed?
                </h4>
                <p style={{ color: '#94a3b8' }}>
                  Withdrawals are processed within 24 hours, and you can withdraw your profits anytime.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>
                  What is your risk management policy?
                </h4>
                <p style={{ color: '#94a3b8' }}>
                  We implement strict risk controls with a maximum 5% daily loss limit and proper SL/TP strategies.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>
                  Is there a deposit bonus?
                </h4>
                <p style={{ color: '#94a3b8' }}>
                  Yes, we offer a 100% deposit bonus for new traders. Terms and conditions apply.
                </p>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#00ff8810', borderRadius: '10px' }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>Need Immediate Help?</h4>
                <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                  Our live chat support is available 24/7 for instant assistance.
                </p>
                <button 
                  className="cta-button"
                  style={{ width: '100%', padding: '10px' }}
                  onClick={() => window.open('https://livechat.mt8broker.com', '_blank')}
                >
                  Start Live Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section (Demo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '4rem' }}
        >
          <div className="glass-card">
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Global Presence</h3>
            <div style={{
              height: '300px',
              background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8'
            }}>
              <div style={{ textAlign: 'center' }}>
                <FaMapMarkerAlt size={50} style={{ marginBottom: '1rem', color: '#00ff88' }} />
                <p>Global Headquarters & Operations Centers</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Serving clients in 50+ countries worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;