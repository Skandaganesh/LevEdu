"use client";

import { useSelector } from "react-redux";

const Content: React.FC = () => {
  const auth = useSelector((state: any) => state.user.auth);

  return (
    <main className="flex-grow p-6">
      {!auth ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to LevEdu</h2>
          <p>Login to access personalized analysis and resources.</p>
        </div>
      ) : (
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
      )}
    </main>
  );
};

export default Content;
