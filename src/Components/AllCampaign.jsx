import React from "react";
import {useLoaderData} from "react-router-dom";
import Card from "./Card";

const AllCampaign = () => {
  const allCampaigns = useLoaderData();

  return (
    <div className="bg-custom-gradient">
      <h1 className="text-3xl font-bold text-center my-12 text-gray-700">
        <i>Current Campaigns ({allCampaigns.length})</i>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {allCampaigns.map((campaign) => (
          <Card campaign={campaign} key={campaign._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
