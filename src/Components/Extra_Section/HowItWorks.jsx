import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create a Campaign",
      description: "Sign up and create your campaign with all the details.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Share Your Campaign",
      description: "Share it with your friends, family, and the community.",
      icon: "📤",
    },
    {
      id: 3,
      title: "Receive Contributions",
      description: "Start receiving funds directly to your account.",
      icon: "💰",
    },
  ];

  return (
    <section className=" my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4 text-gray-600">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
