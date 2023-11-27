// Import React library and ActionButton component
import React from "react";
import ActionButton from "./ActionButton";

// This component renders a table with user data and an action button for each user
/*  Props:
   - pageData: Array of user data objects
   - actionBtnType: String representing the type of action button to display */

function Table({ pageData, actionBtnType }) {
  return (
    <div>
      {/* Render a table with dark theme and hover effect */}
      <table className="table  table-dark table-hover">
        {/* Render the table header with column names */}
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">User Role</th>
            <th scope="col">User Status</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        {/* Render the table body with user data and action buttons */}
        <tbody>
          {/* Iterate over the array of user data and render a table row for each user */}
          {pageData.map((eachData) => {
            return (
              // Use eachData.id as the unique key for each table row
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{`${eachData.first_name} ${eachData.last_name}`}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.email}</td>

                {/* Render the user role with an admin icon if the user is an admin */}
                <td>
                  {eachData.admin ? ( // Display Admin or User role based on admin state
                    <>
                      Admin{" "}
                      <img
                        src="../../public/protection.png"
                        alt="admin"
                        style={{ width: 15 }}
                      />
                    </>
                  ) : (
                    <>
                      User{" "}
                      <img
                        src="../../public/user.png"
                        alt="user"
                        style={{ width: 15 }}
                      />
                    </>
                  )}
                </td>
                {/* Render the user status with a success badge if the user is active, or a danger badge if the user is inactive */}
                <td>
                  {eachData.userStatus ? ( // Display Active or In-Active status based on userStatus State
                    <span className="badge bg-success rounded-pill shadow-lg">
                      Active{" "}
                    </span>
                  ) : (
                    <span className="badge bg-danger rounded-pill shadow-lg">
                      In-Active
                    </span>
                  )}
                </td>
                {/* This is a custom component that renders a button with different actions based on the actionBtnType prop */}
                <td className="text-center">
                  <ActionButton
                    eachData={eachData}
                    actionBtnType={actionBtnType}
                    // Display ActionButton component with appropriate props
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
