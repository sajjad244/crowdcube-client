import Swal from "sweetalert2";
import {AuthContext} from "../Layouts/AuthProvider";
import {useContext} from "react";

const AddCampaign = () => {
  const {user} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const imageURL = form.imageURL.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const minDonation = form.minDonation.value;
    const name = form.name.value;
    const email = form.email.value;

    const newCampaign = {
      title,
      type,
      imageURL,
      description,
      deadline,
      minDonation,
      name,
      email,
      isComplete: false,
    };

    //! send data to the server post method
    fetch("http://localhost:5000/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Campaign Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-custom-gradient shadow-md rounded-lg mt-16 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">
        Add New Campaign
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Image/Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Campaign Image/Thumbnail
          </label>
          <input
            type="url"
            name="imageURL"
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

export default AddCampaign;
