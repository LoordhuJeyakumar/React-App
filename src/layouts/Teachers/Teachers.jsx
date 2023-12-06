/* import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar"; */
import React from "react";
import TableComponent from "./TableComponent";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

function Teachers() {
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar/>
        <TableComponent/>
      </DashboardLayout>
    </div>
  );
}

export default Teachers;
