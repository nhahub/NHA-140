// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${process.env.VITE_API_URL}/api/auth/forgot-password`, { email });
      toast.success("Password reset link sent to your email!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Email not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2">

          {/* الصورة */}
          <div className="hidden lg:flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: "url('/WhatsApp Image 2025-11-01 at 20.08.39_f4d36964.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white p-10">
              <h1 className="text-5xl font-bold mb-4">Blood Bridge</h1>
              <p className="text-xl">Recover Your Account</p>
            </div>
          </div>

          {/* النموذج */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-red-700">Forgot Password?</h2>
              <p className="text-gray-600 mt-3">Enter your email and we'll send you a reset link</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 rounded-xl transition transform hover:scale-105 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link to="/login" className="text-red-600 font-bold hover:underline text-lg">
                ← Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;