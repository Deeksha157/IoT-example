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

const Cpu = (props) => {
  const {data} = props;

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
