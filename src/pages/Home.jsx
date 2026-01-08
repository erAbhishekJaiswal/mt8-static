// // src/pages/Home.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaShieldAlt,
//   FaChartLine,
//   FaMoneyBillWave,
//   FaClock,
//   FaTrophy,
//   FaLock,
//   FaEye,
//   FaHeadset
// } from 'react-icons/fa';

// const Home = () => {
//   const [stats, setStats] = useState({
//     years: 0,
//     clients: 0,
//     trades: 0,
//     profit: 0
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats(prev => ({
//         years: prev.years < 9 ? prev.years + 1 : 9,
//         clients: prev.clients < 10000 ? prev.clients + 100 : 10000,
//         trades: prev.trades < 500000 ? prev.trades + 5000 : 500000,
//         profit: prev.profit < 25 ? prev.profit + 1 : 25
//       }));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <FaMoneyBillWave />,
//       title: "Low Minimum Deposit",
//       description: "Start your trading journey with just $100",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Risk Management",
//       description: "5% max daily loss with proper SL/TP strategies",
//       color: "#ffd700"
//     },
//     {
//       icon: <FaChartLine />,
//       title: "Profit Potential",
//       description: "Up to 25% daily profit target",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaClock />,
//       title: "Anytime Withdrawals",
//       description: "Withdraw your profits anytime, no restrictions",
//       color: "#ffd700"
//     },
//     {
//       icon: <FaEye />,
//       title: "Live Monitoring",
//       description: "Full transparency with real-time trade monitoring",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaHeadset />,
//       title: "24/7 Support",
//       description: "Professional support available round the clock",
//       color: "#ffd700"
//     }
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-bg"></div>
//         <div className="hero-content">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="hero-title"
//           >
//             Your Trusted Partner in <br />Forex & Trading Solutions
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hero-subtitle"
//           >
//             9 years of expertise in forex trading with cutting-edge technology,
//             transparent operations, and proven risk management strategies.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
//           >
//             <Link to="/book-now" className="cta-button">
//               Start Trading Now
//             </Link>
//             <Link
//               to="/services"
//               className="cta-button"
//               style={{
//                 background: 'transparent',
//                 border: '2px solid #00ff88',
//                 color: '#00ff88'
//               }}
//             >
//               Learn More
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="stats-grid">
//           {[
//             { value: stats.years, label: "Years of Experience", suffix: "+" },
//             { value: stats.clients.toLocaleString(), label: "Active Clients", suffix: "+" },
//             { value: stats.trades.toLocaleString(), label: "Monthly Trades", suffix: "+" },
//             { value: stats.profit, label: "Max Daily Profit Target", suffix: "%" }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="stat-card"
//             >
//               <div className="stat-number">
//                 {stat.value}{stat.suffix}
//               </div>
//               <div className="stat-label">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="container">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="section-title"
//           >
//             Why Choose <span>MT8</span>
//           </motion.h2>

//           <div className="features-grid">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="feature-card"
//               >
//                 <div className="feature-icon" style={{ color: feature.color }}>
//                   {feature.icon}
//                 </div>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Risk Management Section */}
//       <section style={{
//         padding: '80px 0',
//         background: 'linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)'
//       }}>
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="glass-card"
//             style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
//           >
//             <FaLock size={40} color="#00ff88" style={{ marginBottom: '1rem' }} />
//             <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
//               Professional Risk Management
//             </h2>
//             <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
//               We implement strict risk control measures to protect your capital
//             </p>

//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: '1.5rem',
//               marginTop: '2rem'
//             }}>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff4444',
//                   marginBottom: '0.5rem'
//                 }}>
//                   5%
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Maximum Daily Loss
//                 </div>
//               </div>

//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#00ff88',
//                   marginBottom: '0.5rem'
//                 }}>
//                   Up to 25%
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Daily Profit Target
//                 </div>
//               </div>

//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#ffd700',
//                   marginBottom: '0.5rem'
//                 }}>
//                   $100
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Minimum Deposit
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// Update src/pages/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaTrophy,
  FaLock,
  FaEye,
  FaHeadset,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import PopupModal from "../components/PopupModal";
import playstore from "../assets/playstore.jpeg";

const Home = () => {
  const [stats, setStats] = useState({
    years: 0,
    clients: 0,
    trades: 0,
    profit: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const slideInterval = useRef(null);
  const testimonialInterval = useRef(null);
  const popupTimeout = useRef(null);

  // Banner Slides Data
  const bannerSlides = [
    {
      id: 1,
      title: "Professional Forex Trading",
      subtitle: "9 Years of Market Expertise",
      image:
        "https://cdn.pixabay.com/photo/2020/11/24/11/48/commercial-5772300_1280.jpg",
      highlight: "#ffffffff",
    },
    {
      id: 2,
      title: "Risk-Controlled Strategies",
      subtitle: "5% Max Daily Loss Protection",
      image:
        "https://cdn.pixabay.com/photo/2020/11/24/11/48/commercial-5772300_1280.jpg",
      highlight: "#ffd700",
    },
    {
      id: 3,
      title: "100% Deposit Bonus",
      subtitle: "Double Your Trading Capital",
      image:
        "https://cdn.pixabay.com/photo/2020/03/04/06/03/stock-4900647_1280.jpg",
      highlight: "#00ff88",
    },
    {
      id: 4,
      title: "Live Trade Monitoring",
      subtitle: "Full Transparency & Real-time Updates",
      image:
        "https://cdn.pixabay.com/photo/2018/07/23/12/05/stock-exchange-3556719_1280.jpg",
      highlight: "#ffd700",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Professional Trader",
      location: "New York, USA",
      content:
        "MT8's risk management strategies have completely transformed my trading approach. The 5% daily loss limit has protected my capital during volatile markets while still allowing for consistent profits.",
      rating: 5,
      profit: "+$24,500",
      duration: "3 months",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Beginner Trader",
      location: "Singapore",
      content:
        "As a beginner, I was hesitant about forex trading. MT8's expert guidance and 100% deposit bonus gave me the confidence to start. Their support team is incredibly helpful and responsive.",
      rating: 5,
      profit: "+$8,200",
      duration: "2 months",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Institutional Investor",
      location: "London, UK",
      content:
        "The transparency and live monitoring features are game-changers. Being able to see trades in real-time builds immense trust. MT8's professional approach sets them apart from other brokers.",
      rating: 5,
      profit: "+$52,300",
      duration: "6 months",
    },
    {
      id: 4,
      name: "Elena Petrova",
      role: "Day Trader",
      location: "Moscow, Russia",
      content:
        "The anytime withdrawals feature is exactly what I needed. No more waiting days for my profits. Combined with the low minimum deposit, it's perfect for active traders.",
      rating: 5,
      profit: "+$15,800",
      duration: "4 months",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Retirement Investor",
      location: "Seoul, South Korea",
      content:
        "MT8's managed trading service has been excellent for my retirement portfolio. The consistent 12-25% monthly returns with controlled risk are exactly what I was looking for.",
      rating: 5,
      profit: "+$31,200",
      duration: "5 months",
    },
  ];

  // Auto-popup after 5 seconds
  useEffect(() => {
    // Check if popup was already shown in this session
    // const popupShownSession = sessionStorage.getItem('mt8_popup_shown');

    // if (!popupShownSession) {
    popupTimeout.current = setTimeout(() => {
      setShowPopup(true);
      // sessionStorage.setItem('mt8_popup_shown', 'true');
    }, 5000); // 5 seconds delay
    // }

    return () => {
      if (popupTimeout.current) {
        clearTimeout(popupTimeout.current);
      }
    };
  }, []);

  // Auto-slide functionality for banner
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  // Auto-slide functionality for testimonials
  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, []);

  // Manual slide controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 5000);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
      testimonialInterval.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
      testimonialInterval.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        years: prev.years < 9 ? prev.years + 1 : 9,
        clients: prev.clients < 10000 ? prev.clients + 100 : 10000,
        trades: prev.trades < 500000 ? prev.trades + 5000 : 500000,
        profit: prev.profit < 25 ? prev.profit + 1 : 25,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: "Low Minimum Deposit",
      description: "Start your trading journey with just $100",
      color: "#00ff88",
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "5% max daily loss with proper SL/TP strategies",
      color: "#ffd700",
    },
    {
      icon: <FaChartLine />,
      title: "Profit Potential",
      description: "Up to 25% daily profit target",
      color: "#00ff88",
    },
    {
      icon: <FaClock />,
      title: "Anytime Withdrawals",
      description: "Withdraw your profits anytime, no restrictions",
      color: "#ffd700",
    },
    {
      icon: <FaEye />,
      title: "Live Monitoring",
      description: "Full transparency with real-time trade monitoring",
      color: "#00ff88",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Professional support available round the clock",
      color: "#ffd700",
    },
  ];

  return (
    <div className="home-page">
      {/* Popup Modal */}
      <PopupModal isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Hero Section with Auto Banner Slider */}
      <section className="hero">
        <div className="hero-slider-container">
          {/* Banner Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="hero-slide"
              style={{
                backgroundImage: `url(${bannerSlides[currentSlide].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <div className="hero-bg"></div>
              <div className="hero-content">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hero-title"
                  style={{ color: bannerSlides[currentSlide].highlight }}
                >
                  {bannerSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hero-subtitle"
                >
                  {bannerSlides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => setShowPopup(true)}
                    className="cta-button"
                    style={{
                      background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Start Trading Now
                  </button>
                  <Link
                    to="/services"
                    className="cta-button"
                    style={{
                      background: "transparent",
                      border: `2px solid ${bannerSlides[currentSlide].highlight}`,
                      color: bannerSlides[currentSlide].highlight,
                    }}
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation Dots */}
          <div
            className="slide-dots"
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
              zIndex: 3,
            }}
          >
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  background:
                    index === currentSlide
                      ? "#00ff88"
                      : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Navigation Arrows */}
          <button
            className="slide-nav prev"
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 3,
              fontSize: "1.2rem",
              backdropFilter: "blur(10px)",
            }}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <button
            className="slide-nav next"
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              border: "none",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 3,
              fontSize: "1.2rem",
              backdropFilter: "blur(10px)",
            }}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

            {/* Download App Section */}
      <section
        style={{
          padding: "90px 0",
          background: "linear-gradient(135deg, #1a2b4a 0%, #0a1a3a 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>
                Download the <span style={{ color: "#00ff88" }}>MT8 App</span>
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  color: "#cbd5e1",
                }}
              >
                Trade smarter and faster with the official{" "}
                <strong>Master Trade 8</strong> mobile application. Monitor live
                trades, manage risk, withdraw profits, and stay connected —
                anytime, anywhere.
              </p>

              {/* Steps */}
              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "Open Google Play Store on your Android device",
                  "Search for “Master Trade 8 (MT8)”",
                  "Install the app securely from Play Store",
                  "Login or register and start trading",
                ].map((step, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.9rem",
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      color: "#e2e8f0",
                    }}
                  >
                    <span
                      style={{
                        minWidth: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                        color: "#0a1a3a",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                      }}
                    >
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                  style={{
                    background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                    border: "none",
                    padding: "14px 32px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  Download on Play Store
                </a>

                <button
                  onClick={() => setShowPopup(true)}
                  className="cta-button"
                  style={{
                    background: "transparent",
                    border: "2px solid #00ff88",
                    color: "#00ff88",
                    padding: "14px 32px",
                  }}
                >
                  Get Help Installing
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  padding: "30px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "center",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                }}
              >
                <a href="https://play.google.com/store/search?q=tm9&c=apps&hl=en_IN">
                <img
                  src={playstore}
                  alt="MT8 Mobile App"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    margin: "0 auto",
                    borderRadius: "16px",
                  }}
                />
                </a>
                <p
                  style={{
                    marginTop: "1.2rem",
                    fontSize: "0.9rem",
                    color: "#94a3b8",
                  }}
                >
                  Secure • Fast • Real-Time Trading
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Support Section */}
      <section
        style={{
          padding: "90px 0",
          background: "linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Local <span style={{ color: "#00ff88" }}>WhatsApp Support</span>
          </motion.h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "650px",
              margin: "0 auto 3.5rem",
              color: "#cbd5e1",
              fontSize: "1rem",
              lineHeight: "1.7",
            }}
          >
            Connect instantly with our regional support team. Click on your city
            to chat directly on WhatsApp for trading assistance, account setup,
            or general queries.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                city: "Mumbai",
                phone: "919999999999",
              },
              {
                city: "Delhi",
                phone: "918888888888",
              },
              {
                city: "Chennai",
                phone: "917777777777",
              },
              {
                city: "Lucknow",
                phone: "916666666666",
              },
            ].map((location, index) => {
              const message = encodeURIComponent(
                `Hello MT8 Team, I am contacting from ${location.city}. I would like to know more about your trading services.`
              );

              return (
                <motion.a
                  key={index}
                  href={`https://wa.me/${location.phone}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "18px",
                      padding: "2rem",
                      height: "100%",
                      textAlign: "center",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        margin: "0 auto 1rem",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#0a1a3a",
                      }}
                    >
                      {location.city.charAt(0)}
                    </div>

                    <h3 style={{ marginBottom: "0.5rem" }}>{location.city}</h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#94a3b8",
                        marginBottom: "1.2rem",
                      }}
                    >
                      WhatsApp Support
                    </p>

                    <span
                      style={{
                        display: "inline-block",
                        padding: "10px 22px",
                        borderRadius: "30px",
                        background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                        color: "#0a1a3a",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      Chat Now
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        className="who-we-are-section"
        style={{
          padding: "10px 0",
          background: "linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 style={{ fontSize: "2.8rem", marginBottom: "1.5rem" }}>
                Who <span style={{ color: "#00ff88" }}>We Are</span>
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.8",
                  marginBottom: "0.5rem",
                  color: "#e2e8f0",
                }}
              >
                <strong>Master Trade 8 (MT8)</strong> is a professional forex
                brokerage firm with over
                <strong> 9 years of experience</strong> in global financial
                markets. We specialize in delivering risk-controlled trading
                solutions designed for both beginners and experienced traders.
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                  color: "#cbd5e1",
                }}
              >
                Our mission is to provide complete transparency, consistent
                performance, and disciplined risk management. With real-time
                trade monitoring, strict loss limits, and expert-driven
                strategies, we help traders grow confidently in volatile
                markets.
              </p>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {[
                  "✔ 9+ years of proven market expertise",
                  "✔ Risk-controlled strategies with strict SL/TP",
                  "✔ Live trade visibility & full transparency",
                  "✔ Trusted by traders worldwide",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#e2e8f0",
                    }}
                  >
                    <span style={{ color: "#00ff88" }}>✓</span>
                    {item.replace("✔ ", "")}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "2.5rem" }}>
                <Link to="/book-now" className="cta-button">
                  Book Free Consultation
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/22/19/25/adventure-1850178_1280.jpg"
                  alt="MT8 Trading Team"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Accent Card */}
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "30px",
                  background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                  padding: "20px 25px",
                  borderRadius: "15px",
                  color: "#0a1a3a",
                  fontWeight: "bold",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                Trusted Forex Experts
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { value: stats.years, label: "Years of Experience", suffix: "+" },
            {
              value: stats.clients.toLocaleString(),
              label: "Active Clients",
              suffix: "+",
            },
            {
              value: stats.trades.toLocaleString(),
              label: "Monthly Trades",
              suffix: "+",
            },
            {
              value: stats.profit,
              label: "Max Daily Profit Target",
              suffix: "%",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card"
            >
              <div className="stat-number">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Why Choose <span>MT8</span>
          </motion.h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section
        className="testimonials-section"
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #1a2b4a 0%, #0a1a3a 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "2.5rem",
            }}
          >
            What Our <span style={{ color: "#00ff88" }}>Traders Say</span>
          </motion.h2>

          <div
            className="testimonials-container"
            style={{
              position: "relative",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Testimonial Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  padding: "1.5rem",
                  margin: "0 10px",
                  position: "relative",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "#00ff88",
                    opacity: 0.3,
                    fontSize: "2rem",
                  }}
                />

                <FaQuoteRight
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    color: "#00ff88",
                    opacity: 0.3,
                    fontSize: "2rem",
                  }}
                />

                {/* Rating Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "1.5rem",
                    justifyContent: "center",
                  }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <FaStar
                        key={i}
                        style={{ color: "#ffd700", fontSize: "1.2rem" }}
                      />
                    )
                  )}
                </div>

                {/* Testimonial Content */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                    textAlign: "center",
                    color: "#e2e8f0",
                  }}
                >
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Client Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#0a1a3a",
                    }}
                  >
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>

                  <div>
                    <h4 style={{ marginBottom: "0.25rem" }}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                      {testimonials[currentTestimonial].role} •{" "}
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Profit Earned
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#00ff88",
                      }}
                    >
                      {testimonials[currentTestimonial].profit}
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Trading Period
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#ffd700",
                      }}
                    >
                      {testimonials[currentTestimonial].duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "2rem",
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      index === currentTestimonial
                        ? "#00ff88"
                        : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Testimonial Navigation Arrows */}
            <button
              className="testimonial-nav prev"
              onClick={prevTestimonial}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                backdropFilter: "blur(10px)",
                zIndex: 2,
              }}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <button
              className="testimonial-nav next"
              onClick={nextTestimonial}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                backdropFilter: "blur(10px)",
                zIndex: 2,
              }}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Multiple Testimonials Grid (for larger screens) */}
          <div
            className="testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "4rem",
            }}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-mini-card"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  height: "100%",
                }}
              >
                <div
                  style={{ display: "flex", gap: "5px", marginBottom: "1rem" }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{ color: "#ffd700", fontSize: "0.9rem" }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                    color: "#cbd5e1",
                  }}
                >
                  "{testimonial.content.substring(0, 120)}..."
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#0a1a3a",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <FaLock
              size={40}
              color="#00ff88"
              style={{ marginBottom: "1rem" }}
            />
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              Professional Risk Management
            </h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
              We implement strict risk control measures to protect your capital
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#ff4444",
                    marginBottom: "0.5rem",
                  }}
                >
                  5%
                </div>
                <div style={{ color: "#94a3b8" }}>Maximum Daily Loss</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#00ff88",
                    marginBottom: "0.5rem",
                  }}
                >
                  Up to 25%
                </div>
                <div style={{ color: "#94a3b8" }}>Daily Profit Target</div>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#ffd700",
                    marginBottom: "0.5rem",
                  }}
                >
                  $100
                </div>
                <div style={{ color: "#94a3b8" }}>Minimum Deposit</div>
              </div>
            </div>

            {/* CTA Button in Risk Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ marginTop: "2.5rem" }}
            >
              <button
                onClick={() => setShowPopup(true)}
                className="cta-button"
                style={{
                  background: "linear-gradient(135deg, #00ff88, #00cc6a)",
                  border: "none",
                  cursor: "pointer",
                  padding: "15px 40px",
                  fontSize: "1.1rem",
                }}
              >
                Start Trading with Risk Protection
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// src/pages/Home.jsx
// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FaShieldAlt,
//   FaChartLine,
//   FaMoneyBillWave,
//   FaClock,
//   FaTrophy,
//   FaLock,
//   FaEye,
//   FaHeadset,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight
// } from 'react-icons/fa';

// const Home = () => {
//   const [stats, setStats] = useState({
//     years: 0,
//     clients: 0,
//     trades: 0,
//     profit: 0
//   });

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const slideInterval = useRef(null);
//   const testimonialInterval = useRef(null);

//   // Banner Slides Data
//   // const bannerSlides = [
//   //   {
//   //     id: 1,
//   //     title: "Professional Forex Trading",
//   //     subtitle: "9 Years of Market Expertise",
//   //     gradient: "linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)",
//   //     highlight: "#00ff88"
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Risk-Controlled Strategies",
//   //     subtitle: "5% Max Daily Loss Protection",
//   //     gradient: "linear-gradient(135deg, #1a2b4a 0%, #0a1a3a 100%)",
//   //     highlight: "#ffd700"
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "100% Deposit Bonus",
//   //     subtitle: "Double Your Trading Capital",
//   //     gradient: "linear-gradient(135deg, #0a1a3a 0%, #0c2340 100%)",
//   //     highlight: "#00ff88"
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Live Trade Monitoring",
//   //     subtitle: "Full Transparency & Real-time Updates",
//   //     gradient: "linear-gradient(135deg, #1a2b4a 0%, #0c2340 100%)",
//   //     highlight: "#ffd700"
//   //   }
//   // ];

//   const bannerSlides = [
//   {
//     id: 1,
//     title: "Professional Forex Trading",
//     subtitle: "9 Years of Market Expertise",
//     image: "https://cdn.pixabay.com/photo/2020/05/21/11/08/banner-5200274_1280.jpg",
//     highlight: "#00ff88"
//   },
//   {
//     id: 2,
//     title: "Risk-Controlled Strategies",
//     subtitle: "5% Max Daily Loss Protection",
//     image: "https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559398_1280.jpg",
//     highlight: "#ffd700"
//   },
//   {
//     id: 3,
//     title: "100% Deposit Bonus",
//     subtitle: "Double Your Trading Capital",
//     image: "https://cdn.pixabay.com/photo/2020/05/19/10/52/banner-5190181_1280.jpg",
//     highlight: "#00ff88"
//   },
//   {
//     id: 4,
//     title: "Live Trade Monitoring",
//     subtitle: "Full Transparency & Real-time Updates",
//     image: "https://cdn.pixabay.com/photo/2020/05/18/08/53/banner-5185284_1280.jpg",
//     highlight: "#ffd700"
//   }
// ];

//   // Testimonials Data
//   const testimonials = [
//     {
//       id: 1,
//       name: "Michael Rodriguez",
//       role: "Professional Trader",
//       location: "New York, USA",
//       content: "MT8's risk management strategies have completely transformed my trading approach. The 5% daily loss limit has protected my capital during volatile markets while still allowing for consistent profits.",
//       rating: 5,
//       profit: "+$24,500",
//       duration: "3 months"
//     },
//     {
//       id: 2,
//       name: "Sarah Chen",
//       role: "Beginner Trader",
//       location: "Singapore",
//       content: "As a beginner, I was hesitant about forex trading. MT8's expert guidance and 100% deposit bonus gave me the confidence to start. Their support team is incredibly helpful and responsive.",
//       rating: 5,
//       profit: "+$8,200",
//       duration: "2 months"
//     },
//     {
//       id: 3,
//       name: "James Wilson",
//       role: "Institutional Investor",
//       location: "London, UK",
//       content: "The transparency and live monitoring features are game-changers. Being able to see trades in real-time builds immense trust. MT8's professional approach sets them apart from other brokers.",
//       rating: 5,
//       profit: "+$52,300",
//       duration: "6 months"
//     },
//     {
//       id: 4,
//       name: "Elena Petrova",
//       role: "Day Trader",
//       location: "Moscow, Russia",
//       content: "The anytime withdrawals feature is exactly what I needed. No more waiting days for my profits. Combined with the low minimum deposit, it's perfect for active traders.",
//       rating: 5,
//       profit: "+$15,800",
//       duration: "4 months"
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       role: "Retirement Investor",
//       location: "Seoul, South Korea",
//       content: "MT8's managed trading service has been excellent for my retirement portfolio. The consistent 12-25% monthly returns with controlled risk are exactly what I was looking for.",
//       rating: 5,
//       profit: "+$31,200",
//       duration: "5 months"
//     }
//   ];

//   // Auto-slide functionality for banner
//   useEffect(() => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };
//   }, []);

//   // Auto-slide functionality for testimonials
//   useEffect(() => {
//     testimonialInterval.current = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 6000); // Change testimonial every 6 seconds

//     return () => {
//       if (testimonialInterval.current) {
//         clearInterval(testimonialInterval.current);
//       }
//     };
//   }, []);

//   // Manual slide controls
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//       }, 5000);
//     }
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
//       }, 5000);
//     }
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     if (testimonialInterval.current) {
//       clearInterval(testimonialInterval.current);
//       testimonialInterval.current = setInterval(() => {
//         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//       }, 6000);
//     }
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     if (testimonialInterval.current) {
//       clearInterval(testimonialInterval.current);
//       testimonialInterval.current = setInterval(() => {
//         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//       }, 6000);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats(prev => ({
//         years: prev.years < 9 ? prev.years + 1 : 9,
//         clients: prev.clients < 10000 ? prev.clients + 100 : 10000,
//         trades: prev.trades < 500000 ? prev.trades + 5000 : 500000,
//         profit: prev.profit < 25 ? prev.profit + 1 : 25
//       }));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <FaMoneyBillWave />,
//       title: "Low Minimum Deposit",
//       description: "Start your trading journey with just $100",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Risk Management",
//       description: "5% max daily loss with proper SL/TP strategies",
//       color: "#ffd700"
//     },
//     {
//       icon: <FaChartLine />,
//       title: "Profit Potential",
//       description: "Up to 25% daily profit target",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaClock />,
//       title: "Anytime Withdrawals",
//       description: "Withdraw your profits anytime, no restrictions",
//       color: "#ffd700"
//     },
//     {
//       icon: <FaEye />,
//       title: "Live Monitoring",
//       description: "Full transparency with real-time trade monitoring",
//       color: "#00ff88"
//     },
//     {
//       icon: <FaHeadset />,
//       title: "24/7 Support",
//       description: "Professional support available round the clock",
//       color: "#ffd700"
//     }
//   ];

//   return (
//     <div className="home-page">
//       {/* Hero Section with Auto Banner Slider */}
//       <section className="hero">
//         <div className="hero-slider-container">
//           {/* Banner Slides */}
//           <AnimatePresence mode="wait">
//             <motion.div
//   key={currentSlide}
//   initial={{ opacity: 0, scale: 1.05 }}
//   animate={{ opacity: 1, scale: 1 }}
//   exit={{ opacity: 0, scale: 1.05 }}
//   transition={{ duration: 0.8 }}
//   className="hero-slide"
//   style={{
//     backgroundImage: `url(${bannerSlides[currentSlide].image})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1
//   }}
// >

//               <div className="hero-bg"></div>
//               <div className="hero-content">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="hero-title"
//                   style={{ color: bannerSlides[currentSlide].highlight }}
//                 >
//                   {bannerSlides[currentSlide].title}
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="hero-subtitle"
//                 >
//                   {bannerSlides[currentSlide].subtitle}
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
//                 >
//                   <Link to="/book-now" className="cta-button">
//                     Start Trading Now
//                   </Link>
//                   <Link
//                     to="/services"
//                     className="cta-button"
//                     style={{
//                       background: 'transparent',
//                       border: `2px solid ${bannerSlides[currentSlide].highlight}`,
//                       color: bannerSlides[currentSlide].highlight
//                     }}
//                   >
//                     Learn More
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Slide Navigation Dots */}
//           <div className="slide-dots" style={{
//             position: 'absolute',
//             bottom: '40px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             display: 'flex',
//             gap: '10px',
//             zIndex: 3
//           }}>
//             {bannerSlides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 style={{
//                   width: '12px',
//                   height: '12px',
//                   borderRadius: '50%',
//                   border: 'none',
//                   background: index === currentSlide ? '#00ff88' : 'rgba(255,255,255,0.3)',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   padding: 0
//                 }}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Slide Navigation Arrows */}
//           <button
//             className="slide-nav prev"
//             onClick={prevSlide}
//             style={{
//               position: 'absolute',
//               left: '30px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               background: 'rgba(0,0,0,0.5)',
//               color: 'white',
//               border: 'none',
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               zIndex: 3,
//               fontSize: '1.2rem',
//               backdropFilter: 'blur(10px)'
//             }}
//             aria-label="Previous slide"
//           >
//             <FaChevronLeft />
//           </button>

//           <button
//             className="slide-nav next"
//             onClick={nextSlide}
//             style={{
//               position: 'absolute',
//               right: '30px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               background: 'rgba(0,0,0,0.5)',
//               color: 'white',
//               border: 'none',
//               width: '50px',
//               height: '50px',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               zIndex: 3,
//               fontSize: '1.2rem',
//               backdropFilter: 'blur(10px)'
//             }}
//             aria-label="Next slide"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </section>

//       {/* Who We Are Section */}
// <section
//   className="who-we-are-section"
//   style={{
//     padding: '100px 0',
//     background: 'linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)'
//   }}
// >
//   <div className="container">
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '4rem',
//         alignItems: 'center'
//       }}
//     >
//       {/* Left Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
//           Who <span style={{ color: '#00ff88' }}>We Are</span>
//         </h2>

//         <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#e2e8f0' }}>
//           <strong>Master Trade 8 (MT8)</strong> is a professional forex brokerage firm with over
//           <strong> 9 years of experience</strong> in global financial markets. We specialize in
//           delivering risk-controlled trading solutions designed for both beginners and
//           experienced traders.
//         </p>

//         <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem', color: '#cbd5e1' }}>
//           Our mission is to provide complete transparency, consistent performance, and
//           disciplined risk management. With real-time trade monitoring, strict loss limits,
//           and expert-driven strategies, we help traders grow confidently in volatile markets.
//         </p>

//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {[
//             '✔ 9+ years of proven market expertise',
//             '✔ Risk-controlled strategies with strict SL/TP',
//             '✔ Live trade visibility & full transparency',
//             '✔ Trusted by traders worldwide'
//           ].map((item, index) => (
//             <li
//               key={index}
//               style={{
//                 marginBottom: '0.75rem',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '10px',
//                 color: '#e2e8f0'
//               }}
//             >
//               <span style={{ color: '#00ff88' }}>✓</span>
//               {item.replace('✔ ', '')}
//             </li>
//           ))}
//         </ul>

//         <div style={{ marginTop: '2.5rem' }}>
//           <Link to="/book-now" className="cta-button">
//             Book Free Consultation
//           </Link>
//         </div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//         style={{ position: 'relative' }}
//       >
//         <div
//           style={{
//             borderRadius: '20px',
//             overflow: 'hidden',
//             boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
//           }}
//         >
//           <img
//             src="/images/about/who-we-are.jpg"
//             alt="MT8 Trading Team"
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover'
//             }}
//           />
//         </div>

//         {/* Accent Card */}
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '-30px',
//             left: '-30px',
//             background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
//             padding: '20px 25px',
//             borderRadius: '15px',
//             color: '#0a1a3a',
//             fontWeight: 'bold',
//             boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
//           }}
//         >
//           Trusted Forex Experts
//         </div>
//       </motion.div>
//     </div>
//   </div>
// </section>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="stats-grid">
//           {[
//             { value: stats.years, label: "Years of Experience", suffix: "+" },
//             { value: stats.clients.toLocaleString(), label: "Active Clients", suffix: "+" },
//             { value: stats.trades.toLocaleString(), label: "Monthly Trades", suffix: "+" },
//             { value: stats.profit, label: "Max Daily Profit Target", suffix: "%" }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="stat-card"
//             >
//               <div className="stat-number">
//                 {stat.value}{stat.suffix}
//               </div>
//               <div className="stat-label">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features-section">
//         <div className="container">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="section-title"
//           >
//             Why Choose <span>MT8</span>
//           </motion.h2>

//           <div className="features-grid">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="feature-card"
//               >
//                 <div className="feature-icon" style={{ color: feature.color }}>
//                   {feature.icon}
//                 </div>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Carousel Section */}
//       <section className="testimonials-section" style={{
//         padding: '80px 0',
//         background: 'linear-gradient(135deg, #1a2b4a 0%, #0a1a3a 100%)'
//       }}>
//         <div className="container">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
//           >
//             What Our <span style={{ color: '#00ff88' }}>Traders Say</span>
//           </motion.h2>

//           <div className="testimonials-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
//             {/* Testimonial Cards */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentTestimonial}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="testimonial-card"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   backdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   borderRadius: '15px',
//                   padding: '2.5rem',
//                   margin: '0 20px',
//                   position: 'relative'
//                 }}
//               >
//                 {/* Quote Icon */}
//                 <FaQuoteLeft style={{
//                   position: 'absolute',
//                   top: '20px',
//                   left: '20px',
//                   color: '#00ff88',
//                   opacity: 0.3,
//                   fontSize: '2rem'
//                 }} />

//                 <FaQuoteRight style={{
//                   position: 'absolute',
//                   bottom: '20px',
//                   right: '20px',
//                   color: '#00ff88',
//                   opacity: 0.3,
//                   fontSize: '2rem'
//                 }} />

//                 {/* Rating Stars */}
//                 <div style={{ display: 'flex', gap: '5px', marginBottom: '1.5rem', justifyContent: 'center' }}>
//                   {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
//                     <FaStar key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }} />
//                   ))}
//                 </div>

//                 {/* Testimonial Content */}
//                 <p style={{
//                   fontSize: '1.1rem',
//                   lineHeight: '1.8',
//                   marginBottom: '2rem',
//                   textAlign: 'center',
//                   color: '#e2e8f0'
//                 }}>
//                   "{testimonials[currentTestimonial].content}"
//                 </p>

//                 {/* Client Info */}
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   gap: '1rem',
//                   marginBottom: '1rem'
//                 }}>
//                   <div style={{
//                     width: '60px',
//                     height: '60px',
//                     background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '1.5rem',
//                     fontWeight: 'bold',
//                     color: '#0a1a3a'
//                   }}>
//                     {testimonials[currentTestimonial].name.charAt(0)}
//                   </div>

//                   <div>
//                     <h4 style={{ marginBottom: '0.25rem' }}>{testimonials[currentTestimonial].name}</h4>
//                     <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
//                       {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Performance Stats */}
//                 <div style={{
//                   display: 'flex',
//                   justifyContent: 'center',
//                   gap: '2rem',
//                   marginTop: '1.5rem',
//                   paddingTop: '1.5rem',
//                   borderTop: '1px solid rgba(255,255,255,0.1)'
//                 }}>
//                   <div style={{ textAlign: 'center' }}>
//                     <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
//                       Profit Earned
//                     </div>
//                     <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#00ff88' }}>
//                       {testimonials[currentTestimonial].profit}
//                     </div>
//                   </div>

//                   <div style={{ textAlign: 'center' }}>
//                     <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
//                       Trading Period
//                     </div>
//                     <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffd700' }}>
//                       {testimonials[currentTestimonial].duration}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Testimonial Navigation Dots */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '10px',
//               marginTop: '2rem'
//             }}>
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   style={{
//                     width: '10px',
//                     height: '10px',
//                     borderRadius: '50%',
//                     border: 'none',
//                     background: index === currentTestimonial ? '#00ff88' : 'rgba(255,255,255,0.3)',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     padding: 0
//                   }}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Testimonial Navigation Arrows */}
//             <button
//               className="testimonial-nav prev"
//               onClick={prevTestimonial}
//               style={{
//                 position: 'absolute',
//                 left: '-60px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(0,0,0,0.5)',
//                 color: 'white',
//                 border: 'none',
//                 width: '50px',
//                 height: '50px',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 fontSize: '1.2rem',
//                 backdropFilter: 'blur(10px)',
//                 zIndex: 2
//               }}
//               aria-label="Previous testimonial"
//             >
//               <FaChevronLeft />
//             </button>

//             <button
//               className="testimonial-nav next"
//               onClick={nextTestimonial}
//               style={{
//                 position: 'absolute',
//                 right: '-60px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(0,0,0,0.5)',
//                 color: 'white',
//                 border: 'none',
//                 width: '50px',
//                 height: '50px',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 fontSize: '1.2rem',
//                 backdropFilter: 'blur(10px)',
//                 zIndex: 2
//               }}
//               aria-label="Next testimonial"
//             >
//               <FaChevronRight />
//             </button>
//           </div>

//           {/* Multiple Testimonials Grid (for larger screens) */}
//           <div className="testimonials-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '2rem',
//             marginTop: '4rem'
//           }}>
//             {testimonials.slice(0, 3).map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="testimonial-mini-card"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.03)',
//                   border: '1px solid rgba(255, 255, 255, 0.05)',
//                   borderRadius: '10px',
//                   padding: '1.5rem',
//                   height: '100%'
//                 }}
//               >
//                 <div style={{ display: 'flex', gap: '5px', marginBottom: '1rem' }}>
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} style={{ color: '#ffd700', fontSize: '0.9rem' }} />
//                   ))}
//                 </div>

//                 <p style={{
//                   fontSize: '0.95rem',
//                   lineHeight: '1.6',
//                   marginBottom: '1rem',
//                   color: '#cbd5e1'
//                 }}>
//                   "{testimonial.content.substring(0, 120)}..."
//                 </p>

//                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                   <div style={{
//                     width: '40px',
//                     height: '40px',
//                     background: 'linear-gradient(135deg, #00ff88, #00cc6a)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '1rem',
//                     fontWeight: 'bold',
//                     color: '#0a1a3a'
//                   }}>
//                     {testimonial.name.charAt(0)}
//                   </div>

//                   <div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{testimonial.name}</div>
//                     <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{testimonial.role}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Risk Management Section */}
//       <section style={{
//         padding: '80px 0',
//         background: 'linear-gradient(135deg, #0a1a3a 0%, #1a2b4a 100%)'
//       }}>
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="glass-card"
//             style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
//           >
//             <FaLock size={40} color="#00ff88" style={{ marginBottom: '1rem' }} />
//             <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
//               Professional Risk Management
//             </h2>
//             <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
//               We implement strict risk control measures to protect your capital
//             </p>

//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: '1.5rem',
//               marginTop: '2rem'
//             }}>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#ff4444',
//                   marginBottom: '0.5rem'
//                 }}>
//                   5%
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Maximum Daily Loss
//                 </div>
//               </div>

//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#00ff88',
//                   marginBottom: '0.5rem'
//                 }}>
//                   Up to 25%
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Daily Profit Target
//                 </div>
//               </div>

//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   color: '#ffd700',
//                   marginBottom: '0.5rem'
//                 }}>
//                   $100
//                 </div>
//                 <div style={{ color: '#94a3b8' }}>
//                   Minimum Deposit
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
