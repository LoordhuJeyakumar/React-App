import React from "react";
import ActionButton from "./ActionButton";

function Table({ pageData, actionBtnType }) {
  return (
    <div>
      <table className="table  table-dark table-hover">
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
        <tbody>
          {pageData.map((eachData) => {
            return (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{`${eachData.first_name} ${eachData.last_name}`}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.email}</td>
                <td>{eachData.admin ? "Admin" : "User"}</td>
                <td>{eachData.userStatus ? "Active" : "In-Active"}</td>
                <td className="text-center">
                 <ActionButton eachData={eachData} actionBtnType={actionBtnType} />
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
