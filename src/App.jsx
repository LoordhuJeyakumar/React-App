// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/* import Sidenav from "./examples/Sidenav"; */

// Soft UI Dashboard React themes
import theme from "./assets/theme";
import routes from "./routes";
import { createContext, useState } from "react";
import axios from "axios";
import EditStudentDetails from "./layouts/Students/EditStudentDetails";
import ViewStudentDetails from "./layouts/Students/ViewStudentDetails";
import DeleteStudent from "./layouts/Students/DeleteStudent";
import ViewTeacherDetails from "./layouts/Teachers/ViewTeacherDetails";
import DeleteTeacher from "./layouts/Teachers/DeleteTeacher";
import EditTeacherDetails from "./layouts/Teachers/EditTeacherDetails";
import Sidenav from "./examples/Sidenav";
/* import Sidenav from "./components/SideNavBar"; */
const localHost = true;
const apiURL = localHost
  ? `http://localhost:3000/`
  : `https://studentteacherapi.onrender.com/`;
const DataContext = createContext(null);

function App() {
  // Initializes the 'studentData & teacherData' state with an empty array
  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  // Initializes the 'loadingData' state with a false value
  const [loadingData, setLoadingData] = useState(false);
  // Initializes the 'isStudentAdded' state with a false value
  const [isStudentAdded, setIsStudentAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function getStudentsData() {
    const URL = apiURL;
    try {
      setLoadingData(true);
      const response = await axios.get(`${URL}studentsDetails`);
      setStudentData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getTeachersData() {
    const URL = apiURL;
    try {
      setLoadingData(true);
      const response = await axios.get(`${URL}teachersDetails`);
      setTeacherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Checks if data is not already loading
  if (!loadingData) {
    getStudentsData();
    getTeachersData();
  }

  const getRoutes = (allRoutes) => {
    return allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Sidenav
            color={"info"}
            brandName="Student & Teacher Management"
            routes={routes}
          />
        </>
        <DataContext.Provider
          value={{
            loadingData,
            setLoadingData,
            studentData,
            teacherData,
            apiURL,
            modalOpen,
            setModalOpen,
          }}
        >
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route
              path="editStudent/:userId"
              element={<EditStudentDetails />}
            />
            <Route
              path="editTeacher/:userId"
              element={<EditTeacherDetails />}
            />
            <Route path="students/:userId" element={<ViewStudentDetails />} />
            <Route path="teachers/:userId" element={<ViewTeacherDetails />} />
            <Route path="deleteStudent/:userId" element={<DeleteStudent />} />
            <Route path="deleteTeacher/:userId" element={<DeleteTeacher />} />
          </Routes>
        </DataContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export { App as default, DataContext };
