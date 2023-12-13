/* import axios from "axios";
import { apiURL } from "./DataContext";
import { useEffect, useState } from "react";
import React from "react";

let StudentsData = [];

async function getStudentData() {
  const URL = apiURL;
  try {
    StudentsData = axios.get(`${URL}/userDetails`);
  } catch (error) {
    console.error(error);
  }
}

function StudentContext() {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      getStudentData();
    }
  }, [loading]);
  return <div></div>;
}

export { StudentContext as default, loading, SetLoading, StudentsData };
 */