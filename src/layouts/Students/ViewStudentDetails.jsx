import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";
import Footer from "../../components/Footer";
import DashboardLayout from "../../components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../components/Navbars/DashboardNavbar";
import SoftAvatar from "../../components/SoftAvatar";
import curved0 from "../../assets/images/curved-images/curved0.jpg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MapIcon from "@mui/icons-material/Map";
import NumbersIcon from "@mui/icons-material/Numbers";
import EventIcon from "@mui/icons-material/Event";
import CakeIcon from "@mui/icons-material/Cake";
import ClassIcon from "@mui/icons-material/Class";
import SoftBadge from "../../components/SoftBadge";
import CloudIcon from "@mui/icons-material/Cloud";
import { grey } from "@mui/material/colors";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function ViewStudentDetails() {
  const dataContext = useContext(DataContext);
  const params = useParams();
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const viewStudent = dataContext.studentData.find((eachData) => {
      if (eachData.id === +params.userId) {
        return eachData;
      }
    });
    setStudent(viewStudent);
  }, [params]);
  return (
    <DashboardLayout>
      {/* <Header /> */}
      {student ? (
        <>
          <SoftBox position="relative">
            <DashboardNavbar absolute light />
            <SoftBox
              display="flex"
              alignItems="center"
              position="relative"
              minHeight="11.75rem"
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
            />
            <Card
              sx={{
                backdropFilter: `saturate(200%) blur(30px)`,
                backgroundColor: ({
                  functions: { rgba },
                  palette: { white },
                }) => rgba(white.main, 0.8),
                boxShadow: ({ boxShadows: { navbarBoxShadow } }) =>
                  navbarBoxShadow,
                position: "relative",
                mt: -8,
                mx: 3,
                py: 2,
                px: 2,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <SoftAvatar
                    src={student.studentImage ? student.studentImage : null}
                    alt={student.fullName}
                    variant="rounded"
                    size="xl"
                    shadow="sm"
                    sx={{ objectFit: "cover", border: 0 }}
                  />
                </Grid>
                <Grid item>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <SoftTypography variant="h5" fontWeight="medium">
                      {student.fullName}
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      color="text"
                      fontWeight="medium"
                    >
                      {`${student.currentClass}${
                        student.currentClass == 1
                          ? "st"
                          : student.currentClass == 2
                          ? "nd"
                          : student.currentClass == 3
                          ? "rd"
                          : "th"
                      } Standerd`}{" "}
                      / Student
                    </SoftTypography>
                  </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="caption">Parent Details</Typography>
                    <SoftTypography variant="h5" fontWeight="medium">
                      {student.parentName}
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      color="text"
                      fontWeight="medium"
                    >
                      {student.parentEmail} / {student.parentPhone}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Card>
          </SoftBox>
          <Box justifyContent={"space-between"} m={2} display={"flex"}>
            <SoftTypography
              textGradient
              color="primary"
              align="center"
              variant="h4"
            >
              Student Details
            </SoftTypography>
            <Button
              variant="contained"
              startIcon={<KeyboardBackspaceIcon />}
              sx={{ borderRadius: 5 }}
              onClick={() => navigate("/students")}
            >
              Back
            </Button>
          </Box>
          <SoftBox mt={2} mb={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={6}>
                <Card sx={{ padding: 2 }}>
                  <Typography>Address Details</Typography>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <HomeIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">Address</Typography>
                          }
                          secondary={
                            <Typography>
                              {student.addressDetails.address}
                            </Typography>
                          }
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <LocationCityIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">City</Typography>
                          }
                          secondary={
                            <Typography>
                              {student.addressDetails.city}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <MapIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">State</Typography>
                          }
                          secondary={
                            <Typography>
                              {student.addressDetails.stateName}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <NumbersIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">Pincode</Typography>
                          }
                          secondary={
                            <Typography>
                              {student.addressDetails.pincode}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Card sx={{ padding: 2 }}>
                  <Typography>Student Details</Typography>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <EventIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">
                              Date of admission
                            </Typography>
                          }
                          secondary={<Typography>{student.doa}</Typography>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <CakeIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">
                              Date of birth
                            </Typography>
                          }
                          secondary={<Typography>{student.dob}</Typography>}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <ClassIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">
                              CUrrent Class
                            </Typography>
                          }
                          secondary={
                            <Typography>
                              {`${student.currentClass}${
                                student.currentClass == 1
                                  ? "st"
                                  : student.currentClass == 2
                                  ? "nd"
                                  : student.currentClass == 3
                                  ? "rd"
                                  : "th"
                              } Standerd`}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: grey[900] }}>
                            <CloudIcon color="warning" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="caption">
                              Online Status
                            </Typography>
                          }
                          secondary={
                            <SoftBadge
                              variant="gradient"
                              badgeContent={
                                student.isOnline ? "online" : "offline"
                              }
                              color={student.isOnline ? "success" : "secondary"}
                              size="xs"
                              container
                            />
                          }
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} xl={4}></Grid>
            </Grid>
          </SoftBox>
          <SoftBox mb={3}></SoftBox>
        </>
      ) : (
        <h1>Loading...</h1>
      )}

      <Footer />
    </DashboardLayout>
  );
}

export default ViewStudentDetails;
