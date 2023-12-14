import {
  Alert,
  AlertTitle,
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Fade,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

import { green, grey, red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import ViewTeacherDetails from "./ViewTeacherDetails";
import SoftBadge from "../../components/SoftBadge";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DeleteTeacher() {
  const { modalOpen, setModalOpen, teacherData, setLoadingData, apiURL } =
    useContext(DataContext);
  const [openDeleteSnackBar, setOpenDeleteSnackBar] = useState(false);
  const [openNotFoundSnackBar, setOpenNotFoundSnackBar] = useState(false);
  const [openFaildSnackBar, setOpenFaildSnackBar] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);

  const deleteButtonSx = {
    ...(success && {
      bgcolor: red[500],
      padding: 2,

      borderRadius: 10,
      margin: 1,
      "&:hover": {
        bgcolor: red[700],
      },
    }),
  };

  const findUser = async (data) => {
    let result = await data.find((eachData) => {
      if (eachData.id === +params.userId) {
        return eachData;
      }

      return null;
    });

    if (result) {
      setTeacher(result);
    }
  };

  useEffect(() => {
    findUser(teacherData);
  }, [params]);

  useEffect(() => {
    if (!modalOpen) {
      setModalOpen(true);
    }
  }, []);
  const handleClose = () => {
    navigate(`/teachers`);
  };
  /* if(!modalOpen){
    navigate(`/students`);
  } */

  const handleDeleteStudent = () => {
    setLoadingData(true);
    setLoading(true);

    try {
      axios
        .delete(`${apiURL}teachersDetails/${params.userId}`)
        .then((response) => {
          if (response.status == 200) {
            setOpenDeleteSnackBar(true);
            setLoadingData(false);
            setTimeout(handleClose, 1000);
            setLoading(false);
            setSuccess(true);
          }
        })
        .catch((error) => {
          if (error.response.status == 404) {
            setOpenFaildSnackBar(true);
            console.log("error", error);
          }
        });
    } catch (error) {
      setOpenFaildSnackBar(true);
      console.log(`Delete Error ${error}`);
    }
  };

  const renderLoadingError = () => {
    const alertFn = () => {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Teacher not found / server error
          <br></br>
          <strong>check it out!</strong>
        </Alert>
      );
    };

    return (
      <Card>
        <h1>Loading...</h1>
        <LinearProgress color="error" />
        {alertFn()}
      </Card>
    );
  };

  return (
    <>
      <ViewTeacherDetails />
      <Snackbar
        open={openDeleteSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenDeleteSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpenDeleteSnackBar(false);
          }}
          severity="info"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Teacher Succesfully Deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFaildSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenFaildSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpenFaildSnackBar(false);
          }}
          severity="error"
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
          variant="filled"
        >
          Teacher Can't be Deleted!
          <br />{" "}
          <Typography variant="caption" color="info" m={0} p={0}>
            Server Error
          </Typography>
        </Alert>
      </Snackbar>

      <Snackbar
        open={openNotFoundSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenNotFoundSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpenNotFoundSnackBar(false);
          }}
          severity="error"
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
          variant="filled"
        >
          Teacher Not Found!
          <br />{" "}
          <Typography variant="caption" color="info" m={0} p={0}>
            Server Error
          </Typography>
        </Alert>
      </Snackbar>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            {teacher ? (
              <Card>
                <CardHeader
                  avatar={<Avatar src={teacher.TeacherImage} />}
                  title={teacher.fullName}
                  subheader={teacher.qualification}
                  action={
                    <IconButton aria-label="Cancel" onClick={handleClose}>
                      <CancelIcon />
                    </IconButton>
                  }
                />

                <CardContent>
                  <Typography
                    align="center"
                    sx={{ backgroundColor: grey[200], borderRadius: 5 }}
                  >
                    Contact Details
                  </Typography>
                  <Typography variant="caption">Email</Typography>
                  <Typography>{teacher.email}</Typography>
                  <Typography variant="caption">Phone</Typography>
                  <Typography>{teacher.phone}</Typography>
                  <List>
                    <ListItem>
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
                    <ListItem>
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
                            color={teacher.isOnline ? "success" : "secondary"}
                            size="xs"
                            container
                          />
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions
                  sx={{
                    margin: 0,
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ m: 0, p: 0, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={deleteButtonSx}
                      disabled={loading}
                      type="button"
                      startIcon={<DeleteIcon />}
                      size="small"
                      onClick={handleDeleteStudent}
                    >
                      Delete
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                  {/*  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteStudent}
                  >
                    Delete
                  </Button> */}
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<CancelIcon />}
                    onClick={handleClose}
                    sx={{ borderRadius: 5 }}
                  >
                    Cancel
                  </Button>
                </CardActions>
              </Card>
            ) : (
              <>{renderLoadingError()}</>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default DeleteTeacher;
