import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-custom-gradient">
      <Toaster />
      {/* header */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
