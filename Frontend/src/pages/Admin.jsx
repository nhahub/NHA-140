import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Admin() {
  const { currentUser } = useSelector((state) => state.user);

  const [numOfProspects, setNumOfProspects] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [latestDonors, setLatestDonors] = useState([]);

  useEffect(() => {
    const fetchProspectsAndDonors = async () => {
      try {
        const prospectsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/prospect`,
          {
            headers: { token: `Bearer ${currentUser.accessToken}` },
          }
        );
        setNumOfProspects(prospectsRes.data.length);

        const donorsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/donor`,
          {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          }
        );

        const donorsData = donorsRes.data;

        setTotalDonors(donorsData.length);

        const lastFive = donorsData.slice(-5).reverse();
        setLatestDonors(lastFive);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchProspectsAndDonors();
  }, [currentUser]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-black">Dashboard</h1>
        </div>

        {/* === GRID CARDS === */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                          transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="font-semibold text-black mb-4">Total Prospects</h2>

            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full 
                              border-[8px] border-black 
                              flex items-center justify-center
                              transition-all duration-500 hover:border-red-500 hover:shadow-red-500/40 hover:shadow-lg">
                <span className="text-xl font-bold text-black">{numOfProspects}</span>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-4">Registered Prospects</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                          transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="font-semibold text-black mb-4">Total Donors</h2>

            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full 
                              border-[8px] border-red-500 
                              flex items-center justify-center
                              transition-all duration-500 hover:border-black hover:shadow-black/40 hover:shadow-lg">
                <span className="text-xl font-bold text-black">{totalDonors}</span>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-4">All Registered Donors</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                          transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="font-semibold text-black mb-4">Unit Status</h2>
            <div className="grid grid-cols-4 gap-3">
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((t) => (
                <div
                  key={t}
                  className="bg-red-100 text-red-600 font-semibold text-center py-2 rounded-lg
                             transition duration-300 hover:bg-red-500 hover:text-white hover:shadow-md"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="grid grid-cols-2 gap-8">

          {/* RECENT DONORS */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                          transition transform duration-300 hover:shadow-xl">
            <h2 className="font-semibold text-black mb-4">Recent Donors</h2>

            <div className="space-y-4">
              {latestDonors.map((donor) => (
                <div
                  key={donor._id}
                  className="bg-gray-50 p-4 rounded-xl flex items-center justify-between shadow-sm
                             transition-all duration-300 hover:scale-[1.02] hover:bg-red-50 hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold text-black">{donor.name}</p>
                    <p className="text-sm text-gray-600">{donor.type}</p>
                  </div>

                  <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold text-sm
                                   transition duration-300 hover:bg-black hover:text-white">
                    New
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200
                          transition transform duration-300 hover:shadow-xl">
            <h2 className="font-semibold text-black mb-4">Track Nearby Donors</h2>

            <div className="bg-gray-300 w-full h-[300px] rounded-xl flex items-center justify-center text-gray-700
                            transition duration-300 hover:bg-gray-400 hover:text-black hover:shadow-lg">
              Map coming soon
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin;
