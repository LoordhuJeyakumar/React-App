/* import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar"; */
import React, { useContext } from "react";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
/* import TeachersTable from "./TeachersTable"; */

import teacher1 from "../../../src/assets/images/teacher1.png";
import teacher2 from "../../../src/assets/images/teacher2.png";
import teacher3 from "../../../src/assets/images/teacher3.png";
import teacher4 from "../../../src/assets/images/teacher4.png";
import teacher5 from "../../../src/assets/images/teacher5.png";
import teacher6 from "../../../src/assets/images/teacher6.png";
import teacher7 from "../../../src/assets/images/teacher7.png";
import { DataContext } from "../../App";
import TableComponent from "../../components/TableComponent";

//get students random images
const getTeachersRandomImages = () => {
  const imgSrcArray = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    teacher5,
    teacher6,
    teacher7,
  ];

  let imgSrc = imgSrcArray[Math.floor(Math.random() * 7)];

  return imgSrc;
};

function Teachers() {
  const { teacherData, setModalOpen } = useContext(DataContext);

  const renderColumns = [
    { name: "teacher", align: "left" },
    { name: "roll", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ];
  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        {/*  <TeachersTable /> */}
        <TableComponent
          data={teacherData}
          setModalOpen={setModalOpen}
          renderColumns={renderColumns}
          tableName={"Teachers"}
          getRandomImages={getTeachersRandomImages}
        />
      </DashboardLayout>
    </div>
  );
}

export { Teachers as default, getTeachersRandomImages };
