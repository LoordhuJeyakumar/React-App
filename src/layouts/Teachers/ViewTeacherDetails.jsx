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
import curved6 from "../../assets/images/curved-images/curved-6.jpg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
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
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

function ViewTeacherDetails() {
  const dataContext = useContext(DataContext);
  const params = useParams();
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const viewTeacher = dataContext.teacherData.find((eachData) => {
      if (eachData.id === +params.userId) {
        return eachData;
      }
    });
    setTeacher(viewTeacher);
  }, [params]);
  return (
    <DashboardLayout>
      {/* <Header /> */}
      {teacher ? (
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
                    rgba(gradients.info.main, 0.2),
                    rgba(gradients.info.state, 0.1)
                  )}, url(${curved6})`,
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
                    src={teacher.TeacherImage ? teacher.TeacherImage : null}
                    alt={teacher.fullName}
                    variant="rounded"
                    size="xl"
                    shadow="sm"
                    sx={{ objectFit: "cover", border: 0 }}
                  />
                </Grid>
                <Grid item>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <SoftTypography variant="h5" fontWeight="medium">
                      {teacher.fullName}
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      color="text"
                      fontWeight="medium"
                    >
                      {teacher.qualification} / {teacher.coreSubject} Teacher
                    </SoftTypography>
                  </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                  <SoftBox height="100%" mt={0.5} lineHeight={1}>
                    <Typography variant="caption">Contact Details</Typography>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {teacher.email}
                    </SoftTypography>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {teacher.phone}
                    </SoftTypography>
                  </SoftBox>
                </Grid>
              </Grid>
            </Card>
          </SoftBox>
          <Box justifyContent={"space-between"} m={2} display={"flex"}>
            <SoftTypography
              textGradient
              color="success"
              align="center"
              variant="h4"
            >
              Teacher Details
            </SoftTypography>
            <Button
              color="success"
              variant="contained"
              startIcon={<KeyboardBackspaceIcon />}
              sx={{ borderRadius: 5 }}
              onClick={() => navigate("/teachers")}
            >
              Back
            </Button>
          </Box>
          <SoftBox mt={2} mb={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={4}>
                <Paper elevation={8}>
                  <Card sx={{ padding: 2 }}>
                    <Typography>Address Details</Typography>
                    <Box>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <HomeIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="success">Address</Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.addressDetails.address}
                              </Typography>
                            }
                          />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <LocationCityIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">City</Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.addressDetails.city}
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <MapIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">State</Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.addressDetails.stateName}
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <NumbersIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">Pincode</Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.addressDetails.pincode}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <Paper elevation={8}>
                  <Card sx={{ padding: 2 }}>
                    <Typography>Teacher Details</Typography>
                    <Box>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <CloudIcon color="success" />
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
                                  teacher.isOnline ? "online" : "offline"
                                }
                                color={
                                  teacher.isOnline ? "success" : "secondary"
                                }
                                size="xs"
                                container
                              />
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <SupervisedUserCircleIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Is Classs Teacher
                              </Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.isClassTeacher ? "Yes" : "No"}
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <EventIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Date of join
                              </Typography>
                            }
                            secondary={<Typography>{teacher.doj}</Typography>}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <CakeIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Date of birth
                              </Typography>
                            }
                            secondary={<Typography>{teacher.dob}</Typography>}
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <Paper elevation={8}>
                  <Card sx={{ padding: 2 }}>
                    <Typography>Accadamic Details</Typography>
                    <Box>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <SchoolIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Qualification
                              </Typography>
                            }
                            secondary={
                              <Typography>{teacher.qualification}</Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <BookIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Main Subject
                              </Typography>
                            }
                            secondary={
                              <Typography>{teacher.coreSubject}</Typography>
                            }
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <CollectionsBookmarkIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Teaching Subjects
                              </Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.teachingSubjects.map(
                                  (subject) => `${subject}, `
                                )}
                              </Typography>
                            }
                          />
                        </ListItem>

                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: grey[900] }}>
                              <SupervisedUserCircleIcon color="success" />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography variant="caption">
                                Assigned Class
                              </Typography>
                            }
                            secondary={
                              <Typography>
                                {teacher.assignedClass
                                  ? `${teacher.assignedClass}${
                                      teacher.assignedClass == 1
                                        ? "st"
                                        : teacher.assignedClass == 2
                                        ? "nd"
                                        : teacher.assignedClass == 3
                                        ? "rd"
                                        : "th"
                                    } Standerd Teacher`
                                  : "Class Not Assigned Yet"}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </Card>
                </Paper>
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

export default ViewTeacherDetails;
