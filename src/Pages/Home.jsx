import React from "react";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/Extra_Section/HowItWorks";
import SuccessStories from "../Components/Extra_Section/SuccessStories";

const Home = () => {
  return (
    <div className="mt-10 bg-custom-gradient">
      {/* banner */}
      <Banner></Banner>
      {/* Running Campaign */}
      <h1 className="text-5xl font-bold text-center mt-20">
        Running Campaign Section will be added soon a new components
      </h1>

      <div className="divider w-9/12 mx-auto my-20"></div>
      {/* extra-1 */}
      <HowItWorks></HowItWorks>
      {/* extra-2 */}
      <SuccessStories></SuccessStories>
      {/* footer */}
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
