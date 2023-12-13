/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Soft UI Dashboard React components
/* import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography"; */

// Soft UI Dashboard React examples
/* import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard"; */
/* import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart"; */

// Soft UI Dashboard React base styles
/* import typography from "assets/theme/base/typography"; */

// Dashboard layout components
/* import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview"; */

// Data
/* import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData"; */
/* import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData"; */
import { Card, Grid, Icon } from "@mui/material";
/* import ClassIcon from "@mui/icons-material/Class";
import SoftAvatar from "components/SoftAvatar";
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings"; */
import curved0 from "../../assets/images/curved-images/curved0.jpg";
import SoftBox from "../../components/SoftBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import reportsBarChartData from "./data/reportsBarChartData";
import typography from "../../assets/theme/base/typography";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import SoftTypography from "../../components/SoftTypography";
import MiniStatisticsCard from "../../examples/Cards/StatisticsCards/MiniStatisticsCard";
import Footer from "../../examples/Footer";
/* import reportsBarChartData from "./data/reportsBarChartData"; */
function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <SoftBox py={3}>
        
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={6}>
              <Card>
                <SoftBox p={2}>
                  <Grid container alignItems={"center"} p={4} m={2}>
                    <Grid item xs={8}>
                      <SoftBox ml={2} lineHeight={1}>
                        <SoftTypography
                          variant="button"
                          color={"white"}
                          textTransform={"capitalize"}
                          fontWeight={"medium"}
                          sx={{ opacity: 0.7 }}
                        >
                          Test Data
                        </SoftTypography>
                        <SoftTypography
                          variant="h5"
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          20
                        </SoftTypography>
                      </SoftBox>
                    </Grid>
                    <Grid item xs={4}>
                      <SoftBox
                        backgroundimage="linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128)) !importent"
                        bgcolor={"white"}
                        color={"dark"}
                        width={"3rem"}
                        height={"3rem"}
                        marginLeft={"auto"}
                        borderRadius={"md"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        boxShadow={"md"}
                      >
                        <Icon fontSize="small" color="inherit">
                          person
                        </Icon>
                      </SoftBox>
                    </Grid>
                  </Grid>
                </SoftBox>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Total Teachers" }}
                count="20"
                icon={{ color: "primary", component: "person" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Total Students" }}
                count="20"
                icon={{ color: "warning", component: "boy" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniStatisticsCard
                title={{ text: "New Students" }}
                count="20"
                icon={{ color: "secondary", component: "boy" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniStatisticsCard
                title={{ text: "Active Users" }}
                count="20"
                icon={{ color: "success", component: "school" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <MiniStatisticsCard
                title={{ text: "Live Classes" }}
                count="20"
                icon={{ color: "info", component: "class" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Totel Classes" }}
                count="20"
                icon={{ color: "dark", component: "class" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={6}>
              <MiniStatisticsCard
                title={{ text: "Offline Users" }}
                count="20"
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
          </SoftBox>
        </SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
