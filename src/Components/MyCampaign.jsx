import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";
import {AuthContext} from "../Layouts/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const {user} = useContext(AuthContext);
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);

  // ! eikhane fetch kora lgbe email wise tar por fetch korte hobe

  useEffect(() => {
    // Fetch campaigns for the logged-in user
    if (user?.email) {
      fetch(
        `https://assignment-10-server-pink-two.vercel.app/myCampaigns/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setLoadedCampaigns(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  // ! delete user from database for myCampaigns

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-pink-two.vercel.app/myCampaigns/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = loadedCampaigns.filter(
                (user) => user._id !== id
              );
              setLoadedCampaigns(remainingUsers);
            }
          })
          .catch((error) => console.error(error));
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-auto">
        <h1 className="text-center text-xl font-bold">
          {loadedCampaigns.length} Campaigns Found
        </h1>
        <table className="table mx-auto w-3/4 border-collapse border border-gray-400 mt-6">
          {/* Table Head */}
          <thead>
            <tr className="bg-custom-gradient">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Type</th>
              <th className="border border-gray-400 px-4 py-2">Min-Donation</th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {loadedCampaigns.map((campaign, index) => (
              <tr key={campaign._id} className="hover:bg-gray-400">
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {campaign.title}
                </td>
                <td className="border border-gray-400 px-4 py-2 capitalize">
                  {campaign.type}
                </td>
                <td className="border border-gray-400 px-4 py-2 font-semibold ">
                  $ {campaign.minDonation}
                </td>
                <td className="border border-gray-400 px-4 py-2 flex gap-2">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="btn btn-sm bg-purple-500 border-none text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleUserDelete(campaign._id)}
                    className="btn btn-sm bg-red-500 border-none  text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
