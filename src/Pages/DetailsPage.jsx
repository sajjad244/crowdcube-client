import React, {useContext} from "react";
import {Link, useLoaderData, useParams} from "react-router-dom";
import {AuthContext} from "../Layouts/AuthProvider";

const DetailsPage = () => {
  const campaign = useLoaderData();
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const data = campaign.find((item) => item._id == id);
  const {
    title,
    type,
    imageURL,
    description,
    deadline,
    minDonation,
    name,
    isComplete,
  } = data;

  // ! sending data to the server for donation

  const handleDonate = () => {
    const donate = {
      userName: user.displayName,
      email: user.email,
      title,
      type,
      deadline,
      imageURL,
      minDonation,
      name,
      description,
    };

    // ? send data to server site_-

    fetch("http://localhost:5000/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donate),
    })
      .then((res) => res.json())
      .then((data) => console.log("donation added in db", data));
  };

  return (
    <div className="card w-2/3 bg-base-100 shadow-xl mx-auto p-10 mt-10">
      {/* Image Section */}
      <figure>
        <img src={imageURL} alt={title} className="h-96 w-full object-cover" />
      </figure>

      {/* Card Content */}
      <div className="card-body">
        <h2 className="card-title text-green-500">{title}</h2>
        <p className="badge badge-outline badge-primary capitalize">
          Type: {type}
        </p>
        <p className="text-gray-600 mt-2">{description}</p>

        <div className="mt-4">
          <p className="font-semibold">
            <span className="text-gray-500">Deadline:</span> {deadline}
          </p>
          <p className="font-semibold">
            <span className="text-gray-500">Min Donation:</span> ${minDonation}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">
            <span className="text-gray-500">Created By:</span> {name}
          </p>
          <p className="font-semibold">
            <span className="text-gray-500">Email:</span>
            {data.email || "No Email"}
          </p>
        </div>

        {/* See More Button */}
        <div className="card-actions justify-end mt-4">
          <button onClick={handleDonate} className="btn btn-primary btn-sm">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
