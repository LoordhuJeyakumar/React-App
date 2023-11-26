import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DeleteUsersModal({ eachData, handleDeleteUser, cancelBtnRef }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCancelDelete = () => {
    if (location.state === null) {
      navigate(-1);
    } else {
      if (!location.state.delete) {
        navigate(-1);
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

              <div
                className="card d-flex flex-row"
                style={{ background: "transparent" }}
              >
                <div>
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
                      {eachData.admin ? (
                        <span>
                          Admin {"    "}
                          <img
                            src="../../src/assets/protection.png"
                            alt="Admin User"
                            style={{ width: "25px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          User {"    "}
                          <img
                            src="../../src/assets/user.png"
                            style={{ width: "25px" }}
                            alt="Normal User"
                          />
                        </span>
                      )}
                    </p>
                    <p className="card-text">
                      {eachData.userStatus ? (
                        <span>
                          Active {"    "}
                          <img
                            src="../../src/assets/check.png"
                            alt="Active"
                            style={{ width: "25px" }}
                          />
                        </span>
                      ) : (
                        <span>
                          In-Active {"    "}
                          <img
                            src="../../src/assets/multiply.png"
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
