import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GiDroplets } from "react-icons/gi";
import { MdSick } from "react-icons/md";
import { FaWeight } from "react-icons/fa";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser?.email) {
          setLoading(false);
          return;
        }

        const email = storedUser.email;

        // Fetch donors
        const donorRes = await fetch(`${import.meta.env.VITE_API_URL}/api/donor`);
        const donors = await donorRes.json();
        const donorMatch = donors.find((d) => d.email === email);

        if (donorMatch) {
          setProfile({ ...donorMatch, type: "Approved" });
          setLoading(false);
          return;
        }

        // Fetch prospects
        const prospectRes = await fetch(`${import.meta.env.VITE_API_URL}/api/prospect`);
        const prospects = await prospectRes.json();
        const prospectMatch = prospects.find((p) => p.email === email);

        if (prospectMatch) {
          setProfile({ ...prospectMatch, type: "Pending" });
          setLoading(false);
          return;
        }

        // If not found in both → create empty profile
        setProfile({
          name: "",
          address: "",
          tel: "",
          bloodgroup: "",
          diseases: "",
          weight: "",
          email,
          type: "Unknown",
        });

      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 text-xl">
        Loading profile...
      </div>
    );

  if (!profile)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-xl">
        User not found
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-white p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-red-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-200 flex items-center justify-center text-4xl text-red-700 font-bold shadow-lg">
            {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
          </div>
          <h2 className="text-3xl font-bold text-red-700 mt-4">
            {profile.name || "No Name"}
          </h2>

          {/* Status Badge */}
          <span
            className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
              profile.type === "Approved"
                ? "bg-green-100 text-green-700"
                : profile.type === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {profile.type}
          </span>
        </div>

        {/* Info List */}
        <ul className="space-y-4 text-gray-700">

          <li className="flex items-center gap-3">
            <AiOutlineHome className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Address:</span> {profile.address || "-"}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <AiOutlinePhone className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Tel:</span> {profile.tel || "-"}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <GiDroplets className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Blood Type:</span> {profile.bloodgroup || "-"}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <MdSick className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Disease:</span> {profile.diseases || "None"}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <FaWeight className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Weight:</span>
              {profile.weight ? ` ${profile.weight} Kg` : "-"}
            </div>
          </li>

          <li className="flex items-center gap-3">
            <AiOutlineMail className="text-red-500 text-xl" />
            <div>
              <span className="font-semibold">Email:</span> {profile.email}
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
