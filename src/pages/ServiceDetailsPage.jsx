import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import ServicesPageCard from './ServicesPageCard';

const ServiceDetailsPage = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [service, setService]= useState({})


useEffect(()=>{
    const serviceDetails = data.find((singleService)=>singleService.id==id);
    setService(serviceDetails)
},[data,id])

  return (
    <div>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-12'>
                        <ServicesPageCard service={service}/>
                </section>
                
        </main>
    </div>
  )
}

export default ServiceDetailsPage