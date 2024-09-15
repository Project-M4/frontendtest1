import React from 'react'

const Howwedo = () => {
  return (
    <div className='bg-accent py-[80px]'>
     <div className='x-container'>
        <p className='font-bold text-[50px] '>How we did this:</p>
        <p className='text-[18px] pt-[1em]'>Our system leverages Google Cloud and the Google Earth Engine API to provide a precise and scalable methane (CH4) monitoring solution, using satellite images and weather data for accurate predictions.</p>
        <p className='text-[20px] font-semibold pt-[1em] pb-[0.5em]'>Data Collection:</p>
        <p className='text-[18px]'>We import satellite images captured by the Sentinel-5P satellite via Google Cloud. These images focus on the specific longitude and latitude coordinates of oil fields, gas plants, and other relevant facilities.</p>
        <p className='text-[20px] font-semibold pt-[1em] pb-[0.5em]'>Analysis:</p>
        <p className='text-[18px]'>Using the Google Earth Engine API, we calculate methane concentration at specific geographical points. This data is enriched by integrating local weather parameters to provide a more comprehensive analysis.        </p>
        <p className='text-[20px] font-semibold pt-[1em] pb-[0.5em]'>Prediction:</p>
        <p className='text-[18px]'>We utilize a prediction model that incorporates real-time weather parameters such as temperature, wind speed, and atmospheric pressure to forecast methane concentration. This predictive capability allows for proactive monitoring, even in changing environmental conditions.</p>
        <p className='text-[20px] font-semibold pt-[1em] pb-[0.5em]'>Reporting & Visualization: 
        </p>
        <p className='text-[18px]'>The analyzed and predicted methane data is displayed in a user-friendly front-end platform, providing actionable insights for improving safety and environmental performance. This eliminates the need for complex on-site infrastructure and ensures accessible monitoring even in remote areas.</p>




     </div>
    </div>
  )
}

export default Howwedo
