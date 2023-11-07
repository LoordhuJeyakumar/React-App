import React from "react";
import Dashboard from "./Dashboard";

function BlankPage({ setElement }) {
  return (
    <div>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
      </div>
      <a
        href="#"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setElement(<Dashboard />);
        }}
      >
        &larr; Back to Dashboard
      </a>
    </div>
  );
}

export default BlankPage;
