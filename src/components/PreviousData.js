import React, { useState } from 'react';
import { csv } from 'd3-fetch';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const PreviousData = ({ selectedMarker }) => {
  const [data, setData] = React.useState([]);
  const [days, setDays] = useState(30); // default to 30 days

  React.useEffect(() => {
    csv('/MonkeyKing.csv').then((data) => {
      setData(data);
    });
  }, []);

  const chartData = data.slice(-days).map((row) => ({
    date: row['Date'],
    methaneEmissions: parseFloat(row[selectedMarker.name]),
  }));

  const maxMethaneEmissions = Math.max(...chartData.map((row) => row.methaneEmissions));
  const minMethaneEmissions = Math.min(...chartData.map((row) => row.methaneEmissions));
  const meanMethaneEmissions = chartData.reduce((acc, row) => acc + row.methaneEmissions, 0) / chartData.length;


  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className='w-full px-[2.5em] py-[1em]'>
        <div className='flex justify-center'>
      <select value={days} onChange={handleDaysChange} className='bg-accent border-[1px] border-[#979696]  rounded-[5px] py-[3px] px-[10px] text-secondary mb-[1em]'>
        <option value="7">7 days</option>
        <option value="30">30 days</option>
      </select>
      </div>
      <div className='flex flex-col'>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={chartData} >
          <CartesianGrid />
          <XAxis dataKey="date" interval={"preserveStartEnd"} tick={{ fontSize: 10, angle:-90, dy: 10  }}  />
<YAxis label={{ value: '', angle: -90, fontSize: 14 }} tick={{ fontSize: 14, }} />
          <Tooltip />
          <Line
            dataKey="methaneEmissions"
            stroke="black"
            activeDot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div>
      <p className='text-[14px] font-[300] py-[1em]'>
      <span className='text-secondary font-[600] pr-[0.5em]'>Maximum methane emissions: </span> {maxMethaneEmissions.toFixed(2)} ppb<br/>
      <span className='text-secondary font-[600] pr-[0.5em]'>Minimum methane emissions: </span> {minMethaneEmissions.toFixed(2)} ppb<br/>
      <span className='text-secondary font-[600] pr-[0.5em]'>Average methane emissions: </span> {meanMethaneEmissions.toFixed(2)} ppb
      </p>

      </div>
    </div>
  );
};

export default PreviousData;