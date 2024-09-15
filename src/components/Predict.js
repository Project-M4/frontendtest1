import React, { useState } from 'react';
import axios from 'axios';

const Predict = ({ selectedMarker }) => {
    console.log(`Selected location ID: ${selectedMarker.locationId}`);

  const [formData, setFormData] = useState({
    aerosolHeight: '',
    temperature: '',
    dew: '',
    humidity: '',
    precipitation:'',
    windSpeed: '',
    seaLevelPressure: '',
    uvIndex: '',
    locationId: selectedMarker.locationId,
  });

  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/predict/', formData)
      .then((response) => {
        setPrediction(response.data.prediction);
      })
      .catch((error) => {
        console.error('There was an error making the request:', error);
      });
  };

  return (
    <div>
      <form className='px-[2.5em] py-[30px] text-[14px]' onSubmit={handleSubmit}>
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Aerosel Height:</span>
          <input type="text" name="aerosolHeight" value={formData.aerosolHeight} onChange={handleChange} className='textfields'/> m
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Temperature: </span>
          <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} className='textfields'/> °C
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Dew: </span>
          <input type="text" name="dew" value={formData.dew} onChange={handleChange} className='textfields'/> °C
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Humidity: </span>
          <input type="text" name="humidity" value={formData.humidity} onChange={handleChange} className='textfields'/> %
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Precipitation: </span>
          <input type="text" name="precipitation" value={formData.precipitation} onChange={handleChange} className='textfields'/> mm
        </label>
        <br/>
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Wind Speed: </span>
          <input type="text" name="windSpeed" value={formData.windSpeed} onChange={handleChange} className='textfields'/> km/h
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>Sea Level Pressure: </span>
          <input type="text" name="seaLevelPressure" value={formData.seaLevelPressure} onChange={handleChange} className='textfields'/> mb
        </label>
        <br />
        <label>
          <span className='text-secondary font-[600] pr-[0.5em]'>UV Index: </span>
          <input type="text" name="uvIndex" value={formData.uvIndex} onChange={handleChange} className='textfields'/>
        </label>
        <br/>
        <button type="submit" className='px-[2em] py-[5px] bg-secondary text-white text-[18px] mt-[1em] block mx-auto rounded-[10px]'>Predict</button>
      </form>

      {prediction && (
        <div className='mt-[2em] text-center'>
          <h3>Prediction Result:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
