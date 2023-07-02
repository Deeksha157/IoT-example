import React from "react";
import "./Memory.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Memory = (props) => {
  const { data } = props;
  
  const formatTick = (tick) => {
    const date = new Date(tick);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return formattedTime;
  };

  return (
    <div className="memory-wrapper">
      <ResponsiveContainer width="100%" height="100%" padding="10px">
        <AreaChart
          width={500}
          height={300}
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
          <XAxis dataKey="datetime" tickFormatter={formatTick}/>
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="memoryUsage"
            stroke="#f29400"
            fill="#f29400"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Memory;
