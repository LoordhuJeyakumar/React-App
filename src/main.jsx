import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";


const income = [
  {
    year: 2023,
    data: [
      {
        id: 1,

        month: "Jan",
        m:1,
        earning: 1000,
        earningType: {
          direct: 600,
          referral: 100,
          social: 200,
        },
      },
      {
        id: 2,

        month: "Feb",
        m:2,
        earning: 1500,
        earningType: {
          direct: 800,
          referral: 300,
          social: 400,
        },
      },
      {
        id: 3,

        month: "Mar",
        m:3,
        earning: 1800,
        earningType: {
          direct: 1000,
          referral: 300,
          social: 500,
        },
      },
      {
        id: 4,

        month: "Apr",
        m:4,
        earning: 1300,
        earningType: {
          direct: 1000,
          referral: 200,
          social: 100,
        },
      },
      {
        id: 5,

        month: "May",
        m:5,
        earning: 1900,
        earningType: {
          direct: 1300,
          referral: 300,
          social: 300,
        },
      },
      {
        id: 6,

        month: "Jun",
        m:6,
        earning: 2500,
        earningType: {
          direct: 1800,
          referral: 200,
          social: 500,
        },
      },
      {
        id: 7,

        month: "Jul",
        m:7,
        earning: 2800,
        earningType: {
          direct: 1800,
          referral: 500,
          social: 500,
        },
      },
      {
        id: 8,

        month: "Aug",
        m:8,
        earning: 3200,
        earningType: {
          direct: 2000,
          referral: 500,
          social: 700,
        },
      },
      {
        id: 9,

        month: "Sep",
        m:9,
        earning: 3800,
        earningType: {
          direct: 2500,
          referral: 600,
          social: 700,
        },
      },
      {
        id: 10,

        month: "Oct",
        m:10,
        earning: 4200,
        earningType: {
          direct: 3000,
          referral: 600,
          social: 600,
        },
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App income={income} />
  </React.StrictMode>
);
