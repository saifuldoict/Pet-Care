import React from 'react'
 import HeroSlider from '../components/HeroSlider'
import WinterCareServices from '../components/WinterCareServices'
import { useLoaderData } from "react-router";
const HomePage = () => {
  const services = useLoaderData(); // ✅ useLoaderData returns your fetched data

  return (
    <div>
     <HeroSlider/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {services.map((service) => (
        <WinterCareServices key={service.serviceId} service={service} className=" ">
          
        </WinterCareServices>
      ))}
    </div>
    </div>
  )
}

export default HomePage