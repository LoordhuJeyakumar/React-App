import React, { useContext, useReducer, useRef, useState } from "react";
import { initialState, reducer } from "../reducers/FormReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { DataContext } from "../App";
import ViewUserModal from "./ViewUserModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EditUserModal from "./EditUserModal";
import DeleteUsersModal from "./DeleteUsersModal";

function ActionButton({ eachData, actionBtnType }) {
  const navigate = useNavigate();
  const location = useLocation();
  // Destructure the useReducer hook to access the  dispatch function
  const [, dispatch] = useReducer(reducer, initialState);

  // Create a local state variable to store user data
  const [userData, SetUserData] = useState(eachData);

  // Create a local state variable to store the ID of the user being edited
  const [editUserID, setEditUserID] = useState(null);

  // Create a useRef hook to reference the modal close button and cancel button
  const cancelBtnRef = useRef(null);

  const contextData = useContext(DataContext);

  // Define a function to get user details and update the state accordingly
  const getUserDetails = () => {
    navigate(eachData.id);
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

  const handleDeleteUser = () => {
    location.state = { delete: true };
    
    let deletUserID = eachData.id;
    axios
      .delete(`https://usermanagement-api.onrender.com/usersDetails/${deletUserID}`)
      .then((response) => {
        if (response.status == 200) {
          toast.info("User successfully Deleted");
          contextData.setIsUserAdded(true);
          contextData.setLoadingData(false);

          if (cancelBtnRef) {
            cancelBtnRef.current.click();
          }
          navigate(-1);
          setTimeout(() => {
            contextData.setLoadingData(true);
            contextData.setIsUserAdded(false);
          }, 500);
        }
    
      })
      .catch((error)=>{
        if (cancelBtnRef) {
          cancelBtnRef.current.click();
        }
        console.error('Faild to delete user', error);
      })
  };

  // Check if the action button type is "view"
  if (actionBtnType == "view") {
    // Return a React component that displays user details within a modal
    return (
      <>
        <Link to={`${eachData.id}`}>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#userID_${eachData.id}`}
            onClick={() => {
              navigate(eachData.id);
            }}
          >
            View User
          </button>
        </Link>
        <ViewUserModal eachData={eachData} />
      </>
    );
  }
  // Check if the action button type is "edit"
  else if (actionBtnType == "edit") {
    // Render the edit user modal
    return (
      <>
        <Link to={`${eachData.id}`}>
          <button
            className="btn text-black btn-warning"
            data-bs-toggle="modal"
            data-bs-target={`#userID_${eachData.id}`}
            onClick={getUserDetails}
          >
            Edit User
          </button>
        </Link>
        {/* Create a button to trigger the edit user modal */}
        <EditUserModal eachData={eachData} editUserID={editUserID} />
      </>
    );
  } else if (actionBtnType == "delete") {
    return (
      <div>
        {/* Create a button to trigger the edit user modal */}
        <Link to={`${eachData.id}`}>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target={`#userID_${eachData.id}`}
            onClick={getUserDetails}
          >
            Delete User
          </button>
        </Link>

        <DeleteUsersModal
          handleDeleteUser={handleDeleteUser}
          eachData={eachData}
          cancelBtnRef={cancelBtnRef}
        />
      </div>
    );
  }
}

export default ActionButton;
