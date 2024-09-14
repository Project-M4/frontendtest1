import React from 'react'

const Predict = ({ selectedMarker }) => {
    // render predict component
    return(<form className='px-[2.5em] py-[30px] text-[14px]'>
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Aerosel Height:</span>
          <input type="text"  className='textfields'/> m
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Temperature: </span>
          <input type="text"  className='textfields'/> °C
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Dew: </span>
          <input type="text" className='textfields'/> °C
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Humidity: </span>
          <input type="text"  className='textfields'/> %
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Wind Speed: </span>
          <input type="text"  className='textfields'/> km/h
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Sea Level Pressure: </span>
          <input type="text"   className='textfields'/> mb
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>UV Index: </span>
          <input type="text"  className='textfields'/>
        </label>
        <br/>
        <button className='px-[2em] py-[5px] bg-secondary text-white text-[18px] mt-[1em] block mx-auto rounded-[10px]'>Predict</button>
      </form>

    );
  };


export default Predict
