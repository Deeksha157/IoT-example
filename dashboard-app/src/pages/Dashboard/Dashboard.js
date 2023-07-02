import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader/Subheader";
import "./Dashboard.css";
import Cpu from "../../components/Cpu/Cpu";
import Memory from "../../components/Memory/Memory";
import axios from "axios";

export const Dashboard = () => {
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
  }, [data]);

  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
          overflowX: "hidden",
          width: "auto",
        }}
      >
        <Navbar />
        <Subheader title="Dashboard" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              width: "100%",
            }}
          >
            <Cpu data={data}/>
            <Memory data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
