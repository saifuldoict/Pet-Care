import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router'

const ServiceDetailsPage = () => {
    const data = useLoaderData();
    const {id} = useParams();
    


useEffect(()=>{
    const serviceDetails = data.find((singleService)=>singleService.id==)
})

  return (
    <div>ServiceDetailsPage</div>
  )
}

export default ServiceDetailsPage