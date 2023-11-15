import React from "react";

function AllUsers() {
  const handleFilter = (event) => {
    console.log(event);
  };
  return (
    <div className=" container roll-out">
      <h2 className="text-center">All Users</h2>
      <div className="d-flex gap-3 m-3">
        <div>
          <label htmlFor="userFilter">Filter by</label>
          <select
            name="filter"
            id="userFilter"
            className="form-select"
            onChange={handleFilter}
          >
            <option value="allUsers">All Users</option>
            <option value="admin">Admin Users</option>
            <option value="user">Normal Users</option>
            <option value="userStatus">Active Users</option>
            <option value="userRole">IN-Active Users</option>
          </select>
        </div>

        <div>
          <label htmlFor="showContent">Show Content</label>
          <select name="filter" id="showContent" className="form-select">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50r">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div>
          <label htmlFor="searchUsers"><i class="bi bi-search"></i></label>
          <input
            class="form-control"
            list="usersList"
            id="searchUsers"
            placeholder="Type to search..."
          />
          <datalist id="usersList">
            <option value="Chocolate"></option>
            <option value="Coconut"></option>
            <option value="Mint"></option>
            <option value="Strawberry"></option>
            <option value="Vanilla"></option>
          </datalist>
        </div>
      </div>
      <div>
        <table className="table  table-hover table-dark ">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Full Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
              <th scope="col">User Role</th>
              <th scope="col">User Status</th>
              <th scope="col" className="text-center" colSpan={3}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin@gmail.com</td>
              <td>Admin</td>
              <td>Active</td>
              <td className="actionBtn">
                <button className="btn btn-primary">View User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-info">Edit User</button>
              </td>
              <td className="actionBtn">
                <button className="btn btn-danger">Delete User</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
