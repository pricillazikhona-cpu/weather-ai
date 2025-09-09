
import React from 'react';
import type { ForecastData } from '../types';
import { WeatherIcon } from './WeatherIcons';

interface ForecastProps {
  data: ForecastData[];
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  return (
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-bold mb-4">5-Day Forecast</h3>
      <div className="space-y-3">
        {data.map((dayForecast) => (
          <div key={dayForecast.day} className="flex justify-between items-center">
            <p className="w-1/3 text-white/80">{dayForecast.day}</p>
            <div className="w-8 h-8">
              <WeatherIcon condition={dayForecast.condition} />
            </div>
            <p className="font-bold text-right">{Math.round(dayForecast.temperature)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
