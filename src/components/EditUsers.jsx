import React from "react";

function EditUsers() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className=" w-50 search">
            <label className="form-label w-100" htmlFor="searchUsers">
              <input
                class="form-control p-2 w-100"
                list="usersList"
                id="searchUsers"
                placeholder="Type to search..."
              />
            </label>
          </div>

          <div className=" p-0 m-0 btnIcon">
            <button className="btn p-0 m-0">
              <lord-icon
                src="https://cdn.lordicon.com/ybaojceo.json"
                trigger="hover"
              ></lord-icon>
            </button>
          </div>
        </div>

        <datalist id="usersList">
          <option value="Chocolate"></option>
          <option value="Coconut"></option>
          <option value="Mint"></option>
          <option value="Strawberry"></option>
          <option value="Vanilla"></option>
        </datalist>
      </div>
    </div>
  );
}

export default EditUsers;
