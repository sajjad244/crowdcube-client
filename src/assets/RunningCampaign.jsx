import React from "react";
import Card from "../Components/Card";

const RunningCampaign = ({allCampaigns}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10 text-gray-600">
        Running Campaign
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {allCampaigns.slice(0, 6).map((campaign) => (
          <Card campaign={campaign} key={campaign._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
