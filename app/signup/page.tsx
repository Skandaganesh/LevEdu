"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedUserType(value);
  };

  useEffect(() => {
    if (selectedUserType) {
      setLoading(true); // Start loading animation
      setTimeout(() => {
        router.push(`/signup/${selectedUserType}`);
      }, ); // Simulate delay before navigation
    }
  }, [selectedUserType, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select User Type
          </label>
          <select
            className="w-full p-3 border rounded-md"
            value={selectedUserType ?? ""}
            onChange={handleSelectChange}
          >
            <option value="">Select...</option>
            <option value="student">Student</option>
            <option value="educator">Educator</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
