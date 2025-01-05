import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="">
      <Toaster />
      {/* header */}
      <header className="sticky top-0 z-50">
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
