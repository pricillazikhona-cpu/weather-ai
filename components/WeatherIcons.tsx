
import React from 'react';

const SunIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const CloudIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const CloudRainIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300">
    <line x1="16" y1="13" x2="16" y2="21"></line>
    <line x1="8" y1="13" x2="8" y2="21"></line>
    <line x1="12" y1="15" x2="12" y2="23"></line>
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
  </svg>
);

const CloudDrizzleIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-300">
      <line x1="8" y1="19" x2="8" y2="21"></line>
      <line x1="8" y1="13" x2="8" y2="15"></line>
      <line x1="16" y1="19" x2="16" y2="21"></line>
      <line x1="16" y1="13" x2="16" y2="15"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="12" y1="15" x2="12" y2="17"></line>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
    </svg>
  );

const CloudLightningIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
      <polyline points="13 11 9 17 15 17 11 23"></polyline>
    </svg>
);

const SnowflakeIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <line x1="17" y1="5" x2="7" y2="15"></line>
      <line x1="7" y1="5" x2="17" y2="15"></line>
      <line x1="22" y1="12" x2="2" y2="12"></line>
      <line x1="19" y1="17" x2="5" y2="7"></line>
      <line x1="5" y1="17" x2="19" y2="7"></line>
    </svg>
);

interface WeatherIconProps {
  condition: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <SunIcon />;
    case 'clouds':
      return <CloudIcon />;
    case 'rain':
      return <CloudRainIcon />;
    case 'drizzle':
        return <CloudDrizzleIcon />;
    case 'thunderstorm':
        return <CloudLightningIcon />;
    case 'snow':
        return <SnowflakeIcon />;
    default:
      return <CloudIcon />;
  }
};
