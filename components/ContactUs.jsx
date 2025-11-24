import React from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

function ContactUs() {
  return (
    <div className="font-sans">


      {/* Hero Section */}
      <section className="bg-[url('/contact_hero.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="text-center text-red-700  bg-red-50 bg-opacity-40 p-8 rounded-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl">We are here to help and answer any questions you might have.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-red-50 py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
              </div>
              <button type="submit" className="bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-red-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4"><strong>Address:</strong> 123 BloodConnect Ave, City, Country</p>
            <p className="text-gray-700 mb-4"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-gray-700 mb-4"><strong>Email:</strong> info@bloodbridge.com</p>
            <p className="text-gray-700 mb-4"><strong>Working Hours:</strong> Mon - Sat, 9AM - 6PM</p>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195507123293!2d-122.41941528468102!3d37.7749292797581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c12345678%3A0xabcdef1234567890!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-700 py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Ready to Save a Life?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join our community of blood donors and make a difference today.
          </p>
          <a href="/register">
            <button className="bg-white text-red-700 font-bold text-lg py-4 px-12 rounded-full shadow-2xl 
                               hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Become a Donor
            </button>
          </a>
        </div>
      </section>


    </div>
  );
}

export default ContactUs;
