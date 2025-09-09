
import React from 'react';

interface GeminiInsightProps {
  insight: string;
  isLoading: boolean;
}

const GeminiInsight: React.FC<GeminiInsightProps> = ({ insight, isLoading }) => {
  return (
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg h-full">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <i className="fas fa-brain text-sky-400"></i>
        AI Weather Insight
      </h3>
      {isLoading ? (
        <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-white/20 rounded w-full"></div>
            <div className="h-4 bg-white/20 rounded w-5/6"></div>
            <div className="h-4 bg-white/20 rounded w-full"></div>
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
        </div>
      ) : (
        <p className="text-white/90 leading-relaxed">{insight}</p>
      )}
    </div>
  );
};

export default GeminiInsight;
