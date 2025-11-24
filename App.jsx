import { Outlet, RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

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
import ContactUs from "./components/ContactUs";

function App() {
  const user = useSelector((state) => state.user);

  const Layout = () => (
    <div className="flex">
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/featured', element: <Featured /> },
        { path: '/contact', element: <Contact /> },
        { path: '/contact2', element: <ContactUs /> }
      ]
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    {
      path: '/admin',
      element: user.currentUser ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: "/admin", element: <Admin /> },
        { path: "/admin/donors", element: <Donors /> },
        { path: "/admin/prospects", element: <Prospects /> },
        { path: "/admin/prospect/:id", element: <Prospect /> },
        { path: "/admin/newdonor", element: <NewDonor /> },
        { path: "/admin/donor/:id", element: <Donor /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
