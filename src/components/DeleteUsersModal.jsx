// Import React library and useLocation and useNavigate hooks from react-router-dom
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define DeleteUsersModal component with props: eachData, handleDeleteUser, and cancelBtnRef
function DeleteUsersModal({ eachData, handleDeleteUser, cancelBtnRef }) {
  // Get the current location and history and navigate function from React Router
  const location = useLocation();
  const navigate = useNavigate();

  // Define handleCancelDelete function to handle canceling the delete modal
  const handleCancelDelete = () => {
    // Check if the location object has a state property
    if (location.state === null) {
      navigate(-1); // If no state property, go back one page in the history
    } else {
      // If there is a state property

      // Check if the delete property in state is false
      if (!location.state.delete) {
        navigate(-1); // If delete is false, go back one page in the history
      }
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={`userID_${eachData.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancelDelete}
              ></button>
            </div>
            <div className="modal-body">
              <h3>Are you Sure ?</h3>
              <h5>Do you want to delete</h5>

              {/* Display the user's information */}
              <div
                className="card d-flex flex-row"
                style={{ background: "transparent" }}
              >
                <div>
                  {/* Display an avatar based on the user's gender */}
                  <lord-icon
                    src={
                      eachData.gender == "Female"
                        ? "https://cdn.lordicon.com/zbblnakr.json"
                        : " https://cdn.lordicon.com/zfmcashd.json"
                    }
                    trigger="hover"
                    state="hover-jump"
                    style={{ width: "10rem", height: "10rem" }}
                  ></lord-icon>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {eachData.first_name + " " + eachData.last_name}
                  </h5>
                  <small>User ID : {eachData.id}</small>
                  <div className="card-text mt-3">
                    <p className="card-text">
                      {/* Display the user's role */}
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
                    </p>
                    <p className="card-text">
                      {/* Display the user's status */}
                      {eachData.userStatus ? (
                        <span>
                          Active {"    "}
                          <img
                            src="check.png"
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={cancelBtnRef}
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUsersModal;
