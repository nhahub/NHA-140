import React, { useEffect, useState } from "react";
import { FaHeart, FaPlusCircle, FaTint, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setLoading(false);
      return;
    }

  
    const sample = [
      {
        id: 1,
        date: "2025-01-12",
        location: "Alexandria Blood Bank",
        units: 1,
        status: "Completed",
      },
      {
        id: 2,
        date: "2024-09-21",
        location: "Smouha Medical Center",
        units: 1,
        status: "Completed",
      },
      {
        id: 3,
        date: "2024-04-11",
        location: "El Shatby Hospital",
        units: 1,
        status: "Completed",
      }
    ];

    setDonations(sample);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-gray-600">
        Loading donations...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      
      <h1 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-3">
        <FaHeart /> My Donations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
          <h2 className="text-gray-600 font-semibold mb-2">Total Donations</h2>
          <p className="text-3xl font-bold text-red-600">{donations.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
          <h2 className="text-gray-600 font-semibold mb-2">Total Units Donated</h2>
          <p className="text-3xl font-bold text-red-600">
            {donations.reduce((sum, d) => sum + d.units, 0)} Bags
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
          <h2 className="text-gray-600 font-semibold mb-2">Last Donation</h2>
          <p className="text-xl font-bold text-red-600">
            {donations[0]?.date || "No donations yet"}
          </p>
        </div>

      </div>

     
      <div className="flex justify-end mb-6">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md">
          <FaPlusCircle /> Add Donation
        </button>
      </div>

   
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Units</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} className="border-b hover:bg-red-50 transition">
                <td className="py-3 px-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-red-500" />
                  {donation.date}
                </td>

                <td className="py-3 px-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {donation.location}
                </td>

                <td className="py-3 px-4 flex items-center gap-2">
                  <FaTint className="text-red-500" /> {donation.units}
                </td>

                <td className="py-3 px-4">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                    {donation.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Donations;
