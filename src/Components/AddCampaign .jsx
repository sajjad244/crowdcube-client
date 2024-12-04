import React from "react";

const AddCampaign = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-custom-gradient shadow-md rounded-lg mt-16 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">
        Add New Campaign
      </h1>

      <form>
        {/* Image/Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Campaign Image/Thumbnail
          </label>
          <input
            type="url"
            name="imageURL"
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
            id="title"
            name="title"
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
            name="minDonation"
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
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* User Email (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">User Email</label>
          <input
            type="email"
            name="email"
            value="user@example.com" // Replace with the logged-in user's email
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
            value="John Doe" // Replace with the logged-in user's name
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

export default AddCampaign;
