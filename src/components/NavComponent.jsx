import React, { useState } from "react";
import Dashboard from "./Dashboard";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUsers";
import DeleteUsers from "./DeleteUsers";
import EditUsers from "./EditUsers";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/dist/collapse";

function NavComponent({ homePageComponent, setHomePageComponent }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  /*  const handleNavButton = (event) => {
    event.preventDefault();
    let navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((el) => el.classList.remove("active"));
    let pageName = event.target.textContent;

    if (pageName === "Dashboard") {
      setHomePageComponent(<Dashboard />);
    } else if (pageName === "Create User") {
      setHomePageComponent(<CreateUser />);
    } else if (pageName === "All Users") {
      setHomePageComponent(<AllUsers />);
    } else if (pageName === "Edit Users") {
      setHomePageComponent(<EditUsers />);
    } else if (pageName === "Delete Users") {
      setHomePageComponent(<DeleteUsers />);
    }
    event.target.classList.add("active");
  }; */
  return (
    <div className="container d-flex justify-content-center mt-4 sticky-top ">
      <ToastContainer theme="colored" position="bottom-right" />
      <nav className="navbar navbar-expand-lg rounded-pill shadow justify-content-center d-flex ">
        <div className="w-75">
          <a href="/" className="text-decoration-none">
            <h2 className="text-md-end text-center m-3 heading">
              User Management
            </h2>
          </a>
        </div>
        {/*  <input
          className="form-control w-50"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        ></input> */}
        <div className="container-fluid justify-content-center rounded-pill ">
          <button
            className="navbar-toggler mb-3"
            type="button"
            onClick={() => {
              setIsNavCollapsed(!isNavCollapsed);
            }}
          >
            <i className="fa-solid fa-bars"> </i>{" "}
            <span className="text-decoration-none">Menu</span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-md-evenly  w-100 ">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link  btn">
                  Dashboard
                </NavLink>
                {/*  <a className="nav-link active btn" aria-current="page">
                  Dashboard
                </a> */}
              </li>

              <li className="nav-item ">
                <NavLink to="create-users" className="nav-link btn">
                  Craete User
                </NavLink>
                {/*  <a className="nav-link btn" onClick={handleNavButton}>
                  Create User
                </a> */}
              </li>
              <li className="nav-item">
                <NavLink to="all-users" className="nav-link btn">
                  All Users
                </NavLink>
                {/* <a
                  className="nav-link "
                  onClick={handleNavButton}
                  role="button"
                  aria-expanded="false"
                >
                  All Users
                </a> */}
              </li>
              <li className="nav-item ">
                <NavLink to="edit-users" className="nav-link btn">
                  Edit Users
                </NavLink>
                {/* <a className="nav-link btn" onClick={handleNavButton}>
                  Edit Users
                </a> */}
              </li>
              <li className="nav-item ">
                <NavLink to="delete-users" className="nav-link btn">
                  Delete Users
                </NavLink>
                {/* <a className="nav-link btn" onClick={handleNavButton}>
                  Delete Users
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
