"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUserCircle, FaSignInAlt, FaChartLine } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white flex flex-col">
      
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
        <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaChartLine className="mr-2" />
            <Link href="/analysis">Analysis</Link>
          </li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaSignInAlt className="mr-2" />
            <Link href="/login">Login</Link>
          </li>
          <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
            <FaUserCircle className="mr-2" />
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
