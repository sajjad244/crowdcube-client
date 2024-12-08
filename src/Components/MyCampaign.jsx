import React, {useContext, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../Layouts/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const loadedUsers = useLoaderData();
  const [authEmail, setAuthEmail] = useState(loadedUsers);
  const {user} = useContext(AuthContext);
  const userCampaigns = authEmail.filter(
    (item) => item.email !== user.campaignEmail
  );

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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = authEmail.filter(
                (item) => item._id !== id
              );
              setAuthEmail(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-auto">
        <h1 className="text-center text-xl font-bold">
          {userCampaigns.length} Campaigns Found
        </h1>
        <table className="table mx-auto w-3/4 border-collapse border border-gray-400 mt-6">
          {/* Table Head */}
          <thead>
            <tr className="bg-custom-gradient">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Type</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {userCampaigns.map((campaign, index) => (
              <tr key={campaign._id} className="hover:bg-gray-400">
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {campaign.campaignTitle}
                </td>
                <td className="border border-gray-400 px-4 py-2 capitalize">
                  {campaign.campaignType}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {campaign.campaignEmail}
                </td>
                <td className="border border-gray-400 px-4 py-2 flex gap-2">
                  <button className="btn btn-sm bg-purple-500 border-none">
                    Update
                  </button>
                  <button
                    onClick={() => handleUserDelete(campaign._id)}
                    className="btn btn-sm bg-red-500 border-none"
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
