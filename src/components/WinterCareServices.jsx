import React from 'react'
import { Link } from 'react-router'
import "animate.css";

const WinterCareServices = ({ service, index }) => {
  const { image, serviceName, rating, price, id } = service;

  return (
    <div
      className={`max-w-sm bg-white rounded-lg shadow-md overflow-hidden 
      transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
      animate__animated animate__fadeInUp`}
      style={{
        animationDelay: `${(index || 0) * 0.3}s`,
        animationDuration: "1s",
      }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 animate__animated animate__zoomIn"
          style={{
            animationDelay: `${(index || 0) * 0.4}s`,
            animationDuration: "1s",
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{serviceName}</h3>

        {/* Rating Section */}
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, starIndex) => (
            <svg
              key={starIndex}
              className={`w-4 h-4 mr-1 ${
                starIndex < Math.round(rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.037 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
        </div>

        <p className="text-gray-800 font-medium mb-4">${price}</p>

        <Link
          to={`/services-details/${id}`}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-focus 
          transition-all duration-300 animate__animated animate__pulse animate__infinite"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WinterCareServices;
