import React from "react";
import HeroSlider from "../components/HeroSlider";
import WinterCareServices from "../components/WinterCareServices";
import WinterCareTips from "../components/WinterCareTips";
import ExpertVets from "../components/ExpertVets";
import { useLoaderData } from "react-router";

const HomePage = () => {
  const services = useLoaderData(); // winter services

  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-6">
      <HeroSlider />

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 mt-10">
        {/* Left side: Popular Winter Care Services */}
        <div className="lg:col-span-6">
          <h1 className="text-2xl font-bold text-black/70 mb-6">
            Popular Winter Care Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <WinterCareServices key={service.serviceId} service={service} />
            ))}
          </div>
        </div>

        {/* Right side: Tips + Expert Vets */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <WinterCareTips />
          <ExpertVets /> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
