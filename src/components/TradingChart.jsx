// src/components/TradingChart.jsx
import React, { useEffect, useRef } from 'react';

const TradingChart = ({ symbol = 'EURUSD', theme = 'dark' }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": `FX:${symbol}`,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": theme,
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "hide_legend": true,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    });
    
    container.current.innerHTML = '';
    container.current.appendChild(script);
    
    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, [symbol, theme]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '400px', width: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Chart by TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingChart;