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
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import ViewStudentDetails from "./ViewStudentDetails";
import { green, grey, red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
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

function DeleteStudent() {
  const { modalOpen, setModalOpen, studentData, setLoadingData, apiURL } =
    useContext(DataContext);
  const [openDeleteSnackBar, setOpenDeleteSnackBar] = useState(false);
  const [openNotFoundSnackBar, setOpenNotFoundSnackBar] = useState(false);
  const [openFaildSnackBar, setOpenFaildSnackBar] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  const deleteButtonSx = {
    ...(success && {
      bgcolor: red[500],

      borderRadius: 10,
      margin: 5,
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
      setStudent(result);
    }
  };

  useEffect(() => {
    findUser(studentData);
  }, [params]);

  useEffect(() => {
    if (!modalOpen) {
      setModalOpen(true);
    }
  }, []);
  const handleClose = () => {
    navigate(`/students`);
  };
  /* if(!modalOpen){
    navigate(`/students`);
  } */

  const handleDeleteStudent = () => {
    setLoadingData(true);
    setLoading(true);

    try {
      axios
        .delete(`${apiURL}studentsDetails/${params.userId}`)
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
          Student not found / server error
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
      <ViewStudentDetails />
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
          Student Succesfully Deleted!
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
          Student Can't be Deleted!
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
          Student Not Found!
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
          {/* <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box> */}

          <Box sx={style}>
            {student ? (
              <Card>
                <CardHeader
                  avatar={<Avatar src={student.studentImage} />}
                  title={student.fullName}
                  subheader={`${student.currentClass}${
                    student.currentClass == 1
                      ? "st"
                      : student.currentClass == 2
                      ? "nd"
                      : student.currentClass == 3
                      ? "rd"
                      : "th"
                  } Standerd`}
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
                    Parent Details
                  </Typography>
                  <Typography variant="caption">Name</Typography>
                  <Typography>{student.parentName}</Typography>
                  <Typography variant="caption">Email</Typography>
                  <Typography>{student.parentEmail}</Typography>
                  <Typography variant="caption">Mobile</Typography>
                  <Typography>{student.parentPhone}</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-around",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ m: 1, position: "relative" }}>
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
                    variant="outlined"
                    color="secondary"
                    endIcon={<CancelIcon />}
                    onClick={handleClose}
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

export default DeleteStudent;
