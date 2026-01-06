// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logobg from '../assets/logobg.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            {/* <FaChartLine size={40} color="#00ff88" /> */}
            <div>
              <img src={logobg} alt="logo" className='logo-text' />
              <div className="logo-slogan">Master Trade 8</div>
            </div>
          </div>
          <p style={{ marginTop: '1rem', color: '#94a3b8' }}>
            Your Trusted Partner in Forex & Trading Solutions
          </p>
          <div className="social-icons" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#" style={{ color: '#94a3b8' }}><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#" style={{ color: '#94a3b8' }}><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#" style={{ color: '#94a3b8' }}><FaLinkedin size={20} /></a>
            <a href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#" style={{ color: '#94a3b8' }}><FaInstagram size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/book-now">Book Now</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/managed-trading">Managed Trading</Link></li>
            <li><Link to="/services/live-monitoring">Live Monitoring</Link></li>
            <li><Link to="/services/expert-guidance">Expert Guidance</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact Info</h4>
          <ul>
            <li style={{ color: '#94a3b8' }}>support@mt8.com</li>
            <li style={{ color: '#94a3b8' }} href="tel:+917304426176">+91 7304426176</li>
            <li style={{ color: '#94a3b8' }}>24/7 Support Available</li>
            <li style={{ color: '#94a3b8' }}>Global Headquarters</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Master Trade 8 (MT8). All rights reserved. Developed by Kumarinfotech</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Risk Warning: Trading Forex and CFDs carries a high level of risk and may not be suitable for all investors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;