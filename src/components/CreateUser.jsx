import React from "react";

function CreateUser() {

  const handleProfilePic = (event)=>{
    console.log(event);
  }

  const handleSubmitBtn = () => {
    const forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  };

  const handleSelectedState = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container formContainer justify-content-center rounded roll-out">
      <h1 className="text-center pt-3">Add New User</h1>
      <div className="borderDesign"></div>

      <form className="row g-3 needs-validation p-4" noValidate>
        <div className="col-md-12 justify-content-center d-flex">
          <div className="input-group mb-3 w-25 justify-content-center">
            <span className="input-group-text" id="basic-addon1">
              User ID
            </span>
            <input
              type="text"
              readOnly
              className="form-control w-50"
              placeholder="userID"
              aria-label="userID"
              style={{ cursor: "not-allowed" }}
            />
          </div>
        </div>

        <div className="col-md-12 d-flex flex-column align-items-center">
          <img
            src="../../src/assets/undraw_male_avatar_g98d.svg"
            className="img-thumbnail"
            alt="Profile Picture"
            
          />
          <div className="input-group mb-3 w-50">
            <input onChange={handleProfilePic} type="file" className="form-control profilePic" id="inputGroupFile02"  />
           
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control ps-1"
            id="firstname"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your Firstname.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastname" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control ps-1"
            id="lastname"
            required
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
              type="email"
              className="form-control ps-1"
              id="email"
              aria-describedby="inputGroupPrepend"
              required
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
          <input type="text" className="form-control ps-1" id="city" required />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select ps-2"
            id="state"
            required
            onChange={handleSelectedState}
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
          <div className="input-group ">
            <span className="input-group-text">Address</span>
            <textarea
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
                  type="radio"
                  className="form-check-input ps-1"
                  id="male"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="gender"
                />
              </div>
              <div className="form-check">
                <label htmlFor="female" className="form-check-lable">
                  Female
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  aria-describedby="inputGroupPrepend"
                  name="gender"
                />
              </div>
              <div className="form-check">
                <label htmlFor="other" className="form-check-lable">
                  Other
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  id="other"
                  aria-describedby="inputGroupPrepend"
                  name="gender"
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
                  name="userType"
                  id="admin"
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
                  name="userType"
                  id="user"
                />
                <label className="form-check-label w-100" htmlFor="user">
                  User
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input "
                  type="radio"
                  name="userType"
                  id="guest"
                />
                <label className="form-check-label w-100" htmlFor="guest">
                  Guest
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
                className="form-check-input m-0 p-1"
                type="checkbox"
                role="switch"
                id="activatSwitch"
                defaultChecked
              />
            </div>
            <div className="invalid-feedback">Please Select User role</div>
          </div>

          <div className="col-md-6  justify-content-center d-flex align-items-center">
            <button
              className="btn btn-primary submitBtn"
              type="submit"
              onClick={handleSubmitBtn}
            >
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
