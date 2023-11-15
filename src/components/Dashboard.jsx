import React from "react";

function Dashboard() {
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View All Users
            </a>
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View Admin Users
            </a>
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View Normal Users
            </a>
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View New Users
            </a>
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View Active Users
            </a>
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

            <h1 className="display-1 fw-bold mb-2">10</h1>

            <a href="#" className="card-link btn mt-4 p-2">
              View InActive Users
            </a>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Dashboard;
