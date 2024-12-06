import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Layouts/AuthProvider";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const {createUser, setUser, updateUserProfile} = useContext(AuthContext);

  //! for navigate path
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // ! create new user

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // updating profile
        updateUserProfile({displayName: name, photoURL: photoURL})
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            alert(err.code);
          });
        toast.success("Thank you! For your Registration");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-custom-gradient flex items-center justify-center">
      <div className="bg-custom-gradient shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Register Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>

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

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your photo URL"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
