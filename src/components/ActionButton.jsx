import React, { useContext, useReducer, useState } from "react";
import UserForm from "./UserForm";
import { DataContext } from "../App";
import { initialState, reducer } from "../reducers/FormReducer";

function ActionButton({ eachData, actionBtnType }) {
  const [formMode, setFormMode] = useState("add");
  const [state, dispatch] = useReducer(reducer, initialState);
  let actionButtons = [];
  const [userData, SetUserData] = useState(eachData);

  const apiData = useContext(DataContext);

  const userDob = new Date(eachData.dob)
 

  const getUserDetails = (userID) => {

    SetUserData(eachData);

    dispatch({
      type: "updateUser",
      payLoad:{ value:userData,}
    });

   

  };

  if (actionBtnType == "view") {
    return (
      <div>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#userID_${eachData.id}`}
        >
          View User
        </button>
        <div
          className="modal fade modal-lg"
          id={`userID_${eachData.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content w-100">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Users Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex dataModelBox">
                <div className="modal-body d-flex">
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
                <div className="card" style={{ width: "18rem" }}>
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
                          Admin {'    '}
                          <img
                            src="../../src/assets/protection.png"
                            alt="Admin User"
                            style={{ width: "10px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          User {'    '}
                          <img
                            src="../../src/assets/user.png"
                            style={{ width: "10px" }}
                            alt="Normal User"
                          />
                        </span>
                      )}
                    </span>
                    <span className="card-text">
                      {eachData.userStatus ? (
                        <span>
                          Active   {'    '}
                          <img
                            src="../../src/assets/check.png"
                            alt="Active"
                            style={{ width: "10px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          In-Active {'    '}
                          <img
                            src="../../src/assets/multiply.png"
                            style={{ width: "10px" }}
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
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (actionBtnType == "edit") {
    return (
      <div>
        <button
          className="btn text-black btn-warning"
          data-bs-toggle="modal"
          data-bs-target={`#userID_${eachData.id}`}
          onClick={getUserDetails}
        >
          Edit User
        </button>

        <div
          className="modal fade modal-xl"
          id={`userID_${eachData.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content w-100">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Users Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex dataModelBox">
                <UserForm formMode={"edit"} userData={userData}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionButton;
