import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userRedux";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    dispatch(loginStart());

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid email or password");
        setIsLoading(false);
        dispatch(loginFailure());
        return;
      }

    
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));


      dispatch(loginSuccess(data));

      toast.success("Login successful!");

      if (data.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }

    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error. Please try again later.");
      dispatch(loginFailure());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2">

       
          <div
            className="hidden lg:flex items-center justify-center bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/WhatsApp Image 2025-11-01 at 20.08.39_f4d36964.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white p-10">
              <h1 className="text-5xl font-bold mb-4">Blood Bridge</h1>
              <p className="text-xl opacity-90">Admin Dashboard Login</p>
            </div>
          </div>

         
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-red-700 text-center mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 outline-none transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 outline-none transition"
                required
              />

              <Link
                to="/forgot-password"
                className="block text-center text-red-600 hover:underline text-sm"
              >
                Forgot Password?
              </Link>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-xl transition duration-200"
              >
                {isLoading ? "Signing In..." : "Login"}
              </button>
            </form>

            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-red-600 font-bold hover:underline">
                Register Now
              </Link>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
