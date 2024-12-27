"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaUserCircle, FaSignInAlt, FaChartLine, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const SideBar = () => {
  const auth = useSelector((state) => state.user.auth);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className="p-2 bg-gray-800 text-white fixed top-5 left-3 z-50 rounded-md hover:bg-gray-700 "
        onClick={toggleSidebar}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <nav className="flex-1 mt-5">
          <ul className="space-y-5">
            <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center">
              <FaHome className="mr-2" />
              <Link href="/reels">Reels</Link>
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

      {/* Overlay (optional, to close sidebar when clicked outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
    </>
  );
};

export default SideBar;
