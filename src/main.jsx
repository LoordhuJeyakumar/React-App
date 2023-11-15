import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

const usersDetails = [
  {
    id: 1,
    firstName: "Loordhu",
    lastName: "Jeyakumar",
    email: "loordhujeyakumar@gmail.com",
    phone: 9600693684,
    dob: "03-05-1994",
    qualification: "+1",
    city: "Tenkasi",
    state: "Tamil Nadu",
    address: "3/525-19, new csi church street, melameignanapuram",
    gender: "male",
    admin: true,
    userStatus: true,
    fullname: () => {
      return `${this.firstName} ${this.lastName}`;
    },
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App usersDetails={usersDetails} />
  </React.StrictMode>
);
