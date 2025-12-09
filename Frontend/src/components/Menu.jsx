import React, { useState } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaHeart, 
  FaBell, 
  FaSignOutAlt, 
  FaArrowLeft, 
  FaUsers, 
  FaBox, 
  FaUserCheck 
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { persistor } from "../redux/store";

function Menu() {
  const [activeLink, setActiveLink] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge().then(() => {
      navigate("/");
    });
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  // إذا ماكانش فيه يوزر مسجل دخول
  if (!currentUser) {
    return null;
  }

  // عدد الإشعارات الغير مقروءة
  const unreadCount = currentUser.notifications?.filter(n => !n.read).length || 0;

  return (
    <div className='p-[20px] w-[350px] bg-gray-100 shadow-lg min-h-screen'>
      <div className='mt-[20px] pl-[20px]'>
        <h2 className='text-2xl font-bold text-red-600 mb-6'>
          {currentUser.role === "admin" ? "Admin Panel" : "Donor Dashboard"}
        </h2>
      </div>

      <ul className='flex flex-col items-start justify-start mt-[10px] pl-[20px]'>

        {/* ===== روابط مشتركة ===== */}
        <Link 
          to={currentUser.role === "admin" ? "/admin" : "/dashboard"} 
          onClick={() => handleActiveLink(currentUser.role === "admin" ? "/admin" : "/dashboard")}
        >
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold transition-all duration-200
            ${activeLink === (currentUser.role === "admin" ? "/admin" : "/dashboard") ? "bg-red-500 text-white p-[12px] rounded-lg shadow-md" : "text-gray-700 hover:text-red-600"}`}>
            <FaHome className="mr-[15px]" /> Home
          </li>
        </Link>

        {/* ===== روابط الـ Admin فقط ===== */}
        {currentUser.role === "admin" && (
          <>
            <Link to="/admin/donors" onClick={() => handleActiveLink("/admin/donors")}>
              <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold transition-all
                ${activeLink === "/admin/donors" ? "bg-red-500 text-white p-[12px] rounded-lg shadow-md" : "text-gray-700 hover:text-red-600"}`}>
                <FaBox className="mr-[15px]" /> Donors
              </li>
            </Link>

            <Link to="/admin/prospects" onClick={() => handleActiveLink("/admin/prospects")}>
              <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold transition-all
                ${activeLink === "/admin/prospects" ? "bg-red-500 text-white p-[12px] rounded-lg shadow-md" : "text-gray-700 hover:text-red-600"}`}>
                <FaUsers className="mr-[15px]" /> Prospects
              </li>
            </Link>

           
          </>
        )}

        {/* ===== روابط الـ Donor العادي فقط ===== */}
        {currentUser.role !== "admin" && (
          <>
            <Link to={`/dashboard/profile/${currentUser._id}`} onClick={() => handleActiveLink(`/dashboard/profile/${currentUser._id}`)}>
              <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold transition-all
                ${activeLink === `/dashboard/profile/${currentUser._id}` ? "bg-red-500 text-white p-[12px] rounded-lg shadow-md" : "text-gray-700 hover:text-red-600"}`}>
                <FaUser className="mr-[15px]" /> My Profile
              </li>
            </Link>

           
            <Link to="/dashboard/donations" onClick={() => handleActiveLink("/dashboard/donations")}>
              <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold transition-all
                ${activeLink === "/dashboard/donations" ? "bg-red-500 text-white p-[12px] rounded-lg shadow-md" : "text-gray-700 hover:text-red-600"}`}>
                <FaHeart className="mr-[15px]" /> My Donations
              </li>
            </Link>
          </>
        )}

        <hr className='w-full border-gray-300 my-[30px]' />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center text-[20px] cursor-pointer mt-[30px] font-semibold text-red-600 
            hover:bg-red-200 w-full p-[12px] rounded-lg transition"
        >
          <FaSignOutAlt className="mr-[15px]" /> Logout
        </button>

        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[20px] cursor-pointer mt-[20px] font-semibold text-gray-600 
            hover:bg-gray-200 w-full p-[12px] rounded-lg transition"
        >
          <FaArrowLeft className="mr-[15px]" /> Back to Home
        </button>
      </ul>
    </div>
  );
}

export default Menu;