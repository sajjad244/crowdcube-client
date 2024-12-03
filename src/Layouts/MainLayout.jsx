import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
