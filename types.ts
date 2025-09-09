
export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
}

export interface ForecastData {
  day: string;
  temperature: number;
  condition: string;
}
