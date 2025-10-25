import React from "react";
import "animate.css";
import doc1 from "../assets/doc2.jpeg";
import doctor1 from "../assets/doctor1.jpeg";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Veterinary Surgeon",
      image: doc1,
    },
    {
      id: 2,
      name: "Dr. Mark Thompson",
      designation: "Pet Nutrition Specialist",
      image: doctor1,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-pink-400 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-white animate__animated animate__fadeInDown">
        Meet Our Expert Vets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {vets.map((vet, index) => (
          <div
            key={vet.id}
            className={`card bg-base-100 shadow-lg border border-gray-200 flex flex-col items-center p-6 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-700">
              {vet.name}
            </h3>
            <p className="text-gray-600">{vet.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
