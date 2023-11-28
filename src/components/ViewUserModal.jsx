// Import React and useRef hook
import React, { useRef } from "react";
// Import useNavigate hook for routing
import { useNavigate } from "react-router-dom";

// Define ViewUserModal component with eachData prop
function ViewUserModal({ eachData }) {
  // Get access to useNavigate hook
  const navigate = useNavigate();
  // Create useRef hook for view model close button
  const viewModelColoseBtnRef = useRef(null);

  //handle view modal close
  const handleViewModelClose = () => {
    navigate(-1); // Go back to the previous page using useNavigate hook
  };
  return (
    <div>
      <div>
        {/* Create a button to trigger the modal */}
        <div
          className="modal fade modal-lg"
          id={`userID_${eachData.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          {/* Create a modal component with user details */}
          <div className="modal-dialog ">
            <div className="modal-content w-100 ">
              {/* Modal header with title */}
              <div className="modal-header d-flex justify-content-between">
                <div>
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Users Details
                  </h1>
                </div>
                <div data-bs-theme="dark">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleViewModelClose}
                  ></button>
                </div>
              </div>
              <div className="d-flex dataModelBox row justify-content-center">
                {/* Modal body with user information table */}
                <div className="modal-body d-flex col-md-6 order-2">
                  {/* Display user details in a table format */}
                  <table className="table table-borderless table-hover table-dark">
                    <tbody>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Fullname
                        </th>
                        <th className="text-center align-middle">
                          {eachData.first_name + " " + eachData.last_name}
                        </th>
                      </tr>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Email
                        </th>
                        <td className="text-end d-flex align-items-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/nqisoomz.json"
                            trigger="in"
                            delay="1500"
                            state="in-assembly"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                          &nbsp;
                          {eachData.email}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Phone
                        </th>
                        <td className="text-end d-flex align-items-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/bgcyfijv.json"
                            trigger="hover"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>
                          {eachData.phone}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Date of Birth
                        </th>
                        <td className="text-end d-flex align-items-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/dkanzxbo.json"
                            trigger="hover"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>{" "}
                          {eachData.dob}{" "}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Gender
                        </th>
                        <td className="text-end d-flex align-items-center">
                          <lord-icon
                            src={
                              eachData.gender == "Female"
                                ? "https://cdn.lordicon.com/pyarizrk.json"
                                : "https://cdn.lordicon.com/mebvgwrs.json"
                            }
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>

                          {eachData.gender}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-end align-middle">
                          Qualification
                        </th>
                        <td className="text-end d-flex align-items-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/svsiboke.json"
                            trigger="in"
                            delay="1500"
                            state="in-reveal"
                            style={{ width: "35px", height: "35px" }}
                          ></lord-icon>

                          {eachData.qualification}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card order-1" style={{ width: "18rem" }}>
                  <lord-icon
                    src={
                      eachData.gender == "Female"
                        ? "https://cdn.lordicon.com/zbblnakr.json"
                        : " https://cdn.lordicon.com/zfmcashd.json"
                    }
                    trigger="hover"
                    state="hover-jump"
                    style={{ width: "250px", height: "250px" }}
                  ></lord-icon>
                  <div className="d-flex justify-content-around m-3">
                    <span className="card-text">
                      {eachData.admin ? (
                        <span>
                          Admin {"    "}
                          <img
                            src="protection.png"
                            alt="Admin User"
                            style={{ width: "25px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          User {"    "}
                          <img
                            src="user.png"
                            style={{ width: "25px" }}
                            alt="Normal User"
                          />
                        </span>
                      )}
                    </span>
                    <span className="card-text">
                      {eachData.userStatus ? (
                        <span>
                          Active {"    "}
                          <img
                            src="check.png "
                            alt="Active"
                            style={{ width: "25px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          In-Active {"    "}
                          <img
                            src="multiply.png"
                            style={{ width: "25px" }}
                            alt="In-Active"
                          />
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text">{eachData.address}</p>
                    <p>
                      {eachData.city} - {eachData.pincode}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  ref={viewModelColoseBtnRef}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleViewModelClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUserModal;
