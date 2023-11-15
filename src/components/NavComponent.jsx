import React from "react";
import Dashboard from "./Dashboard";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUsers";
import DeleteUsers from "./DeleteUsers";
import EditUsers from "./EditUsers";

function NavComponent({ homePageComponent, setHomePageComponent }) {
  const handleNavButton = (event) => {
    event.preventDefault();
    let navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(el=>el.classList.remove('activeLink'))
    let pageName = event.target.textContent;
    
    if (pageName === "Dashboard") {
      setHomePageComponent(<Dashboard />);
    } else if (pageName === "Create User") {
      setHomePageComponent(<CreateUser />);
    }else if (pageName === "All Users") {
      setHomePageComponent(<AllUsers />);
    }else if (pageName === "Edit Users") {
      setHomePageComponent(<EditUsers />);
    }else if (pageName === "Delete Users") {
      setHomePageComponent(<DeleteUsers />);
    }
    event.target.classList.add('activeLink')
    
  };
  return (
    <div className="container d-flex justify-content-center mt-4 sticky-top " >
      <nav className="navbar navbar-expand-lg rounded-pill shadow justify-content-center d-flex ">
        <h2 className="text-md-end text-center m-3 heading w-50">
          User Management
        </h2>
        <input
          className="form-control w-50"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        ></input>
        <div className="container-fluid justify-content-center rounded-pill ">
          <button
            className="navbar-toggler mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"> </i>{" "}
            <span className="text-decoration-none">Menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-md-evenly  w-100 ">
              <li className="nav-item ">
                <a
                  className="nav-link activeLink btn"
                  aria-current="page"
                  onClick={handleNavButton}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link btn" onClick={handleNavButton}>
                  Create User
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  onClick={handleNavButton}
                  role="button"
                  aria-expanded="false"
                >
                  All Users
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link btn" onClick={handleNavButton}>
                  Edit Users
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link btn" onClick={handleNavButton}>
                  Delete Users
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
