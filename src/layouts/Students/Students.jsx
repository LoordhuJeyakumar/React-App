import React from "react";
import DashboardLayout from "../../components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../components/Navbars/DashboardNavbar";
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
