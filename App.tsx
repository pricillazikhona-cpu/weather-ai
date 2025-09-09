
import React, { useState, useCallback } from 'react';
import type { WeatherData, ForecastData } from './types';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import GeminiInsight from './components/GeminiInsight';
import Loader from './components/Loader';
import { getWeatherInsight } from './services/geminiService';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('San Francisco');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [geminiInsight, setGeminiInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateMockWeatherData = (cityName: string): { current: WeatherData; forecast: ForecastData[] } => {
    const citySeed = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    const conditions = ['Clear', 'Clouds', 'Rain', 'Drizzle', 'Thunderstorm', 'Snow'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const currentCondition = conditions[citySeed % conditions.length];
    const currentTemp = 10 + (citySeed % 20);

    const current: WeatherData = {
      city: cityName,
      temperature: currentTemp,
      condition: currentCondition,
      feelsLike: currentTemp - 2 + ((citySeed * 2) % 5),
      humidity: 40 + (citySeed % 50),
      windSpeed: 5 + (citySeed % 15),
    };

    const forecast = days.map((day, i) => {
      const forecastSeed = citySeed + i * 10;
      return {
        day,
        condition: conditions[forecastSeed % conditions.length],
        temperature: currentTemp - 3 + (forecastSeed % 8),
      };
    });

    return { current, forecast };
  };

  const handleSearch = useCallback(async (searchCity: string) => {
    if (!searchCity) return;
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null);
    setGeminiInsight('');

    try {
      const { current, forecast } = generateMockWeatherData(searchCity);
      
      setCity(searchCity);
      setWeatherData(current);
      setForecastData(forecast);

      const insight = await getWeatherInsight(searchCity, current, forecast);
      setGeminiInsight(insight);

    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather insights. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const getBackgroundGradient = (condition: string | undefined): string => {
    switch (condition?.toLowerCase()) {
      case 'clear':
        return 'from-sky-400 to-blue-600';
      case 'clouds':
        return 'from-slate-400 to-gray-600';
      case 'rain':
      case 'drizzle':
      case 'thunderstorm':
        return 'from-slate-600 to-gray-800';
      case 'snow':
        return 'from-sky-200 to-slate-400';
      default:
        return 'from-gray-700 via-gray-900 to-black';
    }
  };
  
  const backgroundClass = getBackgroundGradient(weatherData?.condition);

  return (
    <div className={`min-h-screen w-full font-sans text-white p-4 sm:p-8 transition-all duration-500 bg-gradient-to-br ${backgroundClass}`}>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Weather AI</h1>
          <a href="https://github.com/google/genai-js" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
        </header>

        <main>
          <SearchBar onSearch={handleSearch} initialCity={city} />
          
          {loading && <Loader />}
          
          {error && (
            <div className="bg-red-500/50 text-white p-4 rounded-lg mt-4 text-center">
              <p className="font-bold">An Error Occurred</p>
              <p>{error}</p>
            </div>
          )}

          {!loading && weatherData && forecastData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col gap-8">
                <CurrentWeather data={weatherData} />
                <Forecast data={forecastData} />
              </div>
              <div>
                <GeminiInsight insight={geminiInsight} isLoading={!geminiInsight && !error} />
              </div>
            </div>
          )}

           {!loading && !weatherData && (
            <div className="text-center mt-20">
              <p className="text-2xl text-white/80">Enter a city to get started</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
