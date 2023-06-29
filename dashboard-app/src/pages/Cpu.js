import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Cpu = () => {
  const data = [
      { name: 'speed', value: 10 },
      { name: 'Utilisation', value: 15 },
      { name: 'processes', value: 25 },
      { name: 'Threads', value: 30 },
    ];

    return (
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
};

export default Cpu;
