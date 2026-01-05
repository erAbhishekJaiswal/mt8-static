// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import ManagedTrading from './pages/ManagedTrading';
// import LiveMonitoring from './pages/LiveMonitoring';
// import ExpertGuidance from './pages/ExpertGuidance';
// import BookNow from './pages/BookNow';
// import Contact from './pages/Contact';
// import './styles/App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/managed-trading" element={<ManagedTrading />} />
//             <Route path="/services/live-monitoring" element={<LiveMonitoring />} />
//             <Route path="/services/expert-guidance" element={<ExpertGuidance />} />
//             <Route path="/book-now" element={<BookNow />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </AnimatePresence>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;








// Update src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingContactButtons from './components/FloatingContactButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ManagedTrading from './pages/ManagedTrading';
import LiveMonitoring from './pages/LiveMonitoring';
import ExpertGuidance from './pages/ExpertGuidance';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';
import './styles/App.css';
import './styles/Responsive.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/managed-trading" element={<ManagedTrading />} />
            <Route path="/services/live-monitoring" element={<LiveMonitoring />} />
            <Route path="/services/expert-guidance" element={<ExpertGuidance />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <FloatingContactButtons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// Update src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import AnimatedBackground from './components/AnimatedBackground';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import ManagedTrading from './pages/ManagedTrading';
// import LiveMonitoring from './pages/LiveMonitoring';
// import ExpertGuidance from './pages/ExpertGuidance';
// import BookNow from './pages/BookNow';
// import Contact from './pages/Contact';
// import './styles/App.css';
// import './styles/Responsive.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <AnimatedBackground />
//         <ScrollToTop />
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/services/managed-trading" element={<ManagedTrading />} />
//             <Route path="/services/live-monitoring" element={<LiveMonitoring />} />
//             <Route path="/services/expert-guidance" element={<ExpertGuidance />} />
//             <Route path="/book-now" element={<BookNow />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </AnimatePresence>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;