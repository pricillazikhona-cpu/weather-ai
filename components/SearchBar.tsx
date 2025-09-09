
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  initialCity: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialCity }) => {
  const [city, setCity] = useState(initialCity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="w-full p-3 rounded-lg bg-black/30 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
