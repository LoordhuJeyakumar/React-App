// Import React and useRef hook
import React, { useRef } from "react";
// Import UserForm component
import UserForm from "./UserForm";
// Import useNavigate hook
import { useNavigate } from "react-router-dom";

// Define EditUserModal function with eachData and editUserID props
function EditUserModal({ eachData, editUserID }) {
  // Create navigate constant using useNavigate hook
  const navigate = useNavigate();
  // Create modalCloseBtn ref
  const modalCloseBtn = useRef(null);

  // Define handleCloseModal function
  const handleCloseModal = () => {
    // Navigate back to the previous page
    navigate(-1);
  };
  return (
    <>
      {/* The modal container */}
      <div
        className="modal fade modal-xl"
        id={`userID_${eachData.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static" // Sets the backdrop to prevent clicking outside the modal from closing it
        data-bs-keyboard="false" // Disables keyboard navigation for closing the modal
      >
        <div className="modal-dialog ">
          <div className="modal-content w-100">
            <div className="modal-header d-flex justify-content-between">
              <div>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Users Details
                </h1>
              </div>
              {/* The modal close button */}
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
            {/* The modal body */}
            <div className="d-flex dataModelBox">
              {/* The UserForm component for editing the user data */}
              <UserForm
                modalCloseBtn={modalCloseBtn}
                formMode={"edit"}
                userData={eachData}
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
