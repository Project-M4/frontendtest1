import React from 'react'

const Featuredstats = () => {
  return (
    <div className='bg-accent'>
    <div className='x-container py-[80px] grid grid-cols-3'>
      <div className='text-center  border-r-[1px] border-[#A7A7A7]'>
            <h2 className='text-secondary font-bold text-[55px] pb-[0.25em]'>25%</h2>
            <p className='text-[20px] text-center px-[50px]'>of the global warming we're experiencing today is due to methane emissions</p>
      </div>
      <div className='text-center border-r-[1px] border-[#A7A7A7]'>
            <h2 className='text-secondary font-bold text-[55px] pb-[0.25em]'>$10 Billion
            </h2>
            <p className='text-[20px] text-center px-[50px]'>is the amount Methane emissions from U.S. oil and gas operations cost the nation every year</p>
      </div>
      <div className='text-center'>
            <h2 className='text-secondary font-bold text-[55px] pb-[0.25em]'>1 million
            </h2>
            <p className='text-[20px] text-center px-[50px]'>premature deaths a year due tropospheric ozone formation which is driven from mehane
            </p>
      </div>
    </div>
  </div>)
}

export default Featuredstats
