import { useNavigate } from "react-router-dom";
import Donor from "./Donor";

const DonorDashboard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white p-6 flex flex-col items-center">
     
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        Welcome, {user?.name || "User"}!
      </h1>
      <p className="text-gray-700 mb-10 text-center max-w-xl">
        This is your dashboard home. Here you can see your profile, your donation history, and latest updates.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-300"
          onClick={() => navigate("/user/profile")}
        >
          My Profile
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-300"
          onClick={() => navigate("/user/donations")}
        >
          My Donations
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-300"
          onClick={() => navigate("/user/notifications")}
        >
          Notifications
        </button>
      </div>

      
      <div className="mt-12 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Updates</h2>
        <ul className="space-y-3 text-gray-700">
          <li>- You have 2 upcoming donation appointments.</li>
          <li>- New blood donation campaigns near your area.</li>
          <li>- Remember to update your profile if anything changed.</li>
        </ul>
      </div>
    </div>
  );
};

export default DonorDashboard;