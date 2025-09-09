
import React from 'react';
import type { WeatherData } from '../types';
import { WeatherIcon } from './WeatherIcons';

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold">{data.city}</h2>
                <p className="text-white/80">{data.condition}</p>
            </div>
            <div className="w-20 h-20">
                <WeatherIcon condition={data.condition} />
            </div>
        </div>
        <p className="text-7xl font-extrabold my-4">{Math.round(data.temperature)}°C</p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-white/70">Feels Like</p>
          <p className="font-bold">{Math.round(data.feelsLike)}°</p>
        </div>
        <div>
          <p className="text-sm text-white/70">Humidity</p>
          <p className="font-bold">{data.humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-white/70">Wind</p>
          <p className="font-bold">{data.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
