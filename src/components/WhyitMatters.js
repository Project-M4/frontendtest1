import React from 'react'

const WhyitMatters = () => {
  return (
    <div className='flex bg-white py-[80px]'>
      <img src={process.env.PUBLIC_URL + '/gasplant.jpg'} className='w-[50vw]'></img>
      <div className='px-[5vw] text-black text-left flexCol'>
        <p className='font-bold text-[50px]'>Why it matters?</p>
        <p className='text-[20px] pt-[1em]'>Methane is 80 times more potent than carbon dioxide when it comes to trapping heat in the atmosphere. Reducing methane emissions is one of the fastest and most effective ways to slow down climate change. Our platform helps industries take action by providing the data and tools they need to monitor, manage, and minimize methane emissions</p>
      </div>
    </div>
  )
}

export default WhyitMatters
