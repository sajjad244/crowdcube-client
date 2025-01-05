import React, {useEffect, useState} from "react";
import {NavLink, useLoaderData} from "react-router-dom";

const AllCampaign = () => {
  const allCampaigns = useLoaderData();

  // ! for sorting
  const [sortedCampaigns, setSortedCampaigns] = useState([]);

  useEffect(() => {
    if (allCampaigns && allCampaigns.length > 0) {
      setSortedCampaigns(allCampaigns);
    }
  }, [allCampaigns]);

  const submit = () => {
    const sorted = [...sortedCampaigns].sort(
      (a, b) => b.minDonation - a.minDonation
    );
    setSortedCampaigns(sorted);
  };
  // ! for sorting
  console.log(sortedCampaigns);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mt-5 text-gray-700">
        <i>Current Campaigns ({allCampaigns.length})</i>
      </h1>
      <div className="flex justify-end p-10 mt-5">
        <button
          onClick={submit}
          className="btn text-white bg-custom-gradient border-none hover:text-purple-600"
        >
          Sort by price
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCampaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="card bg-gray-100 shadow-xl hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={campaign.imageURL || "https://via.placeholder.com/150"}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-gray-800">
                {campaign.title}
              </h2>
              <p className="text-gray-600">Type: {campaign.type}</p>
              <p className="text-gray-600">
                Minimum Donation:{" "}
                <span className="font-semibold">${campaign.minDonation}</span>
              </p>
              <p className="text-gray-600">
                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <NavLink
                  to={`/view/${campaign._id}`}
                  className="btn   bg-blue-600 border-none text-white hover:bg-blue-800"
                >
                  See More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
