"use client"

import { logout } from "@/redux/reducers/userReducer";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = useSelector((state:any) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    const verify = window.confirm("Are you sure you want to logout?");
    if (verify) {
      dispatch(logout());
    }
  }

  return (
    <>
  <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral-900 p-4 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-red-500 flex items-center">
        <span className="mr-3">📹</span>LevEdu
      </div>

      {/* Profile Dropdown */}
      {user.auth && 
      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 text-white focus:outline-none"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Default profile image
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-gray-400 hover:border-white"
          />
        </button>

        <div
          className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transform origin-top-right transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-50 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-4 py-2 border-b text-gray-800 text-sm">
            Hello  <span className="font-semibold">{user.name ||"User"}</span>
          </div>
            <button
            onClick={() => { alert("Change Password") }}
            className="block w-full px-4 py-2 text-left text-sm text-blue-500 hover:bg-gray-100"
            >
            Change Password
          </button>
          <button
            onClick={onLogout}
            className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
          </div>
      </div>}
    </header>
        </>
);
}

export default Navbar;
