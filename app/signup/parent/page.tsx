"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Lakshadweep", "Delhi", "Puducherry", "Other"
];

const ParentSignUp = () => {
  const [parentData, setParentData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    street: "",
    state: "",
    studentEmail: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/signup/parent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parentData),
    });

    if (response.ok) {
      router.push("/parent-dashboard");
    } else {
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Parent Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={parentData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={parentData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            value={parentData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="phone"
            value={parentData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="city"
            value={parentData.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="street"
            value={parentData.street}
            onChange={handleInputChange}
            placeholder="Street"
            className="w-full p-3 border rounded-md"
            required
          />
          <select
            name="state"
            value={parentData.state}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
            required
          >
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="email"
            name="studentEmail"
            value={parentData.studentEmail}
            onChange={handleInputChange}
            placeholder="Student Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentSignUp;
