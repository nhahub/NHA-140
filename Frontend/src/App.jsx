import { RouterProvider, createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospect from "./pages/Prospect";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";
import NewDonor from "./pages/NewDonor";
import Donor from "./pages/Donor";
import PublicLayout from "./pages/PublicLayout";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PendingUsers from "./pages/PendingUsers";
import Notifications from "./pages/Notifications";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactUs from "./components/ContactUs";
import DonorDashboard from "./pages/DonorDashboard";
import UserProfile from "./pages/UserProfile";
import Donations from "./pages/Donations";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ResetPassword";


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      <header className="w-full md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm">
        <button
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-md focus:outline-none focus:ring"
        >
         
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-lg font-semibold">Dashboard</div>
        <div />
      </header>

     
      <aside className="hidden md:block w-72 bg-white border-r">
        <Menu />
      </aside>

     
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-white shadow-lg overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-lg font-semibold">Menu</div>
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md focus:outline-none focus:ring"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Menu />
            </div>
          </div>
        </div>
      )}

     
      <main className="flex-1 p-4 md:p-7 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "featured", element: <Featured /> },
      { path: "contact", element: <Contact /> },
      { path: '/contact2', element: <ContactUs /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  {path: "/reset-password/:token", element: <ResetPassword /> },
  
  
  


 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DonorDashboard /> },         
      { path: "notifications", element: <Notifications /> },
      { path: "profile/:userId", element: <UserProfile /> },
      {path: "donations", element: <Donations /> },
        
    ],
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Admin /> },
      { path: "donors", element: <Donors /> },
      { path: "prospects", element: <Prospects /> },
      { path: "prospect/:id", element: <Prospect /> },
      { path: "newdonor", element: <NewDonor /> },
      { path: "donor/:id", element: <Donor /> },
      { path: "pending-users", element: <PendingUsers /> },
    ],
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

