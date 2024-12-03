import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* header */}
      <header>
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main></main>
      {/* footer */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
