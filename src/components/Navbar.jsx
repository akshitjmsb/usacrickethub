import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <NavLink
          to="/"
          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
        >
          Home
        </NavLink>
        <span className="text-gray-400 cursor-not-allowed">Scores</span>
        <span className="text-gray-400 cursor-not-allowed">Map</span>
        <span className="text-gray-400 cursor-not-allowed">News</span>
      </div>
      <span className="text-xs text-gray-400">USA Cricket Hub</span>
    </nav>
  );
}
