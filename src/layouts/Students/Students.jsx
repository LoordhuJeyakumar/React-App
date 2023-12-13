import React from "react";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import StudentTable from "./StudentTable";

function Students() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <StudentTable />
    </DashboardLayout>
  );
}

export default Students;
