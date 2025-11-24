import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { publicRequest } from "../requestMethod";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaWeight, FaTint, FaBirthdayCake, FaNotesMedical } from "react-icons/fa";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddProspect = async () => {
    try {
      await publicRequest.post("/prospect", inputs);
      toast.success("You have been successfully saved to the database.");
      setInputs({});
    } catch (error) {
      toast.warning("Make sure you have filled all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-white py-20 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 w-full max-w-3xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 text-center mb-6">
          Donate Blood - Register Here
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Fill in your information to become a hero and save lives.
        </p>

        {/* Name */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaUser className="text-red-500 mr-3" />
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            placeholder="John Doe"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaEnvelope className="text-red-500 mr-3" />
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            placeholder="jamesdoe@gmail.com"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Telephone */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaPhone className="text-red-500 mr-3" />
          <input
            type="text"
            name="tel"
            value={inputs.tel || ""}
            placeholder="+234 678 908"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaHome className="text-red-500 mr-3" />
          <input
            type="text"
            name="address"
            value={inputs.address || ""}
            placeholder="123 Sydney AUS"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Weight */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaWeight className="text-red-500 mr-3" />
          <input
            type="number"
            name="weight"
            value={inputs.weight || ""}
            placeholder="50kg"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Blood Group */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaTint className="text-red-500 mr-3" />
          <select
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Age */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaBirthdayCake className="text-red-500 mr-3" />
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            placeholder="30 years"
            className="w-full outline-none text-gray-700"
            onChange={handleChange}
          />
        </div>

        {/* Diseases */}
        <div className="flex items-start border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-red-500">
          <FaNotesMedical className="text-red-500 mr-3 mt-2" />
          <textarea
            name="diseases"
            value={inputs.diseases || ""}
            placeholder="Do you have any diseases?"
            className="w-full outline-none text-gray-700 resize-none"
            rows={3}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-red-700 text-white w-full py-4 rounded-2xl font-bold shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
          onClick={handleAddProspect}
        >
          Submit
        </button>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contact;
