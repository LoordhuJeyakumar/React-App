import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
/* import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar"; */
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Snackbar,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../App";

import { green, purple } from "@mui/material/colors";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { getTeachersRandomImages } from "../Teachers/Teachers";
import {
  initialStateTeacher,
  teacherReducerFn,
} from "../../reducers/TeacherFormReducer";
import axios from "axios";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const subjects = [
  "Tamil",
  "English",
  "Maths",
  "Science",
  "Social Science",
  "Computer Science",
  "Physics",
  "Chemistry",
  "Zoology",
  "Botany",
  "biology",
  "Accountancy",
  "Business Studies",
  "Economics",
  "Physical Education",
];

function getStyles(name, subjectName, theme) {
  return {
    fontWeight:
      subjectName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function TeacherForm({ mode }) {
  const theme = useTheme();
  const [subjectName, setSubjectName] = useState([]);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openFaildSnackBar, setOpenFaildSnackBar] = useState(false);
  const formRef = useRef(null);
  const [state, dispatch] = useReducer(teacherReducerFn, initialStateTeacher);
  const contextData = useContext(DataContext);
  const URL = contextData.apiURL;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
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
        if (contextData.teacherData.length != 0) {
          const userData = contextData.teacherData.find((eachData) => {
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
        // User creation timestamp in milliseconds
        TeacherAddTimeStamp: creationDateTimeStamp,
        TeacherImage: getTeachersRandomImages(),
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

  const handleTeacherAdd = (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      axios
        .post(`${URL}teachersDetails`, state)
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

  const handleTeacherUpdate = (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      axios
        .put(`${URL}teachersDetails/${params.userId}`, state)
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
  const handleAssignClassChange = (event) => {
    dispatch({
      type: "isClassTeacher",
      payLoad: {
        // Name of the input field
        name: event.target.name,
        // Value entered in the input field
        value: event.target.checked,
      },
    });
  };
  const handleTeachingSubjectsChange = (event) => {
    dispatch({
      type: "teachingSubjects",
      payLoad: {
        // Name of the input field
        name: event.target.name,
        // Value entered in the input field
        value: event.target.value,
      },
    });

    const {
      target: { value },
    } = event;
    setSubjectName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
  const handleDOJChange = (event) => {
    let date = event.getDate();
    let month = event.getMonth() + 1;
    let year = event.getFullYear();

    let doj = `${year}-${month}-${date}`;

    dispatch({
      type: "dojChange",
      payLoad: {
        name: "doj",
        value: doj,
      },
    });
  };
  const handleDOBChange = (event) => {
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
          Teacher Succesfully {mode !== "edit"  ? "Added!" : "Update!"}
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
          Teacher Can't be {mode !== "edit" ? "Added!" : "Update!"}
          <br />{" "}
          <Typography variant="caption" color="info" m={0} p={0}>
            Server Error
          </Typography>
        </Alert>
      </Snackbar>

      <SoftBox>
        <Box align="center" mb={2}>
          <SoftTypography
            variant="h3"
            color="primary"
            textGradient
            align="center"
          >
            {mode === 'edit' ? "Update Teacher" : "New Teacher"}
          </SoftTypography>
        </Box>

        <Box
          component="form"
          autoComplete="on"
          onSubmit={mode  === 'edit' ? handleTeacherUpdate :  handleTeacherAdd}
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
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "fullName", bordercolor: "primary" }}
                  variant="outlined"
                  label="Full Name"
                  size="small"
                  required
                  color="primary"
                  type="text"
                  fullWidth
                  onChange={handleInputChange}
                  value={state.fullName}
                />
              </Paper>
            </Grid>

            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "email" }}
                  variant="outlined"
                  label="Email"
                  size="small"
                  required
                  color="primary"
                  type="email"
                  fullWidth
                  onChange={handleInputChange}
                  value={state.email}
                />
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "phone" }}
                  variant="outlined"
                  label="Phone"
                  size="small"
                  required
                  color="primary"
                  type="phone"
                  fullWidth
                  onChange={handleInputChange}
                  value={state.phone}
                />
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "stateName" }}
                  variant="outlined"
                  label="State"
                  size="small"
                  required
                  color="primary"
                  type="text"
                  fullWidth
                  onChange={handleAddressChange}
                  value={state.addressDetails.stateName}
                />
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
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
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
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
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
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
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "qualification" }}
                  variant="outlined"
                  type="text"
                  label="Qualification"
                  required
                  fullWidth
                  onChange={handleInputChange}
                  value={state.qualification}
                />
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "coreSubject" }}
                  variant="outlined"
                  type="text"
                  label="Main Subject"
                  required
                  fullWidth
                  onChange={handleInputChange}
                  value={state.coreSubject}
                />
              </Paper>
            </Grid>

            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <FormControl sx={{ m: 0, border: "none", width: "100%" }}>
                  <InputLabel id="teachingSubjects-multiple-chip-label">
                    Teaching Subjects
                  </InputLabel>
                  <Select
                    required
                    name="teachingSubjects"
                    labelId="teachingSubjects-multiple-chip-label"
                    id="teachingSubjects-multiple-chip"
                    multiple
                    value={state.teachingSubjects}
                    onChange={handleTeachingSubjectsChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Teaching Subjects"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {subjects.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, subjectName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText sx={{ color: "green" }}>
                    Select multiple subjects
                  </FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <TextField
                  inputProps={{ name: "salary" }}
                  variant="outlined"
                  type="number"
                  label="Salary"
                  required
                  fullWidth
                  onChange={handleInputChange}
                  value={state.salary}
                />
              </Paper>
            </Grid>

            <Grid
              item
              md={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <FormControl
                  component="fieldset"
                  variant="filled"
                  sx={{ padding: 2, margin: 0 }}
                >
                  <FormLabel component="legend">Assign Class</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state.isClassTeacher}
                          onChange={handleAssignClassChange}
                          name="isClassTeacher"
                          color="primary"
                        />
                      }
                      label="Is Class Teachers"
                    />
                  </FormGroup>
                </FormControl>
              </Paper>
            </Grid>

            <Grid
              item
              md={6}
              lg={4}
              display={state.isClassTeacher ? "flex" : "none"}
              sx={{ justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <FormControl variant="outlined" sx={{ m: 0 }} fullWidth>
                  <InputLabel id="currentClass">Select Class</InputLabel>
                  <Select
                    name={"assignedClass"}
                    id="assignedClass"
                    value={state.isClassTeacher ? state.assignedClass : ""}
                    label="Class Name"
                    onChange={handleClassChange}
                    component="select"
                    required={state.isClassTeacher ? true : false}
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
                  <FormHelperText sx={{ color: "green" }}>
                    Select class to assign
                  </FormHelperText>
                </FormControl>
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ paddingtop: 1 }}
                  >
                    <DatePicker
                      format="dd-MM-yyyy"
                      value={state.dob ? new Date(state.dob) : null}
                      name="dob"
                      label="Date of Birth"
                      slotProps={{
                        textField: {
                          required: true,
                          fullWidth: true,
                        },
                      }}
                      onChange={handleDOBChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              mb={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper elevation={8} square={false} sx={{ width: "100%" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ width: "100%" }}
                  >
                    <DatePicker
                      format="dd-MM-yyyy"
                      value={state.doj ? new Date(state.doj) : null}
                      name="doj"
                      label="Date of Join"
                      slotProps={{
                        textField: {
                          required: true,
                          fullWidth: true,
                        },
                      }}
                      onChange={handleDOJChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Paper>
            </Grid>
            <Grid item md={10} lg={10}>
              <Box
                component={"div"}
                width={"100%"}
                justifyContent={"center"}
                display={"flex"}
              >
                {mode !== 'edit' ? (
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={addButtonSx}
                      disabled={loading}
                      type="submit"
                      startIcon={<PersonAddAlt1Icon />}
                      size="large"
                    >
                      Add Teacher
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
                  <Box sx={{ m: 1, position: "relative" }}>
                    <Button
                      variant="contained"
                      sx={updateButtonSx}
                      disabled={loading}
                      type="submit"
                      startIcon={<EditNoteIcon />}
                      size="large"
                    >
                      Update Teacher
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
                      onClick={() => navigate("/Teachers")}
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

export default TeacherForm;
