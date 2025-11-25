import React from 'react'

function WhyDonate() {
  return (
    <section className="bg-red-50 py-20 px-8 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-red-600">Save Lives</h3>
          <p>Every donation can help save up to 3 lives. Your contribution matters!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-red-600">Health Benefits</h3>
          <p>Donating blood can improve your own health by stimulating blood production and circulation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-red-600">Community Impact</h3>
          <p>Joining blood donation programs strengthens community bonds and helps those in urgent need.</p>
        </div>
      </div>
    </section>
  );
}


export default WhyDonate