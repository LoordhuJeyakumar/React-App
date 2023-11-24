import React, { useContext, useEffect, useReducer, useRef } from "react";
import { initialState, reducer } from "../reducers/FormReducer";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { DataContext } from "../App";
import { toast } from "react-toastify";

function UserForm({ formMode, userData }) {
  let [state, dispatch] = useReducer(reducer, initialState);
  const addUserRef = useRef(null);
  const contextData = useContext(DataContext);
  const creationDateTimeStamp = Date.now();
  const creationDate = new Date(creationDateTimeStamp);
  const handleUpdateButton =  useRef(null)

  if(formMode=='edit'){
    useEffect(()=>{
      if(handleUpdateButton){
       handleUpdateButton.current.click()
      }
    },[])
  }

  const handleInputChange = (event) => {
  
    dispatch({
      type: "inputChange",
      payLoad: { name: event.target.name, value: event.target.value },
    });
  };

  const handleGenderChange = (event) => {
    dispatch({
      type: "gender",
      payLoad: { value: event.target.value },
    });
  };

  const handleUserTypeChange = (event) => {
    dispatch({
      type: "userType",
      payLoad: { value: event.target.value == "true" },
    });
  };

  const handleStateSelect = (event) => {

    dispatch({
      type: "selctState",
      payLoad: {
        name: event.target.name,
        value: event.target.selectedOptions[0].value,
      },
    });
  };

  function addUserDetails(event) {
    if (!addUserRef.current.checkValidity()) {
      toast.error("Please fill out all required fields");
      event.preventDefault();
      event.stopPropagation();
    }
    addUserRef.current.classList.add("was-validated");
    if (addUserRef.current.checkValidity()) {
      axios.post("http://localhost:3000/usersDetails", state);

      event.preventDefault();
      dispatch({ type: "init" });

      toast.success("User successfully added");
      contextData.setIsUserAdded(true);
      contextData.setLoadingData(false);

      setTimeout(() => {
        contextData.setLoadingData(true);
        contextData.setIsUserAdded(false);
      }, 500);
    }
  }
  function handleGetUsers(event) {
    event.preventDefault();
    dispatch({
      type: "creationDate",
      payLoad: {
        userCreationDate: creationDate.toLocaleDateString(),
        userCreationTime: creationDate.toLocaleTimeString(),
        userCreationTimeStamp: creationDateTimeStamp
      },
    });

    dispatch({ type: "updateUser", payLoad: userData });
  }

  const updateUserDetails = (event) => {
    if (!addUserRef.current.checkValidity()) {
      toast.error("Please fill out all required fields");
      event.preventDefault();
      event.stopPropagation();
    }
    addUserRef.current.classList.add("was-validated");
    if (addUserRef.current.checkValidity()) {
      /* axios.put("http://localhost:3000/usersDetails", state); */

      event.preventDefault();
      dispatch({ type: "init" });

      toast.success("User successfully added");
      contextData.setIsUserAdded(true);
      contextData.setLoadingData(false);

      setTimeout(() => {
        contextData.setLoadingData(true);
        contextData.setIsUserAdded(false);
      }, 500);
    }



  };

  return (
    <div>
      <form
        className="row g-3 needs-validation p-4"
        noValidate
        onSubmit={formMode == "add" ? addUserDetails : updateUserDetails}
        ref={addUserRef}
      >
        <div className="b-0 m-0 p-0 col-sm-9 align-items-center  text-middle d-flex">
          {formMode == "edit" ? (
            <button
            hidden={true}
            ref={handleUpdateButton}
              className="btn btn-info text-black"
              onClick={handleGetUsers}
            >
              GetUser Details
            </button>
          ) : (
            ""
          )}
          <div className="input-group mb-3 w-25 justify-content-center ">
            <span className="input-group-text">User ID</span>
            <input
              defaultValue={
                formMode == "add"
                  ? contextData.data[contextData.data.length - 1].id + 1
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

        <div className="col-md-4">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>
          <input
            onChange={handleInputChange}
            name="first_name"
            type="text"
            className="form-control ps-1"
            id="firstname"
            required
            defaultValue={state.first_name}
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
            onChange={handleInputChange}
            defaultValue={state.last_name}
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
              onChange={handleInputChange}
              name="email"
              type="email"
              className="form-control ps-1"
              id="email"
              aria-describedby="inputGroupPrepend"
              required
              defaultValue={state.email}
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
              defaultValue={state.qualification}
              onChange={handleInputChange}
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

        <div className="col-md-4">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <div className="input-group has-validation">
            <input
              defaultValue={state.dob}
              format="yyyy-mm-dd"
              data-date=""
              data-date-format="DD MMMM YYYY"
              onChange={(event) => {
                dispatch({
                  type: "dob",
                  payLoad: {
                    name: event.target.name,
                    value: event.target.value,
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
            <div className="invalid-feedback">
              Please select your date of birth.
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <div className="input-group has-validation">
            <input
              defaultValue={state.phone}
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

        <div className="col-6 row justify-content-evenly">
          <div className="col-md-6 mb-2  justify-content-md-center d-flex align-items-center">
            <div className=" has-validation ">
              <label className="form-label text-center">Select Gender</label>
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

          <div className="col-md-6 d-flex justify-content-md-center align-items-center">
            <div>
              <label className="form-label">User Role</label>
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
            {formMode == "add" ? (
              <button className="btn btn-primary submitBtn" type="submit">
                Add User
              </button>
            ) : (
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
