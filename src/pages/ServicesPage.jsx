import React, { useState } from "react";
import { useLoaderData } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const ServicesPage = () => {
  const allService = useLoaderData();


  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };


  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={"full" + i} className="text-yellow-400 text-lg">★</span>
        ))}
        {halfStar && <span className="text-yellow-400 text-lg">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={"empty" + i} className="text-gray-300 text-lg">★</span>
        ))}
        <span className="ml-2 text-gray-700 font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {allService?.map((service) => (
          <div
            key={service.serviceId}
            className="rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">{service.serviceName}</h2>
              <p className="text-gray-500 mb-2">{service.description}</p>
              <div className="mb-2">{renderStars(service.rating)}</div>
            </div>
          </div>
        ))}
      </div>


      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Service</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesPage;
