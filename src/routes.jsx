// Soft UI Dashboard React layouts
import Dashboard from "./layouts/dashboard/Dashboard";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BoyIcon from "@mui/icons-material/Boy";
import Teachers from "./layouts/Teachers/Teachers";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StudentForm from "./layouts/Admission/StudentForm";
import Students from "./layouts/Students/Students";
import TeacherForm from "./layouts/Admission/TeacherForm";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <HomeIcon size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  { type: "title", title: "Student Pages", key: "student-pages" },
  {
    type: "collapse",
    name: "Students",
    key: "students",
    route: "/students",
    icon: <BoyIcon size="12px" />,
    component: <Students />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Students",
    key: "create-Students",
    route: "/create-Students",
    icon: <PersonAddAltIcon size="12px" />,
    component: <StudentForm mode={"add"} />,
    noCollapse: true,
  },

  { type: "title", title: "Teachers Pages", key: "teachers-pages" },

  {
    type: "collapse",
    name: "Teachers",
    key: "teachers",
    route: "/teachers",
    icon: <PersonIcon size="12px" />,
    component: <Teachers />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Teacher",
    key: "create-Teacher",
    route: "/create-Teacher",
    icon: <PersonAddIcon size="12px" />,
    component: <TeacherForm mode={"add"} />,
    noCollapse: true,
  },
];

export default routes;
