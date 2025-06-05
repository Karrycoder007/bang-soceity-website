"use client";

import React from "react";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  profile?: React.ReactNode;
  toggleSidebar: () => void;
}

export default function Navbar({ profile, toggleSidebar }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Hamburger menu for mobile */}
      <button
        className="text-gray-300 md:hidden focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FiMenu size={24} />
      </button>

      {/* Logo */}
      <div className="text-black font-bold text-xl select-none">Admin Panel</div>

      {/* Right side - User profile or fallback */}
      <div className="hidden md:flex items-center space-x-4">
        {profile ? (
          profile
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9 9 0 1118.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-300">Admin</span>
          </>
        )}
      </div>
    </nav>
  );
}
