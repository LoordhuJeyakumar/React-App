import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
/* import "./css/sb-admin-2.js";
import "./css/sb-admin-2.min.js"; */

const income = [
  {
    id: 1,
    year: 2023,
    month: "Jan",
    earning: 1000,
    earningType: {
      direct: 600,
      referral: 100,
      social: 200,
    },
  },
  {
    id: 2,
    year: 2023,
    month: "Feb",
    earning: 1500,
    earningType: {
      direct: 800,
      referral: 300,
      social: 400,
    },
  },
  {
    id: 3,
    year: 2023,
    month: "Mar",
    earning: 1800,
    earningType: {
      direct: 1000,
      referral: 300,
      social: 500,
    },
  },
  {
    id: 4,
    year: 2023,
    month: "Apr",
    earning: 1300,
    earningType: {
      direct: 1000,
      referral: 200,
      social: 100,
    },
  },
  {
    id: 5,
    year: 2023,
    month: "May",
    earning: 1900,
    earningType: {
      direct: 1300,
      referral: 300,
      social: 300,
    },
  },
  {
    id: 6,
    year: 2023,
    month: "Jun",
    earning: 2500,
    earningType: {
      direct: 1800,
      referral: 200,
      social: 500,
    },
  },
  {
    id: 7,
    year: 2023,
    month: "Jul",
    earning: 2800,
    earningType: {
      direct: 1800,
      referral: 500,
      social: 500,
    },
  },
  {
    id: 8,
    year: 2023,
    month: "Aug",
    earning: 3200,
    earningType: {
      direct: 2000,
      referral: 500,
      social: 700,
    },
  },
  {
    id: 9,
    year: 2023,
    month: "Sep",
    earning: 3800,
    earningType: {
      direct: 2500,
      referral: 600,
      social: 700,
    },
  },
  {
    id: 10,
    year: 2023,
    month: "Oct",
    earning: 4200,
    earningType: {
      direct: 3000,
      referral: 600,
      social: 600,
    },
  },
  {
    id: 11,
    year: 2023,
    month: "N0v",
    earning: 4800,
    earningType: {
      direct: 3500,
      referral: 500,
      social: 800,
    },
  },
  {
    id: 2,
    year: 2023,
    month: "Dec",
    earning: 5500,
    earningType: {
      direct: 4000,
      referral: 1000,
      social: 500,
    },
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App income = { income }/>
  </React.StrictMode>
);
