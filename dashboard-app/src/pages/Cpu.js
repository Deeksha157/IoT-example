import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Sidebar from "../components/Sidebar";
import { Router } from "react-router-dom";

const Cpu = () => {
  const data = [
    { name: "speed", value: 10 },
    { name: "Utilisation", value: 15 },
    { name: "processes", value: 25 },
  ];

  return (
    <div>
        <Sidebar />
        <div className="wrapper">
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
    </div>
  );
};

export default Cpu;
