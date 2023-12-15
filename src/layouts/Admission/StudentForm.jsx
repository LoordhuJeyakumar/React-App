import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import DashboardLayout from "../../components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../components/Navbars/DashboardNavbar";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  initialState,
  studentReducerFn,
} from "../../reducers/StudentFormReducer";

import axios from "axios";
import { DataContext } from "../../App";
import { green, purple } from "@mui/material/colors";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {  useNavigate, useParams } from "react-router-dom";
import { getStudentRandomImages } from "../Students/StudentTable";

function StudentForm({ mode }) {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [openFaildSnackBar, setOpenFaildSnackBar] = useState(false);
  const formRef = useRef(null);
  const [state, dispatch] = useReducer(studentReducerFn, initialState);

  const contextData = useContext(DataContext);
  const URL = contextData.apiURL;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  const addButtonSx = {
    ...(success && {
      bgcolor: green[500],
      with: 260,
      height: 80,
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };
  const updateButtonSx = {
    ...(success && {
      bgcolor: purple[500],
      with: 260,
      height: 80,
      borderRadius: 10,
      margin: 5,
      "&:hover": {
        bgcolor: purple[700],
      },
    }),
  };
  // Define creationDateTimeStamp variable to store the current timestamp
  const creationDateTimeStamp = Date.now();
  // Create a new Date object from the timestamp
  const creationDate = new Date(creationDateTimeStamp);
  const params = useParams();

  useEffect(() => {
    if (!openSnackBar) {
      if (params.userId) {
        if (contextData.studentData.length != 0) {
          const userData = contextData.studentData.find((eachData) => {
            if (eachData.id === +params.userId) {
              return eachData;
            }
          });

          dispatch({
            type: "update",
            payLoad: userData,
          });
        }
      }
    }
  }, [params]);

  // Use useEffect hook to initialize the user creation date and time and online in the form state
  useEffect(() => {
    dispatch({
      // Action type to update the user creation date and time
      type: "creationDateAndImage",
      payLoad: {
        // User creation date and time in a localized format
        doa: creationDate.toLocaleDateString("zh-Hans-CN"),
        // User creation timestamp in milliseconds
        StudentAddTimeStamp: creationDateTimeStamp,
        studentImage: getStudentRandomImages(),
      },
    });
    dispatch({
      // Action type to update the user online status
      type: "isOnline",
      payLoad: {
        // Generate random online state
        isOnline: Math.random() < 0.5,
      },
    });
  }, [openSnackBar]);

  const handleStudentAdd = (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      axios
        .post(`${URL}studentsDetails`, state)
        .then((response) => {
          dispatch({ type: "init" });
          setOpenSnackBar(true);
          contextData.setLoadingData(false);
          setSuccess(true);
          setLoading(false);
        })
        .catch((error) => {
          setOpenFaildSnackBar(true);
          dispatch({ type: "init" });
          console.log(error);
        });
    } catch (error) {
      setOpenFaildSnackBar(true);
      console.error(`faild ${error}`);
    }
  };

  const handleStudentUpdate = (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      axios
        .put(`${URL}studentsDetails/${params.userId}`, state)
        .then((response) => {
          dispatch({ type: "init" });
          setOpenSnackBar(true);
          contextData.setLoadingData(false);
          setSuccess(true);
          setLoading(false);
        })
        .catch((error) => {
          setOpenFaildSnackBar(true);
          dispatch({ type: "init" });
          console.log(error);
        });
    } catch (error) {
      setOpenFaildSnackBar(true);
      console.error(`faild ${error}`);
    }
  };

  const handleInputChange = (event) => {
    dispatch({
      // Action type indicating an input change
      type: "inputChange",
      payLoad: {
        // Name of the input field
        name: event.target.name,
        // Value entered in the input field
        value: event.target.value,
      },
    });
  };
  const handleAddressChange = (event) => {
    dispatch({
      // Action type indicating an input change
      type: "addressChange",
      payLoad: {
        // Name of the input field
        name: event.target.name,
        // Value entered in the input field
        value: event.target.value,
      },
    });
  };

  const handleClassChange = (event) => {
    dispatch({
      type: "classChange",
      payLoad: {
        name: event.target.name,
        value: event.target.value,
      },
    });
  };
  const handleDateChange = (event) => {
    let date = event.getDate();
    let month = event.getMonth() + 1;
    let year = event.getFullYear();

    let dob = `${year}-${month}-${date}`;

    dispatch({
      type: "dobChange",
      payLoad: {
        name: "dob",
        value: dob,
      },
    });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpenSnackBar(false);
          }}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Student Succesfully {mode !== "edit" ? "Added!" : "Update!"}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFaildSnackBar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackBar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setOpenSnackBar(false);
          }}
          severity="error"
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
          variant="filled"
        >
          Student Can't be {mode !== "edit" ? "Added!" : "Update!"}
          <br />{" "}
          <Typography variant="caption" color="info" m={0} p={0}>
            Server Error
          </Typography>
        </Alert>
      </Snackbar>
      <SoftBox>
        <Box align="center" mb={2}>
          <SoftTypography variant="h3" color="info" textGradient align="center">
            {mode == "edit" ? "Update Student" : "New Student"}
          </SoftTypography>
        </Box>

        <Box
          component="form"
          autoComplete="off"
          onSubmit={mode != "edit" ? handleStudentAdd : handleStudentUpdate}
          ref={formRef}
        >
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "fullName" }}
                variant="outlined"
                label="Student Name"
                size="small"
                required
                color="info"
                type="text"
                fullWidth
                onChange={handleInputChange}
                value={state.fullName}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "parentName" }}
                variant="outlined"
                label="Parent Name"
                size="small"
                required
                color="info"
                type="text"
                fullWidth
                onChange={handleInputChange}
                value={state.parentName}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "parentEmail" }}
                variant="outlined"
                label="Email"
                size="small"
                required
                color="info"
                type="email"
                fullWidth
                onChange={handleInputChange}
                value={state.parentEmail}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "parentPhone" }}
                variant="outlined"
                label="Phone"
                size="small"
                required
                color="info"
                type="phone"
                fullWidth
                onChange={handleInputChange}
                value={state.parentPhone}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "stateName" }}
                variant="outlined"
                label="State"
                size="small"
                required
                color="info"
                type="text"
                fullWidth
                onChange={handleAddressChange}
                value={state.addressDetails.stateName}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "city" }}
                variant="outlined"
                type="text"
                label="City"
                required
                fullWidth
                onChange={handleAddressChange}
                value={state.addressDetails.city}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                inputProps={{ name: "pincode" }}
                variant="outlined"
                type="number"
                label="Pincode"
                required
                fullWidth
                onChange={handleAddressChange}
                value={state.addressDetails.pincode}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                InputProps={{ name: "address" }}
                type="textarea"
                minRows={2}
                maxRows={4}
                multiline
                variant="outlined"
                label="Address"
                fullWidth
                onChange={handleAddressChange}
                value={state.addressDetails.address}
              />
            </Grid>

            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl
                variant="outlined"
                sx={{ m: 1, minWidth: 280 }}
                fullWidth
              >
                <InputLabel id="currentClass">Select Class</InputLabel>
                <Select
                  name="currentClass"
                  id="currentClass"
                  value={state.currentClass ? state.currentClass : ""}
                  label="Class Name"
                  onChange={handleClassChange}
                  required
                  component="select"
                >
                  {/* <MenuItem value={0} disabled>
                    Select Standard
                  </MenuItem> */}
                  <MenuItem value={1}>1st Standard</MenuItem>
                  <MenuItem value={2}>2nd Standard</MenuItem>
                  <MenuItem value={3}>3rd Standard</MenuItem>
                  <MenuItem value={4}>4th Standard</MenuItem>
                  <MenuItem value={5}>5th Standard</MenuItem>
                  <MenuItem value={6}>6th Standard</MenuItem>
                  <MenuItem value={7}>7th Standard</MenuItem>
                  <MenuItem value={8}>8th Standard</MenuItem>
                  <MenuItem value={9}>9th Standard</MenuItem>
                  <MenuItem value={10}>10th Standard</MenuItem>
                  <MenuItem value={11}>11th Standard</MenuItem>
                  <MenuItem value={12}>12th Standard</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    format="dd-MM-yyyy"
                    value={
                      state.dob
                        ? /* addDays(parseISO(state.dob),2) */ new Date(
                            state.dob
                          )
                        : null
                    }
                    name="dob"
                    label="Date of Birth"
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                    onChange={handleDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item md={10} lg={10} sx={{padding:"0"}}>
              <Box
                component={"div"}
                width={"100%"}
                justifyContent={"center"}
                display={"flex"}
              >
                {mode != "edit" ? (
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={addButtonSx}
                      disabled={loading}
                      type="submit"
                      startIcon={<PersonAddAlt1Icon />}
                      size="large"
                    >
                      Add Student
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
                ) : (
                  <Box sx={{ m: -5, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={updateButtonSx}
                      disabled={loading}
                      type="submit"
                      startIcon={<EditNoteIcon />}
                      size="large"
                    >
                      Update Student
                    </Button>
                    <Button
                      sx={{
                        width: 200,
                        height: 80,
                        borderRadius: 10,
                        margin: 5,
                      }}
                      variant="contained"
                      color="error"
                      size="large"
                      startIcon={<KeyboardBackspaceIcon />}
                      onClick={() => navigate("/students")}
                    >
                      Go Back
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: purple[500],
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </SoftBox>
    </DashboardLayout>
  );
}

export default StudentForm;
