import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "John's Tech Startup",
      amountRaised: "$50,000",
      description:
        "John successfully raised funds for his innovative app idea.",
      image:
        "https://i.ibb.co.com/nwTkhpy/Screenshot-2023-10-17-at-11-58-09-1080x635.png",
    },
    {
      id: 2,
      title: "Sarah's Art Project",
      amountRaised: "$20,000",
      description:
        "Sarah launched her art exhibition with crowdfunded support.",
      image: "https://i.ibb.co.com/x8ryC8L/fire-cat-by-sarah-krepp.webp",
    },
    {
      id: 3,
      title: "Mark's Charity Drive",
      amountRaised: "$10,000",
      description: "Mark organized a charity drive for local communities.",
      image: "https://i.ibb.co.com/z5wzRkX/2024-MCF-FB-Event-Cover-1-2.png",
    },
  ];

  return (
    <section className="bg-custom-gradient py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-gray-100 shadow-md p-6 rounded-lg"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-600">
                {story.title}
              </h3>
              <p className="text-gray-600 mt-2">{story.description}</p>
              <p className="font-bold text-green-600 mt-2">
                Raised: {story.amountRaised}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
