import React, { useState } from "react"; // Imports React and useState hook
import { ToastContainer } from "react-toastify"; // Imports ToastContainer for displaying notifications
import { NavLink } from "react-router-dom"; // Imports NavLink for creating navigation links

function NavComponent() {
  // useState hook to manage the collapsed state of the navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <div className="container d-flex justify-content-center mt-4 sticky-top ">
      {/* Displays toast notifications */}
      <ToastContainer theme="colored" position="top-left" />

      <nav className="navbar navbar-expand-lg rounded-pill shadow justify-content-center d-flex ">
        <div className="w-75">
          <a href="/" className="text-decoration-none">
            <h2 className="text-md-end text-center m-3 heading">
              User Management
            </h2>
          </a>
        </div>
        {/* Navbar toggler button for collapsing/expanding the navigation links */}
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
          {/* Navigation links container, conditionally collapsed based on isNavCollapsed state */}
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarText"
          >
            {/* Unordered list containing navigation links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-md-evenly  w-100 ">
              {/* Navigation link to the dashboard page */}
              <li className="nav-item ">
                <NavLink to="/" className="nav-link  btn">
                  Dashboard
                </NavLink>
              </li>
              {/* Navigation link to the create-users page */}
              <li className="nav-item ">
                <NavLink to="create-users" className="nav-link btn">
                  Create User
                </NavLink>
              </li>
              {/* Navigation link to the all-users page */}
              <li className="nav-item">
                <NavLink to="all-users" className="nav-link btn">
                  All Users
                </NavLink>
              </li>
              {/* Navigation link to the edit-users page */}
              <li className="nav-item ">
                <NavLink to="edit-users" className="nav-link btn">
                  Edit Users
                </NavLink>
              </li>
              {/* Navigation link to the delete-users page */}
              <li className="nav-item ">
                <NavLink to="delete-users" className="nav-link btn">
                  Delete Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
