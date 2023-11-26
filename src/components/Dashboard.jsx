import React, { useContext } from "react";
import { DataContext } from "../App";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Dashboard() {
  const data = useContext(DataContext);
  const [searchParams, setSearchParams] = useSearchParams({
    filterBy: '',
  });

  const navigate = useNavigate();
  const totalUsers = data.data.length;
  const adminUsersArr = [];
  const normalUsersArr = [];
  const activeUsers = [];
  const inActiveUsers = [];
  data.data.forEach((eachData) => {
    if (eachData.admin) {
      adminUsersArr.push(eachData);
    } else {
      normalUsersArr.push(eachData);
    }
  });

  data.data.forEach((eachData) => {
    if (eachData.userStatus) {
      activeUsers.push(eachData);
    } else {
      inActiveUsers.push(eachData);
    }
  });

  let dateArr = [];
  for (let i = 0; i < 7; i++) {
    const todayDate = new Date(Date.now());
    todayDate.setDate(todayDate.getDate() - i);
    dateArr.push(todayDate.getDate());
  }
  const newUsers = data.data.filter((eachData) => {
    if (dateArr.length != 0) {
      if (dateArr.includes(+eachData.userCreationDate.slice(3, 5))) {
        return eachData;
      }
    }
  });

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

            <Link className="card-link btn mt-4 p-2" to="all-users">
              View All Users
            </Link>
          </div>
        </div>

        {/*  */}
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

            <button className="btn card-link btn mt-4 p-2"  onClick={()=>{
              navigate({
                pathname: '/all-users',
                search: '?filterBy=admin',
              })
            }}>
              View Admin Users
            </button>
          </div>
        </div>
        {/*  */}
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

            <h1 className="display-1 fw-bold mb-2">{normalUsersArr.length}</h1>

            <button  className="btn card-link btn mt-4 p-2" onClick={()=>{
              navigate({
                pathname: '/all-users',
                search: '?filterBy=user',
              })
            }}>
              View Normal Users
            </button>
          </div>
        </div>
        {/*  */}
        <div className="card dashBoardCards m-3  col-xl-3 col-md-6">
          <div className="card-body d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-around w-100">
              <h3 className="card-title text-center">New Users</h3>
              <script src="https://cdn.lordicon.com/lordicon-1.2.0.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/xcxzayqr.json"
                trigger="in"
                delay="1000"
                state="morph-group"
                style={{ width: "80px", height: "80px" }}
              ></lord-icon>
            </div>
            <div className="borderDesign mb-3"></div>

            <h1 className="display-1 fw-bold mb-2">{newUsers.length}</h1>

            <button className="btn card-link btn mt-4 p-2" onClick={()=>{
              navigate({
                pathname: '/all-users',
                search: '?filterBy=newUsers',
              })
            }}>
              View New Users
            </button>
          </div>
        </div>
        {/*  */}
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

            <h1 className="display-1 fw-bold mb-2">{activeUsers.length}</h1>

            <button className="card-link btn mt-4 p-2" onClick={()=>{
              navigate({
                pathname: '/all-users',
                search: '?filterBy=activeUsers',
              })
            }}>
              View Active Users
            </button>
          </div>
        </div>
        {/*  */}
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

            <h1 className="display-1 fw-bold mb-2">{inActiveUsers.length}</h1>

            <button className="btn card-link btn mt-4 p-2" onClick={()=>{
              navigate({
                pathname: '/all-users',
                search: '?filterBy=inActiveUsers',
              })
            }}>
              View InActive Users
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Dashboard;
