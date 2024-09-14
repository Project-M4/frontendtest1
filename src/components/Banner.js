import React from 'react'

const Banner = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/banner.jpg'} className='w-screen h-[550px] object-cover object-top'></img>
    </div>
  )
}

export default Banner
