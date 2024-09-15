import React from 'react'

const WhyitMatters = () => {
  return (
    <div className='flex bg-white py-[80px]'>
      <img src={process.env.PUBLIC_URL + '/gasplant.jpg'} className='w-[45vw]' data-aos="slide-right" data-aos-offset="400" data-aos-duration="500"></img>
      <div className='px-[5vw] text-black text-left flexCol'>
        <p className='font-bold text-[50px]'>Why it matters?</p>
        <p className='text-[18px] pt-[1em]'>Methane is a potent greenhouse gas, and tracking its emissions is crucial for safety and environmental compliance. However, many oil and gas facilities, especially in rural areas like West Texas or regions in South Asia, lack the sophisticated sensors required for real-time monitoring. These regions either face infrastructure challenges or operate under lower safety standards, leaving them vulnerable to undetected emissions.

<br/> By leveraging satellite imagery, we eliminate the need for on-site infrastructure. Our solution provides an efficient and cost-effective way for facilities to monitor methane levels without the need for expensive sensor networks, ensuring that safety and environmental standards can be upheld even in the most remote locations.</p>
      </div>
    </div>
  )
}

export default WhyitMatters
