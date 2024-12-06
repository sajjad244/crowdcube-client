import React, {useContext} from "react";
import {FaGoogle} from "react-icons/fa6";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Layouts/AuthProvider";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {login, setUser, googleLogIn} = useContext(AuthContext);

  //! for navigate path
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast.success(`Welcome successfully logged in.`);
      })
      .catch((err) => {
        toast.error(
          `Login Failed !!! If you are new user please register first : ${err.message}`
        );
      });
    form.reset();
  };

  // ! google login

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
        toast.success(`Welcome successfully logged in.`);
      })
      .catch((err) => {
        toast.error(`Google Login Failed: ${err.message}`);
      });
  };

  return (
    <div className="min-h-screen bg-custom-gradient flex items-center justify-center">
      <div className="bg-custom-gradient shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          {/* Google Login */}
          <div className="mb-4">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full bg-green-500 hover:bg-red-600 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-red-300"
            >
              Login with Google <FaGoogle className="inline-block ml-1" />
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don’t have an account?
            <Link
              to="/register"
              className="text-white hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
