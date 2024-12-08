import React, {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";

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

  return (
    <div className="bg-custom-gradient p-10">
      <h1 className="text-3xl font-bold text-center mt-5 text-gray-700">
        <i>Current Campaigns ({allCampaigns.length})</i>
      </h1>
      <div className="flex justify-end p-10 mt-5">
        <button
          onClick={submit}
          className="btn  text-white bg-custom-gradient border-none hover:text-purple-600 "
        >
          Sort by price
        </button>
      </div>

      <div className="overflow-x-auto mx-4 ">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-custom-gradient text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2 hidden">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Minimum Donation
              </th>
              <th className="border border-gray-300 px-4 py-2">Deadline</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.map((campaign) => (
              <tr
                key={campaign._id}
                className="text-gray-800 hover:bg-gray-400"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {campaign.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {campaign.type}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-black font-serif text-center">
                  ${campaign.minDonation}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link
                    to={`/view/${campaign._id}`}
                    className="btn bg-purple-900 border-none text-white hover:bg-fuchsia-800"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
