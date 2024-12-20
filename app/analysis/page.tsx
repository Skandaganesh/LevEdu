"use client"; // Add this directive at the top

import React from "react";

const AnalysisPage: React.FC = () => {
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Your Learning Analysis</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Video Watched</h3>
        <p>35 Videos</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Quiz Performance</h3>
        <p>85% Accuracy</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Learning Time</h3>
        <p>12 Hours This Week</p>
      </div>
    </div>
  </div>
  );
};

export default AnalysisPage;
