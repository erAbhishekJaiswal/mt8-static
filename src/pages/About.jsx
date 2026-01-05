// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaHandshake, FaGlobe, FaUsers, FaChartBar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            About <span style={{ color: '#00ff88' }}>Master Trade 8</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
            Leading the forex industry with 9 years of expertise, innovation, and trust
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Our Story</h2>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            Master Trade 8 (MT8) was founded 9 years ago with a single mission: to democratize 
            professional forex trading for everyone. What started as a small team of financial 
            experts has grown into a global brokerage firm serving thousands of traders worldwide.
          </p>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            With <span style={{ color: '#00ff88', fontWeight: 'bold' }}>9 years of expertise</span> in the 
            financial markets, MT8 has built a reputation for reliability, transparency, and innovation. 
            We've weathered market storms and celebrated market successes, always keeping our clients' 
            interests at the forefront.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Today, we offer cutting-edge trading solutions, real-time monitoring, and professional 
            risk management to help both beginners and experienced traders navigate the forex markets 
            with confidence.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <FaBullseye size={40} color="#00ff88" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
            <p>
              To be the most trusted and innovative forex brokerage firm, empowering traders with 
              cutting-edge technology, transparent trading conditions, and superior risk management 
              to achieve consistent financial growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card"
          >
            <FaRocket size={40} color="#ffd700" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>✓</span> Provide secure, reliable trading environment
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>✓</span> Ensure complete transparency
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>✓</span> Implement strong risk management
              </li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00ff88' }}>✓</span> Offer 24/7 professional support
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Our Core <span style={{ color: '#00ff88' }}>Values</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            {
              icon: <FaHandshake size={30} />,
              title: "Trust & Transparency",
              description: "Open communication and honest operations"
            },
            {
              icon: <FaGlobe size={30} />,
              title: "Innovation",
              description: "Cutting-edge technology and strategies"
            },
            {
              icon: <FaUsers size={30} />,
              title: "Client Success",
              description: "Your growth is our priority"
            },
            {
              icon: <FaChartBar size={30} />,
              title: "Risk Management",
              description: "Protecting your capital always"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: '1rem', color: '#00ff88' }}>
                {value.icon}
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>{value.title}</h4>
              <p style={{ color: '#94a3b8' }}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;