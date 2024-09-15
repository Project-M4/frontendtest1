import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex  justify-between items-center px-[3%] py-[20px] bg-white text-[18px] z-100 relative'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} className='w-[8%]'></img>
        <ul className="flex gap-[20px]">
            <li className='py-[6px] px-[10px] bg-primary text-white flexCol btn'><Link to='/Map'>Open Map</Link></li>
        </ul>
    </div>
  )
}

export default Header
