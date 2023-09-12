"use client";

import React, { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-64" : "w-60"
      } bg-gray-800 text-white fixed top-0 left-0 transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Dashboard</div>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? (
            <i className="fas fa-times text-white hover:text-white"></i>
          ) : (
            <i className="fas fa-bars text-white hover:text-white"></i>
          )}
        </button>
      </div>
      <ul className="p-4">
        <li className="mb-4">
          <a href="#" className="flex items-center hover:text-white">
            <i className="fas fa-home mr-2"></i>
            Home
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center hover:text-white">
            <i className="fas fa-chart-pie mr-2"></i>
            Analytics
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center hover:text-white">
            <i className="fas fa-cogs mr-2"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLayout;
