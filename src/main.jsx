import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const priceCardData = [
  {
    id: 1,
    packageName: "Free",
    price: "$0/month",
    user: "Single User",
    storage: "50GB Storage",
    publicProjects: true,
    comunityAccess: true,
    privateProjects: false,
    support: false,
    subDomain: false,
    reports: false,
  },
  {
    id: 2,
    packageName: "Plus",
    price: "$9/month",
    user: "5 Users",
    storage: "50GB Storage",
    publicProjects: true,
    comunityAccess: true,
    privateProjects: true,
    support: true,
    subDomain: true,
    reports: false,
  },
  {
    id: 3,
    packageName: "Pro",
    price: "$49/month",
    user: "Unlimited User",
    storage: "50GB Storage",
    publicProjects: true,
    comunityAccess: true,
    privateProjects: true,
    support: true,
    subDomain: true,
    reports: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App cardData={priceCardData} />
  </React.StrictMode>
);
