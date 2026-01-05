// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCogs, FaEye, FaGraduationCap, FaChartLine, FaShieldAlt, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCogs size={40} />,
      title: "Managed Forex Trading",
      description: "Professional risk-controlled trading with SL/TP strategies",
      features: ["5% Max Daily Loss", "Up to 25% Profit Target", "Expert Management"],
      color: "#00ff88",
      link: "/services/managed-trading"
    },
    {
      icon: <FaEye size={40} />,
      title: "Live Trade Monitoring",
      description: "Real-time transparency with full trade visibility",
      features: ["Real-time Updates", "Dashboard Access", "24/7 Monitoring"],
      color: "#ffd700",
      link: "/services/live-monitoring"
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "Expert Guidance & Bonuses",
      description: "Beginner-friendly onboarding with 100% deposit bonus",
      features: ["100% Bonus", "Expert Strategies", "Beginner Support"],
      color: "#00ff88",
      link: "/services/expert-guidance"
    }
  ];

  const benefits = [
    {
      icon: <FaChartLine />,
      title: "Proven Strategies",
      description: "9 years of tested trading methodologies"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Protection",
      description: "Advanced risk management systems"
    },
    {
      icon: <FaRocket />,
      title: "Fast Execution",
      description: "Low latency trade execution"
    }
  ];

  return (
    <div className="services-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Our <span style={{ color: '#00ff88' }}>Premium Services</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive trading solutions designed for success in the forex market
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
              style={{ 
                borderTop: `4px solid ${service.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0,
                width: '100px',
                height: '100px',
                background: `${service.color}10`,
                borderRadius: '50%',
                transform: 'translate(30px, -30px)'
              }}></div>
              
              <div style={{ marginBottom: '1.5rem', color: service.color }}>
                {service.icon}
              </div>
              
              <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>{service.title}</h2>
              <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>{service.description}</p>
              
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.5rem', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: service.color }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link} 
                className="cta-button"
                style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`
                }}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
            Why Our Services <span style={{ color: '#00ff88' }}>Stand Out</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: '#00ff8820',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#00ff88'
                }}>
                  {benefit.icon}
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{benefit.title}</h4>
                <p style={{ color: '#94a3b8' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center',
            padding: '3rem',
            background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
            borderRadius: '15px',
            marginTop: '3rem'
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
            Ready to Start Your Trading Journey?
          </h2>
          <p style={{ marginBottom: '2rem', color: '#94a3b8', fontSize: '1.1rem' }}>
            Join thousands of successful traders who trust MT8 with their investments
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-now" className="cta-button">
              Book Free Consultation
            </Link>
            <Link 
              to="/contact" 
              className="cta-button"
              style={{ 
                background: 'transparent', 
                border: '2px solid #00ff88',
                color: '#00ff88'
              }}
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;