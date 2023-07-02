import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import Subheader from "../../components/Subheader/Subheader";
import "./Dashboard.css";
import Cpu from "../../components/Cpu/Cpu";
import Memory from "../../components/Memory/Memory";

export const Dashboard = () => {
  useEffect(() => {}, []);

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
            }}
          >
            <Cpu />
            <Memory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
