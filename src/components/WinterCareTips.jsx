import React from "react";

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Keep Your Pet Warm Indoors",
      description:
        "Provide cozy bedding, blankets, or a heated pet mat to keep your furry friend warm during chilly winter nights.",
    },
    {
      id: 2,
      title: "Protect Paws from Ice and Salt",
      description:
        "Use pet-safe booties or paw wax to prevent injuries from ice, snow, and salt on sidewalks.",
    },
    {
      id: 3,
      title: "Monitor Outdoor Time",
      description:
        "Limit the time your pets spend outdoors in freezing temperatures to avoid hypothermia or frostbite.",
    },
    {
      id: 4,
      title: "Maintain Proper Nutrition",
      description:
        "Ensure your pet receives a balanced diet and adequate hydration to maintain energy and body warmth in winter.",
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold text-center mb-6">Winter Care Tips for Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 "
          >
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
