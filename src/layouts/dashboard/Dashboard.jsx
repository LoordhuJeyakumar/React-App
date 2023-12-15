import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Icon,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import curved0 from "../../assets/images/curved-images/curved0.jpg";
import SoftBox from "../../components/SoftBox";
import DashboardLayout from "../../components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../components/Navbars/DashboardNavbar";
import SoftTypography from "../../components/SoftTypography";
/* import MiniStatisticsCard from "../../examples/Cards/MiniStatisticsCard"; */
import Footer from "../../components/Footer";
import { useContext } from "react";
import { DataContext } from "../../App";
import MiniStatisticsCard from "../../components/Cards/MiniStatisticsCard";
function Dashboard() {
  const { studentData, teacherData } = useContext(DataContext);
  let totalStudents = studentData.length;
  let totalTeachers = teacherData.length;

  // Creates an array of the last three days' dates
  let dateArr = [];
  for (let i = 0; i < 3; i++) {
    const todayDate = new Date(Date.now());
    todayDate.setDate(todayDate.getDate() - i);
    dateArr.push(todayDate.getDate());
  }

  // Filter new users based on userCreationDate and dateArr
  const newStudents = studentData.filter((eachData) => {
    if (dateArr.length != 0) {
      let date = new Date(eachData.StudentAddTimeStamp);

      if (dateArr.includes(date.getDate())) {
        return eachData;
      }
    }
  });

  const getActiveUsers = (studentData, teacherData) => {
    const studentActive = studentData.filter((eachData) => {
      if (eachData.isOnline) {
        return eachData;
      }
    });

    const teacherActive = teacherData.filter((eachData) => {
      if (eachData.isOnline) {
        return eachData;
      }
    });

    return studentActive.length + teacherActive.length;
  };

  const getInActiveUsers = (studentData, teacherData) => {
    const studentActive = studentData.filter((eachData) => {
      if (!eachData.isOnline) {
        return eachData;
      }
    });

    const teacherActive = teacherData.filter((eachData) => {
      if (!eachData.isOnline) {
        return eachData;
      }
    });

    return studentActive.length + teacherActive.length;
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {(studentData.length & teacherData.length) == 0 ? (
        <Box sx={{ display: "flex", justifyContent:'center', alignItems:'center' }} align='center'>
          <LinearProgress color="success" />
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <h1>Loading.... </h1>
          <div><CircularProgress color='info' /></div>
            <LinearProgress color="info" />
          </Stack>
        </Box>
      ) : (
        <SoftBox py={3}>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Total Teachers" }}
                  count={totalTeachers}
                  icon={{ color: "primary", component: "person" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Total Students" }}
                  count={totalStudents}
                  icon={{ color: "warning", component: "boy" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={4}>
                <MiniStatisticsCard
                  title={{ text: "New Students" }}
                  count={newStudents.length}
                  icon={{ color: "secondary", component: "boy" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={4}>
                <MiniStatisticsCard
                  title={{ text: "Active Users" }}
                  count={getActiveUsers(studentData, teacherData)}
                  icon={{ color: "success", component: "school" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={4}>
                <MiniStatisticsCard
                  title={{ text: "Live Classes" }}
                  count={teacherData.filter((each) => each.isOnline).length}
                  icon={{ color: "info", component: "class" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Totel Classes" }}
                  count={
                    teacherData.filter((each) => each.isClassTeacher).length
                  }
                  icon={{ color: "dark", component: "class" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={6}>
                <MiniStatisticsCard
                  title={{ text: "Offline Users" }}
                  count={getInActiveUsers(studentData, teacherData)}
                  icon={{ color: "error", component: "group" }}
                />
              </Grid>
            </Grid>
          </SoftBox>

          <SoftBox
            display="flex"
            minHeight="18.75rem"
            borderRadius="xl"
            sx={{
              backgroundImage: ({
                functions: { rgba, linearGradient },
                palette: { gradients },
              }) =>
                `${linearGradient(
                  rgba(gradients.info.main, 0.6),
                  rgba(gradients.info.state, 0.6)
                )}, url(${curved0})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              overflow: "hidden",
            }}
          >
            <SoftBox>
              <SoftTypography variant="h1" m={2} color={"white"}>
                About
              </SoftTypography>
              <Typography></Typography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
