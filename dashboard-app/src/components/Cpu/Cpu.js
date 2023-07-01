import React, { useEffect, useState } from "react";
import "./Cpu.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import axios from "axios";

const Cpu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/performance-info");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="cpu-wrapper">
      <ResponsiveContainer width="100%" height="100%" padding="10px">
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="cpuUsage" stroke="#f29400" fill="#f29400" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Cpu;
