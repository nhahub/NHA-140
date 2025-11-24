import React from 'react'

function Featured() {
   return (
    <div className="font-sans">

      

      {/* Hero Section */}
      <section className=" bg-cover bg-center h-[60vh] flex items-center justify-center shadow hover:shadow-lg transition transform hover:-translate-y-1">
        <div className="text-center text-red-700  bg-red-50 bg-opacity-40 p-8 rounded-2xl">
          <h1 className="text-5xl font-extrabold mb-4">About BloodBridge</h1>
          <p className="text-xl">Connecting Donors with Lives in Need</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-red-50 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To save lives by connecting blood donors with hospitals and patients in need. 
                We strive to build a reliable network of donors who are committed to helping others.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                A world where no patient suffers due to a shortage of blood. 
                We aim to create awareness and inspire people to donate regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-red-50 rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/team1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah A.</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-red-50 rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/team2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ahmed M.</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-red-50 rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <img src="/team3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lina K.</h3>
              <p className="text-gray-600">Community Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-700 py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-10 opacity-90">
            Become a blood donor and help save lives today. Your contribution matters!
          </p>
          <a href="/contact">
            <button className="bg-white text-red-700 font-bold text-lg py-4 px-12 rounded-full shadow-2xl 
                               hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </a>
        </div>
      </section>

     

    </div>
  );
}
export default Featured
