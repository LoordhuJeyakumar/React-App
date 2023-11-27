// Import React and useContext hook and DataContext from App component
import React, { useContext } from "react";
import { DataContext } from "../App";
// Import Link and useNavigate from react-router-dom
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  // Define data variable to use data from DataContext
  const data = useContext(DataContext);
  // Get navigate function from useNavigate
  const navigate = useNavigate();
  // Calculate total number of users
  const totalUsers = data.data.length;

  // Initialize empty arrays for admin users, normal users, active users, and inactive users
  const adminUsersArr = [];
  const normalUsersArr = [];
  const activeUsers = [];
  const inActiveUsers = [];

  // Separates admin and normal users based on 'admin' property
  data.data.forEach((eachData) => {
    if (eachData.admin) {
      adminUsersArr.push(eachData);
    } else {
      normalUsersArr.push(eachData);
    }
  });

  // Separates active and inactive users based on 'userStatus' property
  data.data.forEach((eachData) => {
    if (eachData.userStatus) {
      activeUsers.push(eachData);
    } else {
      inActiveUsers.push(eachData);
    }
  });

  // Creates an array of the last seven days' dates
  let dateArr = [];
  for (let i = 0; i < 7; i++) {
    const todayDate = new Date(Date.now());
    todayDate.setDate(todayDate.getDate() - i);
    dateArr.push(todayDate.getDate());
  }

  // Filter new users based on userCreationDate and dateArr
  const newUsers = data.data.filter((eachData) => {
    if (dateArr.length != 0) {
      if (dateArr.includes(+eachData.userCreationDate.slice(3, 5))) {
        return eachData;
      }
    }
  });

  // Renders the Dashboard component
  return (
    <div className="roll-out">
      <div className="container-fluid mt-2 justify-content-center row">
        <h1 className="text-center pt-3">Dashboard</h1>
        <div className="borderDesign"></div>
        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">All Users</h3>
              <lord-icon
                className=""
                src="https://cdn.lordicon.com/tlxagvyb.json"
                trigger="in"
                delay="500"
                state="in-reveal"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>

            <h1 className="display-1 fw-bold mb-2">{totalUsers}</h1>
            {/*Display total users count */}

            {/*Link to view all users */}
            <Link className="card-link btn mt-4 p-2" to="all-users">
              View All Users
            </Link>
          </div>
        </div>

        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">Admin Users</h3>

              <lord-icon
                src="https://cdn.lordicon.com/uaetnrqo.json"
                trigger="in"
                delay="2000"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>

            <h1 className="display-1 fw-bold mb-2">{adminUsersArr.length}</h1>
            {/*Display total admin users count */}
            {/*navigate to view all admin users */}
            <button
              className="btn card-link btn mt-4 p-2"
              onClick={() => {
                navigate({
                  pathname: "/all-users",
                  search: "?filterBy=admin",
                });
              }}
            >
              View Admin Users
            </button>
          </div>
        </div>
        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">Normal Users</h3>
              <script src="https://cdn.lordicon.com/lordicon-1.2.0.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/xcxzayqr.json"
                trigger="in"
                state="hover-looking-around"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>
            {/*Display total normal users count */}
            <h1 className="display-1 fw-bold mb-2">{normalUsersArr.length}</h1>
            {/*navigate to view all normal users */}
            <button
              className="btn card-link btn mt-4 p-2"
              onClick={() => {
                navigate({
                  pathname: "/all-users",
                  search: "?filterBy=user",
                });
              }}
            >
              View Normal Users
            </button>
          </div>
        </div>

        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <div>
                <h3 className="card-title text-center fs-2 mb-0">New Users</h3>
                <small className="p-0 m-0 b-0">Added in last 7 days</small>
              </div>
              <lord-icon
                src="https://cdn.lordicon.com/xcxzayqr.json"
                trigger="in"
                delay="1000"
                state="morph-group"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>

            <div className="borderDesign mb-3"></div>
            {/*Display total new users count */}
            <h1 className="display-1 fw-bold mb-2">{newUsers.length}</h1>
            {/*navigate to view all new users */}
            <button
              className="btn card-link btn mt-4 p-2"
              onClick={() => {
                navigate({
                  pathname: "/all-users",
                  search: "?filterBy=newUsers",
                });
              }}
            >
              View New Users
            </button>
          </div>
        </div>

        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">Active Users</h3>
              <script src="https://cdn.lordicon.com/lordicon-1.2.0.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/spjdafms.json"
                trigger="hover"
                delay="2000"
                state="in-reveal"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>
            {/*Display total active users count */}
            <h1 className="display-1 fw-bold mb-2">{activeUsers.length}</h1>
            {/*navigate to view all active users */}
            <button
              className="card-link btn mt-4 p-2"
              onClick={() => {
                navigate({
                  pathname: "/all-users",
                  search: "?filterBy=activeUsers",
                });
              }}
            >
              View Active Users
            </button>
          </div>
        </div>

        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">In-Active Users</h3>
              <script src="https://cdn.lordicon.com/lordicon-1.2.0.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/xcxzayqr.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>
            {/*Display total inactive users count */}
            <h1 className="display-1 fw-bold mb-2">{inActiveUsers.length}</h1>
            {/*navigate to view all inactive users */}
            <button
              className="btn card-link btn mt-4 p-2"
              onClick={() => {
                navigate({
                  pathname: "/all-users",
                  search: "?filterBy=inActiveUsers",
                });
              }}
            >
              View InActive Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
