import React from "react";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/Extra_Section/HowItWorks";
import SuccessStories from "../Components/Extra_Section/SuccessStories";
import RunningCampaign from "../assets/RunningCampaign";
import {useLoaderData} from "react-router-dom";

const Home = () => {
  const allCampaigns = useLoaderData();

  return (
    <div className="mt-10 ">
      {/* banner */}
      <Banner></Banner>
      {/* Running Campaign */}
      <RunningCampaign allCampaigns={allCampaigns}></RunningCampaign>
      <div className="divider w-9/12 mx-auto mt-10"></div>
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
