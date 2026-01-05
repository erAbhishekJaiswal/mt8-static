// import React, { useState, useEffect } from 'react';

// // Add this inside the special offer section of PopupModal.jsx
// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 2,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         } else {
//           clearInterval(timer);
//           return prev;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div >
//       <div style={{ fontSize: '0.9rem', color: '#94a3b8', textAlign: 'center', marginBottom: '10px' }}>
//         Offer expires in:
//       </div>
//       <div className="countdown-timer">
//         <div className="countdown-item">
//           <span className="countdown-number">
//             {timeLeft.hours.toString().padStart(2, '0')}
//           </span>
//           <span className="countdown-label">HOURS</span>
//         </div>
//         <div style={{ color: '#94a3b8', alignSelf: 'center' }}>:</div>
//         <div className="countdown-item">
//           <span className="countdown-number">
//             {timeLeft.minutes.toString().padStart(2, '0')}
//           </span>
//           <span className="countdown-label">MINUTES</span>
//         </div>
//         <div style={{ color: '#94a3b8', alignSelf: 'center' }}>:</div>
//         <div className="countdown-item">
//           <span className="countdown-number">
//             {timeLeft.seconds.toString().padStart(2, '0')}
//           </span>
//           <span className="countdown-label">SECONDS</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;








import React, { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-01-09T00:00:00'); // 9 Jan 2026, 12:00 AM local time

const getTimeLeft = () => {
  const now = new Date();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { hours, minutes, seconds };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div
        style={{
          fontSize: '0.9rem',
          color: '#29fa53ff',
          textAlign: 'center',
          marginBottom: '10px'
        }}
      >
        TM9 lunches on <strong>9 January 2026</strong>
      </div>

      <div className="countdown-timer">
        <div className="countdown-item">
          <span className="countdown-number">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="countdown-label">HOURS</span>
        </div>

        <div style={{ color: '#94a3b8', alignSelf: 'center' }}>:</div>

        <div className="countdown-item">
          <span className="countdown-number">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="countdown-label">MINUTES</span>
        </div>

        <div style={{ color: '#94a3b8', alignSelf: 'center' }}>:</div>

        <div className="countdown-item">
          <span className="countdown-number">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
