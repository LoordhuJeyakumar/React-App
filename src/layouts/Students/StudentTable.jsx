import React, { useContext } from "react";

import student_1 from "../../assets/images/student_1.png";
import student_2 from "../../assets/images/student_2.png";
import student_3 from "../../assets/images/student_3.png";
import student_4 from "../../assets/images/student_4.png";
import student_5 from "../../assets/images/student_5.png";
import student_6 from "../../assets/images/student_6.png";
import student_7 from "../../assets/images/student_7.png";

import { DataContext } from "../../App";
import TableComponent from "../../components/TableComponent";

//get students random images
const getStudentRandomImages = () => {
  const imgSrcArray = [
    student_1,
    student_2,
    student_3,
    student_4,
    student_5,
    student_6,
    student_7,
  ];

  let imgSrc = imgSrcArray[Math.floor(Math.random() * 7)];

  return imgSrc;
};

function StudentTable() {
  const { studentData, setModalOpen } = useContext(DataContext);

  const renderColumns = [
    { name: "student name and dob", align: "left" },
    { name: "parent name and email", align: "left" },
    { name: "class", align: "left" },
    { name: "status", align: "center" },
    { name: "Date of admission", align: "center" },
    { name: "action", align: "center" },
  ];

  return (
    <TableComponent
      data={studentData}
      setModalOpen={setModalOpen}
      renderColumns={renderColumns}
      tableName={"Student"}
      getRandomImages={getStudentRandomImages}
    />
  );
}

export { StudentTable as default, getStudentRandomImages };
