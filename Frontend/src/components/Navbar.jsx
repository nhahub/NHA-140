import React from 'react'
import { Link } from 'react-router-dom';
import Contact from './Donate';

function Navbar() {
   return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-8 md:px-20">
        <img src="/logo1.png" alt="BloodBridge Logo" className="h-16 cursor-pointer" />
        <div className="flex items-center gap-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/about-us" className="hover:text-red-600 transition-colors">About Us</Link>
          <Link to="/donate" className="hover:text-red-600 transition-colors">Donate</Link>
          <Link to="/contact2" className="hover:text-red-600 transition-colors">Contact Us</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/login">
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white py-2 px-5 rounded-lg shadow">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-gray-800 hover:bg-gray-900 transition-colors text-white py-2 px-5 rounded-lg shadow">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
