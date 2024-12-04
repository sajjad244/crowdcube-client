import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-custom-gradient">
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
