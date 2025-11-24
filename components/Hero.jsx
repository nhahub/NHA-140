import React from 'react'
import { splitAtTopLevelOnly } from './../../node_modules/tailwindcss/src/util/splitAtTopLevelOnly';
import { Link } from 'react-router-dom';

function Hero() {
 return (
    <div className="relative bg-[url('/Medical_team_about_page_405f6ede.png')] bg-cover bg-center h-screen flex items-center">
      <div className="bg-red-900/60 w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 flex flex-col text-white max-w-3xl px-8 md:px-20">
        <span className="text-3xl md:text-4xl font-semibold mb-4">Donate Blood, Save Lives!</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
          Your blood can bring a smile to someone else's life.
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Join us today and help save lives through your blood donation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
              Donate Now
            </button>
          </Link>
          <a href="tel:01115876820">
            <button className="bg-gray-800 hover:bg-gray-900 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
              Call: 01115876820
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero