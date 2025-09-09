
import { GoogleGenAI } from "@google/genai";
import type { WeatherData, ForecastData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWeatherInsight = async (
  city: string,
  currentWeather: WeatherData,
  forecast: ForecastData[]
): Promise<string> => {
  const prompt = `
    You are a friendly and enthusiastic weather forecaster. Based on the following weather data for ${city}, provide a short, engaging, and conversational summary (about 3-4 sentences) for someone planning their day and week.

    Current Weather:
    - Temperature: ${currentWeather.temperature}°C
    - Condition: ${currentWeather.condition}
    - Feels Like: ${currentWeather.feelsLike}°C
    - Wind: ${currentWeather.windSpeed} km/h
    - Humidity: ${currentWeather.humidity}%

    Forecast for the next 5 days:
    ${forecast.map(f => `- ${f.day}: ${f.temperature}°C, ${f.condition}`).join('\n')}

    Please:
    1. Start with a friendly greeting addressing the user in ${city}.
    2. Summarize today's weather and suggest an activity or clothing choice.
    3. Briefly mention what the rest of the week looks like, highlighting any significant changes (e.g., upcoming rain or a big temperature drop).
    4. Keep the tone light, positive, and easy to understand.
    5. Do not use markdown formatting.
    `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini insight:", error);
    throw new Error("Could not get weather insight from Gemini API.");
  }
};
