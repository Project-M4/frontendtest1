import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white px-[5%] py-[30px] grid grid-cols-3'>
      <img src={process.env.PUBLIC_URL + '/logo.png'} className='w-[5vw] inline-block' />
     <div className=''>
      <p className='text-[16px] text-center'>
        Coded with 
        <span className='inline'>
          <img src={process.env.PUBLIC_URL + '/footer.svg'} className='h-[1.8em] mx-[0.5em] inline-block rotateimg' />
        </span>
        by Juhair, Laksh, and Shanthan
      </p>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Footer