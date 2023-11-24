import React from "react";
import UserForm from "./UserForm";

function CreateUser() {
  

  return (
    <div className="container formContainer justify-content-center rounded roll-out">
      <h1 className="text-center pt-3">Add New User</h1>
      <div className="borderDesign"></div>

      <UserForm formMode={"add"}/>
    </div>
  );
}

export default CreateUser;
