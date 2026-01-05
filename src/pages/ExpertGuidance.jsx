// src/pages/ExpertGuidance.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGift, FaUsers, FaChartPie, FaHeadset, FaRocket } from 'react-icons/fa';

const ExpertGuidance = () => {
  const strategies = [
    {
      level: "Beginner",
      name: "Foundation Strategy",
      description: "Learn the basics with guided support",
      features: ["Basic analysis", "Risk management", "Daily mentoring"],
      icon: <FaGraduationCap />
    },
    {
      level: "Intermediate",
      name: "Growth Strategy",
      description: "Scale your trading with advanced techniques",
      features: ["Technical analysis", "Market timing", "Portfolio management"],
      icon: <FaChartPie />
    },
    {
      level: "Advanced",
      name: "Pro Strategy",
      description: "Professional trading with expert insights",
      features: ["Algorithmic signals", "Risk optimization", "VIP support"],
      icon: <FaRocket />
    }
  ];

  const bonuses = [
    {
      title: "100% Deposit Bonus",
      description: "Double your trading capital instantly",
      terms: ["Minimum deposit $100", "30-day trading period", "Bonus withdrawable after requirements"]
    },
    {
      title: "Welcome Package",
      description: "Essential tools for new traders",
      terms: ["Free trading signals", "Educational materials", "1-on-1 coaching session"]
    },
    {
      title: "Loyalty Rewards",
      description: "Rewards for consistent trading",
      terms: ["Monthly cashback", "Priority support", "Exclusive market insights"]
    }
  ];

  return (
    <div className="expert-guidance-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Expert <span style={{ color: '#00ff88' }}>Guidance & Bonuses</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Professional trading strategies and exclusive bonuses for traders of all levels
          </p>
        </motion.div>

        {/* Bonuses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0a1a3a'
            }}>
              <FaGift size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Exclusive <span style={{ color: '#ffd700' }}>Bonuses</span>
              </h2>
              <p style={{ color: '#94a3b8' }}>Boost your trading with our special offers</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {bonuses.map((bonus, index) => (
              <div key={index} style={{
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  background: '#ffd700',
                  color: '#0a1a3a',
                  padding: '2px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  HOT
                </div>
                
                <h3 style={{ marginBottom: '0.5rem', color: '#ffd700' }}>{bonus.title}</h3>
                <p style={{ marginBottom: '1rem', color: '#94a3b8' }}>{bonus.description}</p>
                
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {bonus.terms.map((term, idx) => (
                    <li key={idx} style={{ 
                      marginBottom: '0.5rem', 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: '#ffd700' }}>•</span>
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '2rem', 
            padding: '1.5rem',
            background: 'rgba(0, 255, 136, 0.1)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#00ff88' }}>How to Claim Your Bonus</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { step: '1', text: 'Create Account' },
                { step: '2', text: 'Make Deposit' },
                { step: '3', text: 'Contact Support' },
                { step: '4', text: 'Receive Bonus' }
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#00ff88',
                    color: '#0a1a3a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem',
                    fontWeight: 'bold'
                  }}>
                    {item.step}
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trading Strategies */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Trading <span style={{ color: '#00ff88' }}>Strategies</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
              style={{ 
                borderTop: `4px solid ${strategy.level === 'Beginner' ? '#00ff88' : strategy.level === 'Intermediate' ? '#ffd700' : '#ff4444'}`
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: strategy.level === 'Beginner' ? '#00ff8820' : strategy.level === 'Intermediate' ? '#ffd70020' : '#ff444420',
                color: strategy.level === 'Beginner' ? '#00ff88' : strategy.level === 'Intermediate' ? '#ffd700' : '#ff4444',
                padding: '2px 10px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}>
                {strategy.level}
              </div>
              
              <div style={{ 
                color: strategy.level === 'Beginner' ? '#00ff88' : strategy.level === 'Intermediate' ? '#ffd700' : '#ff4444',
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                {strategy.icon}
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>{strategy.name}</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>{strategy.description}</p>
              
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '1.5rem' }}>
                {strategy.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.5rem', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: strategy.level === 'Beginner' ? '#00ff88' : strategy.level === 'Intermediate' ? '#ffd700' : '#ff4444' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/book-now" 
                className="cta-button"
                style={{ 
                  width: '100%',
                  textAlign: 'center',
                  background: strategy.level === 'Beginner' ? 'linear-gradient(135deg, #00ff88, #00cc6a)' : 
                            strategy.level === 'Intermediate' ? 'linear-gradient(135deg, #ffd700, #ffaa00)' : 
                            'linear-gradient(135deg, #ff4444, #cc0000)'
                }}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #0a1a3a, #1a2b4a)',
            borderRadius: '15px',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
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
                <FaHeadset size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>24/7 Expert Support</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Get personalized guidance from our team of trading experts anytime you need it
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "One-on-one coaching sessions",
                  "Market analysis reviews",
                  "Strategy optimization",
                  "Risk management guidance"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#00ff88' }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Ready for Expert Guidance?</h3>
              <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                Join our community of successful traders and get access to exclusive strategies and bonuses
              </p>
              
              <div style={{ 
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Average Monthly Profit</span>
                  <span style={{ color: '#00ff88', fontWeight: 'bold' }}>12-25%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Success Rate</span>
                  <span style={{ color: '#00ff88', fontWeight: 'bold' }}>78%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Minimum Experience Required</span>
                  <span style={{ color: '#00ff88', fontWeight: 'bold' }}>None</span>
                </div>
              </div>
              
              <Link to="/book-now" className="cta-button" style={{ width: '100%', textAlign: 'center' }}>
                Start With Expert Guidance
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertGuidance;