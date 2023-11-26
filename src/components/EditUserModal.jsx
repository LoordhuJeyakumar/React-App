import React, { useContext, useReducer, useRef, useState } from "react";
import UserForm from "./UserForm";
import { initialState, reducer } from "../reducers/FormReducer";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

function EditUserModal({ eachData, editUserID }) {
  // Destructure the useReducer hook to access the  dispatch function
  const [, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  // Create a local state variable to store user data
  const [userData, SetUserData] = useState(eachData);

  const contextData = useContext(DataContext);

  // Create a local state variable to store the ID of the user being edited
  /*   const [editUserID, setEditUserID] = useState(null); */

  // Create a useRef hook to reference the modal close button and cancel button
  const modalCloseBtn = useRef(null);

  // Define a function to get user details and update the state accordingly
  const getUserDetails = () => {
    // Update the userData state with the current data
    SetUserData(eachData);

    // Update the editUserID state with the ID of the user being edited
    setEditUserID(eachData.id);

    // Dispatch an action to update the userData in the reducer
    dispatch({
      type: "updateUser",
      payLoad: { value: userData },
    });
  };

  const handleCloseModal = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        className="modal fade modal-xl"
        id={`userID_${eachData.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog ">
          <div className="modal-content w-100">
            <div className="modal-header d-flex justify-content-between">
              <div>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Users Details
                </h1>
              </div>
              <div data-bs-theme="dark">
                <button
                  type="button"
                  className="btn-close text-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
            </div>
            <div className="d-flex dataModelBox">
              <UserForm
                modalCloseBtn={modalCloseBtn}
                formMode={"edit"}
                userData={userData}
                /* setEditUserID={setEditUserID} */
                editUserID={editUserID}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={modalCloseBtn}
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserModal;
