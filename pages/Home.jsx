import React from 'react'
import Navbar from './../components/Navbar';
import Hero from '../components/Hero';
import Featured from './../components/Featured';
import Contact from '../components/Contact';
import Footer from './../components/Footer';
import {Element} from "react-scroll"
import { Routes, Route } from 'react-router-dom';
import Statistics from '../components/Statistics';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Aboutus from '../components/Aboutus';
import WhyDonate from '../components/WhyDonate';
import { Link } from 'react-router-dom';

function Home() {
 return (
    <div className="font-sans">
      
      <Hero />

      {/* About Us Section - Impressive Banner Image */}
    <section className="relative bg-white py-20 px-8 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-red-700 mb-4 tracking-tight">
          Our Commitment: A Bridge to Life
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
          BloodBridge is committed to saving lives by connecting blood donors with hospitals in need. 
          Our mission is simple: encourage everyone to donate blood regularly and help patients in critical conditions.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-10">
        <img 
          src="/386791 (1).jpg" 
          alt="Blood Donation Scene" 
          className="w-full h-96 object-cover rounded-3xl shadow-2xl transition duration-500 ease-in-out hover:scale-[1.01]" 
        />
      </div>
    </section>

  <section className="relative py-24 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold text-red-700 mb-4">Why Your Donation Matters</h2>
    <p className="text-lg text-gray-500 mb-16">
      Every act of generosity has a profound ripple effect.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-3xl shadow-xl border-t-4 border-red-600 
                      hover:shadow-red-300/50 transition duration-300 transform hover:-translate-y-1">
        <div className="overflow-hidden rounded-2xl mb-6 mx-4">
          <img 
            src="/image.png" 
            alt="Save Lives" 
            className="w-full h-52 object-cover transition duration-500 ease-in-out hover:scale-105" 
          />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-red-600">Save Lives</h3>
        <p className="text-gray-600 px-4 mb-6">
          Your donation can save up to 3 lives, providing hope and a second chance. Every drop counts!
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl shadow-xl border-t-4 border-red-600
                      hover:shadow-red-300/50 transition duration-300 transform hover:-translate-y-1">
        <div className="overflow-hidden rounded-2xl mb-6 mx-4">
          <img 
            src="/images.jpeg" 
            alt="Health Benefits" 
            className="w-full h-52 object-cover transition duration-500 ease-in-out hover:scale-105 opacity-90" 
          />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-red-600">Health Benefits</h3>
        <p className="text-gray-600 px-4 mb-6">
          Regular donation stimulates blood production and circulation, which can improve your overall cardiovascular health.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl shadow-xl border-t-4 border-red-600
                      hover:shadow-red-300/50 transition duration-300 transform hover:-translate-y-1">
        <div className="overflow-hidden rounded-2xl mb-6 mx-4">
          <img 
            src="/Community-Focused-Giving-e1731334271407.jpg" 
            alt="Community Impact" 
            className="w-full h-52 object-cover transition duration-500 ease-in-out hover:scale-105 opacity-90" 
          />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-red-600">Community Impact</h3>
        <p className="text-gray-600 px-4 mb-6">
          Joining donation programs strengthens community bonds and ensures a stable supply for emergencies and routine treatments.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* NEW SECTION: Donor Eligibility Criteria */}
    <section className="bg-red-50 py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-700 mb-4 text-center">Who Can Donate? </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          It takes just a few simple conditions to qualify and become a hero.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-xl shadow-xl border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic Requirements</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">•</span>
                **Age:** Be at least 18 years old.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">•</span>
                **Weight:** Weigh at least 110 lbs (50 kg).
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">•</span>
                **Health:** Be in generally **good health** and feeling well on the day of donation.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">•</span>
                **Identification:** Bring a valid ID or Donor Card.
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-xl border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Exclusions & Wait Times</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">×</span>
                **Recent Tattoo/Piercing:** Must wait 3 months after receiving a tattoo or piercing.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">×</span>
                **Illness:** Cannot donate while experiencing cold, flu, or infection symptoms.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">×</span>
                **Travel:** Specific waiting periods apply after traveling to malaria-risk areas.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 text-xl mr-3">×</span>
                **Interval:** Wait at least 56 days since your last whole blood donation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* --- */}

    {/* How To Donate Section - Step-by-Step Focus */}
    <section className="bg-white py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-700 mb-4 text-center">Four Simple Steps to Donate</h2>
        <p className="text-lg text-gray-500 mb-16 text-center">
          We make the donation process safe, quick, and rewarding.
        </p>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {/* Step 1: Register */}
          <div className="p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-extrabold text-red-600">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Register</h3>
            <p className="text-gray-600">Sign up online or at one of our welcoming centers to begin.</p>
          </div>
          {/* Step 2: Screening */}
          <div className="p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-extrabold text-red-600">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Screening</h3>
            <p className="text-gray-600">A quick health check ensures safety for both you and the patient.</p>
          </div>
          {/* Step 3: Donate */}
          <div className="p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-extrabold text-red-600">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Donate</h3>
            <p className="text-gray-600">The safe and simple donation procedure, supervised by professionals.</p>
          </div>
          {/* Step 4: Recovery */}
          <div className="p-8 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-extrabold text-red-600">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Refresh</h3>
            <p className="text-gray-600">Enjoy refreshments, rest briefly, and then get back to your day!</p>
          </div>
        </div>
      </div>
    </section>

    {/* Success Stories - Testimonials Section */}
    <section className="bg-red-50 py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-4">Hear From Our Community</h2>
        <p className="text-lg text-gray-500 mb-16">
          The real impact of your generosity.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Story 1: Recipient */}
          <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <blockquote className="italic text-gray-700 text-lg relative z-10">
              "I was critically ill, and the blood I received saved my life. Knowing there are people who care enough to donate is truly humbling. Thank you to all the donors!"
            </blockquote>
            <span className="block mt-6 font-semibold text-xl text-red-600 relative z-10">— Sarah A., Recipient</span>
            <span className="absolute right-4 bottom-4 text-7xl font-serif text-red-100">“</span>
          </div>
          {/* Story 2: Donor */}
          <div className="bg-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <blockquote className="italic text-gray-700 text-lg relative z-10">
              "Donating blood gave me a sense of pride and a tangible contribution to the community. The process was easy, and the staff were wonderful. Highly recommend it."
            </blockquote>
            <span className="block mt-6 font-semibold text-xl text-red-600 relative z-10">— Ahmed M., Donor</span>
            <span className="absolute right-4 bottom-4 text-7xl font-serif text-red-100">“</span>
          </div>
        </div>
      </div>
    </section>

    {/* Call To Action - Strong and Centralized */}
    <section className="bg-red-700 py-24 px-8 md:px-20 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-4">Ready to Save a Life Today?</h2>
        <p className="text-xl mb-10 opacity-90">
          The need is constant. Your impact is immediate. Join the BloodBridge community.
        </p>
        <a href="/contact">
          <button className="bg-white text-red-700 font-bold text-lg py-4 px-12 rounded-full shadow-2xl 
                           hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Find a Center & Donate Now
          </button>
        </a>
      </div>
    </section>

      
    </div>
  );
}

export default Home
 
   