/* import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar"; */
import React from "react";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import TeachersTable from "./TeachersTable";

function Teachers() {
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        <TeachersTable />
      </DashboardLayout>
    </div>
  );
}

export default Teachers;
