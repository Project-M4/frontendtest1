import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex  justify-between items-center px-[5%] py-[20px] bg-white text-[18px]'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} className='w-[15%]'></img>
        <ul className="flex gap-[20px]">
            <li className='flexCol'>About Us</li>
            <li className='py-[6px] px-[10px] bg-primary text-white flexCol btn'><Link to='/Map'>Open Map</Link></li>
        </ul>
    </div>
  )
}

export default Header