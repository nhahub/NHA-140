import { useState } from "react";
import { publicRequest } from "../requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewDonor = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDonors = async () => {
    try {
      if (
        !inputs.name ||
        !inputs.address ||
        !inputs.tel ||
        !inputs.bloodgroup ||
        !inputs.email ||
        !inputs.weight ||
        !inputs.date
      ) {
        toast.warning("Please fill all required fields.");
        return;
      }
      await publicRequest.post("/donor", inputs);
      toast.success("Donor successfully created!");
      setInputs({});
    } catch (error) {
      toast.error("Failed to create donor. Please check all fields.");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-b from-red-50 to-white p-10">
    
      <div className="w-[450px] bg-white shadow-2xl rounded-3xl p-6 md:p-8 mr-5">
        <h2 className="text-2xl font-bold text-red-600 mb-6">New Donor</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={inputs.address || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="tel"
            name="tel"
            placeholder="Telephone"
            value={inputs.tel || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <select
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>
      </div>

 
      <div className="w-[450px] bg-white shadow-2xl rounded-3xl p-6 md:p-8 ml-5">
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={inputs.weight || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <input
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition"
          />
          <textarea
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            placeholder="Any diseases?"
            className="border-2 border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
            rows={3}
          />
          <button
            onClick={handleDonors}
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold shadow-lg transition transform hover:scale-105"
          >
            Create Donor
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default NewDonor;
