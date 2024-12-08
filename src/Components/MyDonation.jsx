import React from "react";
import {useLoaderData} from "react-router-dom";

const MyDonation = () => {
  const campaigns = useLoaderData();

  return (
    <div className="min-h-screen bg-custom-gradient py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        My Donations ({campaigns.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="card w-full bg-white shadow-md hover:shadow-lg transition rounded-lg"
          >
            {/* Campaign Image */}
            <figure className="relative h-48">
              <img
                src={campaign.campaignImage}
                alt={campaign.campaignTitle}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>
            {/* Card Body */}
            <div className="card-body p-5">
              <h2 className="card-title text-green-600">
                {campaign.campaignTitle}
              </h2>
              <p className="text-sm text-gray-500 capitalize mb-2">
                Type: {campaign.campaignType}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {campaign.campaignDescription}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span>
                  <b>Deadline:</b> {campaign.campaignDeadline}
                </span>
                <span>
                  <b>Min Donation:</b> ${campaign.campaignMinDonation}
                </span>
              </div>
              <div className="mt-4">
                <p>
                  <b>Creator:</b> {campaign.campaignName} (
                  {campaign.campaignEmail})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
