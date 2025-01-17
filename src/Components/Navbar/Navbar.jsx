import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../Layouts/AuthProvider";

import {Typewriter} from "react-simple-typewriter";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);

  // State to manage the theme
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // Change theme when the button is clicked
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };
  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);
  // State to manage the theme
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user && user?.email ? (
        <>
          <li>
            <NavLink to="/allCampaigns">All Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/myCampaign">My Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/myDonations">My Donations</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <a className="ml-1" href="#footer">
              Contact
            </a>
          </li>
          <li>
            <a className="ml-1" href="#footer">
              About us
            </a>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar backdrop-blur-lg z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-custom-gradient text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl text-gray-600 font-extrabold"
        >
          <i>
            <span className="text-orange-500">
              <Typewriter
                words={["Crowd"]}
                loop={false}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            <span>
              <Typewriter
                words={["cube"]}
                loop={false}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </i>
          {/*  */}
          <i></i>
          {/*  */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-gray-700">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg hover:scale-110 transition-transform duration-300"
                src={user?.photoURL}
                alt="User Avatar"
              />
              {/* Tooltip */}
              <span className="absolute left-1/2 transform -translate-x-1/2  bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user?.displayName}
              </span>
            </div>
            <button
              onClick={logout}
              className="btn btn-ghost text-gray-700 text-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="login" className="btn btn-ghost text-gray-700  text-md">
            Login
          </Link>
        )}
        {/* register button */}

        {user && user?.email ? null : (
          <Link to="/register" className="btn btn-ghost text-md text-gray-700">
            Register
          </Link>
        )}
        {/* Theme toggle icon */}
        {/* <button onClick={toggleTheme} className="btn btn-ghost text-lg ml-4">
          {theme === "light" ? <FaMoon /> : <FaSun />} */}
        {/* Change icon based on theme */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default Navbar;
