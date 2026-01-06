// // src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaChartLine, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="logo">
//           <FaChartLine size={30} color="#00ff88" />
//           <div>
//             <div className="logo-text">MT8</div>
//             <div className="logo-slogan">Master Trade 8</div>
//           </div>
//         </Link>

//         <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>

//         <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
//           <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//           <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
//           <li><Link to="/book-now" onClick={() => setIsOpen(false)}>Book Now</Link></li>
//           <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//         </ul>

//         <Link to="/book-now" className="cta-button">
//           Start Trading
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









// Update src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import logobg  from '../assets/logobg.png';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import CountdownTimer from './CountdownTimer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/book-now', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar" style={{ 
      background: scrolled ? 'rgba(10, 26, 58, 0.98)' : 'rgba(10, 26, 58, 0.95)',
      transition: 'all 0.3s ease'
    }}>
            {/* 🔹 TOP BAR */}
      <div className="header-bar-top">
        <div className="header-bar-top-inner">
          <div className="header-bar-phones">
            <FaMobileAlt />
            <a className="header-kit-icons" href="tel:+917304426176">
              +91 7304426176
            </a>
            {/* <span className="divider">/</span>
            <a className="header-kit-icons" href="tel:+917304426176">
              +91 7304426176
            </a> */}
          </div>

          <div className="header-bar-social">
            <ul className="header-bar-social-list">
              <li className="heder-bar-social-icon-list">
                <a
                  className="header-kit-icons"
                  href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#"
                >
                  <FaFacebookF />
                </a>
              </li>
              |
              <li className="heder-bar-social-icon-list">
                {" "}
                <a
                  className="header-kit-icons"
                  href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#"
                >
                  <FaInstagram />
                </a>
              </li>
              |
              <li className="heder-bar-social-icon-list">
                <a
                  className="header-kit-icons"
                  href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              |
              <li className="heder-bar-social-icon-list">
                <a
                  className="header-kit-icons"
                  href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#"
                >
                  <IoLogoTwitter />
                </a>
              </li>
              |
              <li className="heder-bar-social-icon-list">
                <a
                  className="header-kit-icons"
                  href="https://www.instagram.com/master_trade_8/?igsh=MTFjbXowcHk3andiZQ%3D%3D#"
                >
                  <TfiYoutube />
                </a>
              </li>
              
              {/* <li className="heder-bar-social-icon-list">
                <a
                  className="header-kit-icons google-review-navbar-link"
                  href="https://g.page/r/CaTVvcqNsGqVEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.kumarinfotech.com/img/reviewImage.png"
                    alt="Google Review"
                    className="google-review"
                  />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-container">
        <Link to="/" className="logo">
          {/* <FaChartLine size={30} color="#00ff88" /> */}
          <div>
            {/* <div className="logo-text">MT8</div> */}
            <img src={logobg} alt="" className="logo-text"/>
            {/* <div className="logo-slogan">Master Trade 8</div> */}
          </div>
        </Link>

        <MobileMenu />

        <div className="nav-desktop-menu desktop-only">
        <ul className="nav-links desktop-only">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                style={{ 
                  color: location.pathname === item.path ? '#00ff88' : 'white'
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/book-now" className="cta-button desktop-only">
          Start Trading
        </Link>
        <CountdownTimer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;