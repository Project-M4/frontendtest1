import React from 'react'

const MoreInfo = ({ selectedMarker }) => {
    // render more info component
    return (
        <div className=' px-[2.5em] py-[30px]'>
        <p className='text-[14px] font-[300]'>
            <span className='text-secondary font-[600] pr-[0.5em]'>Aerosel Height:</span> {selectedMarker.aeroselHeight} m<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>Temperature: </span> {selectedMarker.temperature} °C<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>Dew: </span> {selectedMarker.dew} °C<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>Humidity: </span> {selectedMarker.humidity} %<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>Wind Speed: </span> {selectedMarker.windSpeed} km/h<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>Sea Level Pressure: </span> {selectedMarker.seaLevelPressure} mb<br/>
            <span className='text-secondary font-[600] pr-[0.5em]'>UV Index: </span> {selectedMarker.uvIndex}<br/>

        </p>
        </div>
      )
  };
  

export default MoreInfo
