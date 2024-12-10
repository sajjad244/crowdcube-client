import React, {useContext, useState} from "react";
import {AuthContext} from "../Layouts/AuthProvider";
import {useLoaderData, useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const {user} = useContext(AuthContext);
  const {id} = useParams();
  const singleData = useLoaderData();

  const [title, setTitle] = useState(singleData?.title);
  const [imageURL, setImageURL] = useState(singleData?.imageURL);
  const [description, setDescription] = useState(singleData?.description);
  const [type, setType] = useState(singleData?.type);
  const [minDonation, setMinDonation] = useState(singleData?.minDonation);
  const [deadline, setDeadline] = useState(singleData?.deadline);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      title: title,
      imageURL: imageURL,
      description: description,
      type: type,
      minDonation: minDonation,
      deadline: deadline,
    };

    fetch(`http://localhost:5000/myCampaigns/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())

      .then((result) => {
        Swal.fire("data-updated");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-custom-gradient shadow-md rounded-lg mt-16 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">Update Campaign</h1>

      <form onSubmit={handleSubmit}>
        {/* Image/Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Campaign Image/Thumbnail
          </label>
          <input
            type="url"
            name="imageURL"
            defaultValue={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
            placeholder="Enter Image URL"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Campaign Title
          </label>
          <input
            type="text"
            required
            name="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Campaign Title"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Campaign Type
          </label>
          <select
            name="type"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Enter Campaign Description"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Minimum Donation Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            defaultValue={minDonation}
            onChange={(e) => setMinDonation(e.target.value)}
            name="minDonation"
            required
            placeholder="Enter Minimum Donation Amount"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Deadline</label>
          <input
            type="date"
            name="deadline"
            defaultValue={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* User Email (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">User Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
          />
        </div>

        {/* User Name (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName || ""}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
          />
        </div>

        {/* Add Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
