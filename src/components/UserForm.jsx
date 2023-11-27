// Import React and necessary hooks
import React, { useContext, useEffect, useReducer, useRef } from "react";
// Import initial state and reducer function for managing form state
import { initialState, reducer } from "../reducers/FormReducer";

// Import ReactToastify CSS for styling notifications
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios for making HTTP requests
import { DataContext } from "../App"; // Import DataContext for accessing global data
import { toast } from "react-toastify"; // Import toast function for displaying notifications
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for routing

function UserForm({ formMode, userData, editUserID }) {
  // Define useNavigate hook to navigate between routes
  const navigate = useNavigate();
  // Use useReducer hook to manage the form state
  let [state, dispatch] = useReducer(reducer, initialState);
  // Define useRef hook to store references to the addUserRef input and handleUpdateButton btn and close btn
  const addUserRef = useRef(null);
  const handleUpdateButton = useRef(null);
  const closeBTn = useRef();

  // Define contextData variable to access the DataContext context
  const contextData = useContext(DataContext);

  // Define creationDateTimeStamp variable to store the current timestamp
  const creationDateTimeStamp = Date.now();
  // Create a new Date object from the timestamp
  const creationDate = new Date(creationDateTimeStamp);

  // Use useEffect hook to initialize the user creation date and time in the form state
  useEffect(() => {
    dispatch({
      // Action type to update the user creation date and time
      type: "creationDate",
      payLoad: {
        // User creation date and time in a localized format
        userCreationDate: creationDate.toLocaleDateString(),
        userCreationTime: creationDate.toLocaleTimeString(),
        // User creation timestamp in milliseconds
        userCreationTimeStamp: creationDateTimeStamp,
      },
    });
  }, []);

  // If the form mode is "edit", automatically trigger the update button click
  // whenever the editUserID changes
  if (formMode == "edit") {
    useEffect(() => {
      if (handleUpdateButton) {
        handleUpdateButton.current.click();
      }
    }, [editUserID]);
  }

  // Handle input change for any form input text element
  const handleInputChange = (event) => {
    dispatch({
      // Action type indicating an input change
      type: "inputChange",
      payLoad: {
        // Name of the input field
        name: event.target.name,
        // Value entered in the input field
        value: event.target.value,
      },
    });
  };

  // Handle gender radio button change
  const handleGenderChange = (event) => {
    dispatch({
      type: "gender", // Action type indicating a gender change
      payLoad: { value: event.target.value }, // Selected gender value
    });
  };

  // Handle user type radio button change
  const handleUserTypeChange = (event) => {
    // Convert the checkbox value to a boolean
    const userTypeValue = event.target.value == "true";
    dispatch({
      type: "userType", // Action type indicating a user type change
      payLoad: { value: userTypeValue }, // Selected user type value (boolean)
    });
  };

  // Handle state selection dropdown change
  const handleStateSelect = (event) => {
    dispatch({
      type: "selctState", // Action type indicating a state selection change
      payLoad: {
        name: event.target.name, // Name of the state selection dropdown
        value: event.target.selectedOptions[0].value, // Selected state value
      },
    });
  };

  function addUserDetails(event) {
    // Prevent form submission if there are any invalid fields
    if (!addUserRef.current.checkValidity()) {
      toast.error("Please fill out all required fields");
      event.preventDefault();
      event.stopPropagation();
    }
    // Add 'was-validated' class to the form to show validation feedback
    addUserRef.current.classList.add("was-validated");

    // If the form is valid, proceed with user details submission
    if (addUserRef.current.checkValidity()) {
      // Send user details to the server using an HTTP POST request
      axios.post("http://localhost:3000/usersDetails", state);

      event.preventDefault();
      // Reset form state to initial values
      dispatch({ type: "init" });
      // Display success toast message
      toast.success("User successfully added");

      // Update user added flag in the context
      contextData.setIsUserAdded(true);
      // Set loading state to false to stop form re-validation
      contextData.setLoadingData(false);

      // Set a timeout to reset the loading state and user added flag
      setTimeout(() => {
        // Set loading state to true to indicate data retrieval
        contextData.setLoadingData(true);
        contextData.setIsUserAdded(false);
      }, 500); // Wait for 500 milliseconds
    }
  }

  //This function will get user details in form fields
  function handleGetUsers(event) {
    event.preventDefault();

    // Update form state with creation date and time information
    dispatch({
      type: "creationDate",
      payLoad: {
        userCreationDate: creationDate.toLocaleDateString(),
        userCreationTime: creationDate.toLocaleTimeString(),
        userCreationTimeStamp: creationDateTimeStamp,
      },
    });

    // Update form state with user data
    dispatch({ type: "updateUser", payLoad: userData });
  }
  // Function to handle closing the modal
  const handleCloseModal = () => {
    // Trigger a click event on the close button ref
    closeBTn.current.click();
  };

  // Function to handle updating user details
  const updateUserDetails = (event) => {
    // Go back to the previous page in the navigation history
    navigate(-1);

    // Prevent form submission if there are any invalid fields
    if (!addUserRef.current.checkValidity()) {
      toast.error("Please fill out all required fields");
      event.preventDefault();
      event.stopPropagation();
    }
    // Add 'was-validated' class to the form to show validation feedback
    addUserRef.current.classList.add("was-validated");

    // If the form is valid, proceed with user details update
    if (addUserRef.current.checkValidity()) {
      event.preventDefault();
      // Send user details update request to the server using an HTTP PUT request
      axios
        .put(`http://localhost:3000/usersDetails/${editUserID}`, state)
        .then((response) => {
          // Check if the update request was successful
          if (response.status === 200) {
            // Reset form state to initial values
            dispatch({ type: "init" });

            // Display success toast message
            toast.info("User successfully Updated");

            // Update user added state in the context
            contextData.setIsUserAdded(true);
            // Set loading state to false to stop form re-validation
            contextData.setLoadingData(false);

            // If a close button is available, close the modal
            if (closeBTn) {
              handleCloseModal();
            }

            // Set a timeout to reset the loading state and user added state
            setTimeout(() => {
              // Set loading state to true to indicate data retrieval
              contextData.setLoadingData(true);
              contextData.setIsUserAdded(false);
            }, 500);
          }
        })
        .catch(function (error) {
          // Alert and log the error message
          alert(error.message);
          toast.error(error.message);
          console.log(error.toJSON());
        });
    }
  };

  return (
    <div>
      {/* Form for adding or editing user details */}
      <form
        className="row g-3 needs-validation p-4"
        noValidate
        onSubmit={formMode == "add" ? addUserDetails : updateUserDetails} // Submit handler based on form mode
        // Form ref for validation and accessing form elements
        ref={addUserRef}
      >
        {/* Close button to dismiss the modal */}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          data-bs-target={`#userID_${editUserID}`} // Target specific modal based on editUserID
          aria-label="Close"
          ref={closeBTn} // Button ref for triggering click
          hidden
        ></button>
        <div className="b-0 m-0 p-0 col-sm-9 align-items-center  text-middle d-flex">
          {formMode == "edit" ? (
            <button
              hidden={true}
              ref={handleUpdateButton}
              className="btn btn-info text-black"
              onClick={handleGetUsers} // Handler to fetch user details
            >
              GetUser Details
            </button>
          ) : (
            "" // Empty element if adding new user
          )}
          {/* Input group for displaying user ID */}
          <div className="input-group mb-3 w-25 justify-content-center ">
            <span className="input-group-text">User ID</span>
            <input
              name="userID"
              defaultValue={
                // Set default user ID based on form mode
                formMode == "add"
                  ? contextData.data[contextData.data.length - 1].id + 1 // Next ID based on existing data
                  : state.id
              }
              type="text"
              readOnly
              className="form-control w-50 border-0"
              aria-label="userID"
              style={{ cursor: "not-allowed" }}
            />
          </div>
        </div>

        {/* Section for displaying user creation date and time */}
        <div className="b-0 m-0 p-0 col-sm-3 justify-content-center align-items-end d-flex flex-column">
          <div>
            <small htmlFor="firstname" className="form-label ">
              User Creation Date & Time
            </small>
          </div>

          <small className="pt-1">
            <p className="m-0">{state.userCreationDate}</p>
            <p>{state.userCreationTime}</p>
          </small>
        </div>

        {/* Input fields for user details */}
        <div className="col-md-4">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>
          <input
            onChange={handleInputChange} // Handler for input change
            name="first_name"
            type="text"
            className="form-control ps-1"
            id="firstname"
            required
            defaultValue={state.first_name} // Set default value from form state
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your Firstname.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastname" className="form-label">
            Last name
          </label>
          <input
            name="last_name"
            type="text"
            className="form-control ps-1"
            id="lastname"
            required
            onChange={handleInputChange} // Handler for input change
            defaultValue={state.last_name} // Set default value from form state
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your Lastname.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <input
              onChange={handleInputChange} // Handler for input change
              name="email"
              type="email"
              className="form-control ps-1"
              id="email"
              aria-describedby="inputGroupPrepend"
              required
              defaultValue={state.email} // Set default value from form state
            />
            <div className="invalid-feedback">Please enter your e-mail.</div>
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="qualification" className="form-label">
            Qualification
          </label>
          <div className="input-group has-validation">
            <input
              defaultValue={state.qualification} // Set default value from form state
              onChange={handleInputChange} // Handler for input change
              name="qualification"
              type="text"
              className="form-control ps-1"
              id="qualification"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Please enter your qualification.
            </div>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="col-md-4">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <div className="input-group has-validation">
            {/* Input field for date of birth */}
            <input
              defaultValue={state.dob} // Set the default value to the dob stored in state
              format="yyyy-mm-dd" // Specify the date format
              data-date="" // Placeholder for datepicker
              data-date-format="DD MMMM YYYY" // Format for displaying the date
              onChange={(event) => {
                // Handle change event for the date input field
                dispatch({
                  type: "dob", // Action type for updating dob
                  payLoad: {
                    name: event.target.name, // Name of the input field
                    value: event.target.value, // Value entered by the user
                  },
                });
              }}
              name="dob"
              type="date"
              className="form-control ps-1"
              id="dob"
              aria-describedby="inputGroupPrepend"
              required
            />
            {/* Validation message for date of birth */}
            <div className="invalid-feedback">
              Please select your date of birth.
            </div>
          </div>
        </div>

        {/* Mobile Number */}
        <div className="col-md-4">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <div className="input-group has-validation">
            <input
              defaultValue={state.phone} // Set the default value to the phone number stored in state
              onChange={handleInputChange}
              name="phone"
              type="number"
              className="form-control ps-1"
              id="mobile"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Please enter valid mobile number.
            </div>
          </div>
        </div>

        {/* City */}
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            defaultValue={state.city}
            onChange={handleInputChange}
            name="city"
            type="text"
            className="form-control ps-1"
            id="city"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        {/* State */}
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            value={state.state}
            name="state"
            className="form-select ps-2"
            id="state"
            required
            onChange={handleStateSelect}
          >
            <option>Choose State...</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        {/* Pincode */}
        <div className="col-md-4 ">
          <label htmlFor="pincode" className="form-label">
            Pincode
          </label>
          <input
            defaultValue={state.pincode}
            onChange={handleInputChange}
            name="pincode"
            type="number"
            className="form-control ps-1"
            id="pincode"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid pincode.
          </div>
        </div>

        {/* Address */}
        <div className="col-md-12">
          <div className="input-group has-validation">
            <span className="input-group-text">Address</span>
            <textarea
              defaultValue={state.address}
              onChange={handleInputChange}
              name="address"
              required
              className="form-control ps-1"
              aria-label="Address"
            ></textarea>
            <div className="invalid-feedback">
              Please provide a your Address.
            </div>
          </div>
        </div>
        <div className="borderDesign"></div>

        {/* Gender Radio inputs */}
        <div className="col-6 row justify-content-evenly">
          <div className="col-md-6 mb-2  justify-content-md-center d-flex align-items-center">
            <div className=" has-validation ">
              <span className="form-label text-center">Select Gender</span>
              <div className="form-check ">
                <label htmlFor="male" className="form-check-lable">
                  Male
                </label>
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  className="form-check-input ps-1"
                  id="male"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="gender"
                  checked={state.gender === "Male"}
                  value={"Male"}
                />
              </div>
              <div className="form-check">
                <label htmlFor="female" className="form-check-lable">
                  Female
                </label>
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  className="form-check-input"
                  id="female"
                  aria-describedby="inputGroupPrepend"
                  name="gender"
                  value={"Female"}
                  checked={state.gender === "Female"}
                />
              </div>
              <div className="form-check">
                <label htmlFor="other" className="form-check-lable">
                  Other
                </label>
                <input
                  onChange={handleGenderChange}
                  type="radio"
                  className="form-check-input"
                  id="other"
                  aria-describedby="inputGroupPrepend"
                  name="gender"
                  value={"Other"}
                  checked={state.gender === "Other"}
                />
              </div>

              <div className="invalid-feedback">Please select gender.</div>
            </div>
          </div>

          {/* User Type Radio inputs */}
          <div className="col-md-6 d-flex justify-content-md-center align-items-center">
            <div>
              <label className="form-label" htmlFor="admin">
                User Role
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="admin"
                  id="admin"
                  checked={state.admin}
                  onChange={handleUserTypeChange}
                  value={1 == 1}
                />
                <label className="form-check-label w-100" htmlFor="admin">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="admin"
                  id="user"
                  value={1 != 1}
                  checked={!state.admin}
                  onChange={handleUserTypeChange}
                />
                <label className="form-check-label w-100" htmlFor="user">
                  User
                </label>
              </div>
            </div>

            <div className="invalid-feedback">Please Select User role</div>
          </div>
        </div>

        {/* User Status checkbox input */}
        <div className="col-6 row justify-content-evenly">
          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <div className="form-check form-switch p-0 w-100 align-items-center justify-content-center d-flex">
              <label
                className="form-check-label m-0 p-1"
                htmlFor="activatSwitch"
              >
                Activate User :
              </label>
              <input
                name="userStatus"
                className="form-check-input m-0 p-1"
                type="checkbox"
                role="switch"
                id="activatSwitch"
                checked={state.userStatus}
                value={state.userStatus}
                onChange={(event) => {
                  dispatch({
                    type: "userStatus",
                    payLoad: {
                      name: event.target.name,
                      value: event.target.checked ? true : false,
                    },
                  });
                }}
              />
            </div>
            <div className="invalid-feedback">Please Select User role</div>
          </div>

          <div className="col-md-6  justify-content-center d-flex align-items-center">
            {/* This is a conditional rendering that shows a different button based on the form mode */}
            {formMode == "add" ? (
              // This button is displayed when the form is in add mode
              <button className="btn btn-primary submitBtn" type="submit">
                Add User
              </button>
            ) : (
              // This button is displayed when the form is in update mode
              <button className="btn btn-success submitBtn" type="submit">
                Update User
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
