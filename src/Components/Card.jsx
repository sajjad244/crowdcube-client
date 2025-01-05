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
      <div className="card w-full h-[500px] bg-blue-300 shadow-xl mx-auto">
        <figure className="h-1/2 overflow-hidden">
          <img
            src={imageURL || "https://via.placeholder.com/150"}
            alt={title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body h-1/2 flex flex-col justify-between">
          <h2 className="card-title text-gray-800 text-lg font-bold">
            {title}
          </h2>
          <p className="badge badge-outline text-green-700">{type}</p>
          <div className="mt-1">
            <p className="font-semibold">
              <span className="text-gray-500">
                Min Donation: ${minDonation}
              </span>
            </p>
          </div>
          <p className="font-semibold">
            <span className="text-gray-500">Name: {name}</span>
          </p>
          <p className="font-semibold text-red-700">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>
          <Link
            to={`/view/${_id}`}
            className="btn bg-blue-600 border-none text-white hover:bg-blue-800 btn-sm mt-1"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
