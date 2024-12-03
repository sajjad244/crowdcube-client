import React from "react";
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl text-gray-800 mt-4">Oops! Page not found.</h2>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-green-700 font-bold"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
