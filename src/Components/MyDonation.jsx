import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Layouts/AuthProvider";

const MyDonation = () => {
  const [donations, setDonations] = useState([]);
  const {user} = useContext(AuthContext);

  // useEffect use for showing email wise data

  useEffect(() => {
    fetch(`http://localhost:5000/donations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((error) => console.error(error));
  }, []);
  donations;
  return (
    <div className="min-h-screen  py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        My Donations ({donations.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 rounded-md">
        {donations.map((campaign) => (
          <div
            key={campaign._id}
            className="card w-full bg-white shadow-md hover:shadow-lg transition rounded-lg"
          >
            {/* Campaign Image */}
            <figure className="relative h-48">
              <img
                src={campaign.imageURL}
                alt={campaign.imageURL}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>
            {/* Card Body */}
            <div className="card-body p-5">
              <h2 className="card-title text-green-600">{campaign.title}</h2>
              <p className="text-sm text-gray-500 capitalize mb-2">
                Type: {campaign.type}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {campaign.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span>
                  <b>Deadline:</b> {campaign.deadline}
                </span>
                <span>
                  <b>MY Donation:</b> ${campaign.minDonation}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
