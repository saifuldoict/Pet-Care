import React, { useState } from "react";
 import { Link } from "react-router";
import  { toast, Toaster } from "react-hot-toast";
 import { useSpring, animated } from "@react-spring/web";

const ServicesPageCard = ({service}) => {
  // const allService = useLoaderData();
  console.log(service)

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };
const animation = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });

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

    
      <div className="space-y-5 shadow-2xl p-4 border border-gray-50 rounded-xl hover:shadow-3xl transition-all duration-300">
  <div className="w-100 h-auto md:h-64 overflow-hidden rounded-lg mx-auto">
    <img
      src={service.image}
      alt={service.serviceName}
      className="w-full h-full object-cover object-center"
    />
  </div>

  <div className="text-center">
    <h2 className="text-xl font-semibold mb-2">{service.serviceName}</h2>
    <p className="text-gray-500 mb-3 text-sm md:text-base">
      {service.description}
    </p>

    <div className="flex justify-around items-center mb-3 text-sm md:text-base">
      <p className="font-bold text-gray-700">
        ⭐ Rating: <span className="text-yellow-600">{service.rating}</span>
      </p>
      <p className="text-red-600 font-bold">
        💰 Price: {service.price}
      </p>
    </div>
  </div>

  <Link
    to="/"
    className="btn btn-primary w-full py-3 text-lg font-semibold rounded-lg"
  >
    Home
  </Link>
</div>



<animated.div
      style={animation}
      className="w-full mx-auto p-4 border rounded-lg shadow-md bg-white mt-10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Book a Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </form>
    </animated.div>
      
    </div>
  );
};

export default ServicesPageCard;
