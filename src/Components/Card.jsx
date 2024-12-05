import React from "react";
import {Link} from "react-router-dom";

const Card = ({campaign}) => {
  const {
    title,
    type,
    imageURL,
    description,
    deadline,
    minDonation,
    name,
    email,
    _id,
  } = campaign;

  return (
    <div className="p-5">
      <div className="card w-full bg-blue-300 shadow-xl mx-auto">
        <figure>
          <img
            src={imageURL}
            alt="imageURL"
            className="h-56 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-800">{title}</h2>
          <p className="badge badge-outline text-green-700">{type}</p>
          <div className="mt-1">
            <p className="font-semibold">
              <span className="text-gray-500">
                Min Donation : ${minDonation}
              </span>
            </p>
          </div>
          <p className="font-semibold">
            <span className="text-gray-500">Name : {name}</span>
          </p>
          <p className="font-semibold text-red-700">Deadline : {deadline}</p>
          {/* Button Section */}
          <div className="card-actions justify-end mt-4">
            <Link to={`/view/${_id}`} className="btn btn-primary btn-sm">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
