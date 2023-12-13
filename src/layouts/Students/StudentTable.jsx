import { useTheme } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import SoftBox from "../../components/SoftBox";

import student_1 from "../../../src/assets/images/student_1.png";
import student_2 from "../../../src/assets/images/student_2.png";
import student_3 from "../../../src/assets/images/student_3.png";
import student_4 from "../../../src/assets/images/student_4.png";
import student_5 from "../../../src/assets/images/student_5.png";
import student_6 from "../../../src/assets/images/student_6.png";
import student_7 from "../../../src/assets/images/student_7.png";

import {
  Avatar,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { DataContext } from "../../App";
import SoftBadge from "../../components/SoftBadge";
import SoftTypography from "../../components/SoftTypography";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EditStudentDetails from "./EditStudentDetails";

const getStudentRandomImages = () => {
  const imgSrcArray = [
    student_1,
    student_2,
    student_3,
    student_4,
    student_5,
    student_6,
    student_7,
  ];

  let imgSrc = imgSrcArray[Math.floor(Math.random() * 7)];

  return imgSrc;
};
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <SoftBox sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <ArrowCircleLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <ArrowCircleRightIcon />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </SoftBox>
  );
}

function StudentTable() {
  const { studentData, setLoadingData, setModalOpen, modalOpen } = useContext(DataContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - studentData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderColumns = [
    { name: "student name and dob", align: "left" },
    { name: "parent name and email", align: "left" },
    { name: "class", align: "left" },
    { name: "status", align: "center" },
    { name: "Date of admission", align: "center" },
    { name: "action", align: "center" },
  ];

  useEffect(() => {
    setRowData(studentData);
  });

  const handleEditStudent = (studentId) => {
   
    let date = studentData.find((eachDta) => {
      if (eachDta.id == studentId) {
        return eachDta;
      }
    });
  };
  const handleDeleteModelOpen =()=>{
    setModalOpen(true)
  }

  return (
    <SoftBox>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Typography variant="h6">Students Table</Typography>
      </SoftBox>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={studentData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
            width: "50px",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        component={"div"}
        sx={{
          ".MuiInputBase-root.MuiInputBase-colorPrimary.css-1ui3wbn-MuiInputBase-root-MuiTablePagination-select":
            {
              width: "auto !important",
            },
        }}
      ></TablePagination>
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: `${1 / 16}rem solid #dee2e6`,
            },
          },
        }}
      >
        <TableContainer>
          <Table>
            <SoftBox component={"thead"}>
              <TableRow>
                {renderColumns.map((eachData, i) => {
                  return (
                    <SoftBox
                      key={i}
                      component="th"
                      width={"auto"}
                      pt={1.5}
                      pb={1.25}
                      pl={3}
                      pr={3}
                      textAlign={"center"}
                      fontSize={`${10.4 / 16}rem`}
                      fontWeight={700}
                      color="secondary"
                      opacity={0.7}
                      borderBottom={`${1 / 16} solid #000000`}
                    >
                      {eachData.name.toUpperCase()}
                    </SoftBox>
                  );
                })}
              </TableRow>
            </SoftBox>
            {studentData.length == 0 ? (
              <TableBody>
                <TableRow>
                  <SoftBox component="td" colSpan={6} align="center">
                    <SoftTypography variant="h3" color="info" textGradient>
                      Loading...
                    </SoftTypography>
                    <div>
                      <CircularProgress color="info" />
                    </div>
                  </SoftBox>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {(rowsPerPage > 0
                  ? rowData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rowData
                ).map((row, i) => (
                  <TableRow key={i}>
                    <SoftBox component={"td"} p={1}>
                      <SoftBox
                        display="flex"
                        alignItems="center"
                        px={1}
                        py={0.5}
                      >
                        <SoftBox mr={2}>
                          <Avatar
                            referrerPolicy="no-referrer"
                            src={getStudentRandomImages()}
                            alt={row.fullName}
                            size="sm"
                            variant="rounded"
                          />
                        </SoftBox>
                        <SoftBox display="flex" flexDirection="column">
                          <Typography variant="button" fontWeight="medium">
                            {row.fullName}
                          </Typography>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>

                    <SoftBox component={"td"} p={1}>
                      <SoftBox
                        display="flex"
                        alignItems="center"
                        px={1}
                        py={0.5}
                      >
                        <SoftBox display="flex" flexDirection="column">
                          <Typography variant="button" fontWeight="medium">
                            {row.parentName}
                          </Typography>
                          <Typography variant="caption" color="secondary">
                            {row.parentEmail}
                          </Typography>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>

                    <SoftBox component={"td"} p={1}>
                      <SoftBox
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Typography
                          variant="caption"
                          fontWeight="medium"
                          color="text"
                        >
                          {`${row.currentClass}${
                            row.currentClass == 1
                              ? "st"
                              : row.currentClass == 2
                              ? "nd"
                              : row.currentClass == 3
                              ? "rd"
                              : "th"
                          } Standerd`}
                        </Typography>
                      </SoftBox>
                    </SoftBox>

                    <SoftBox component={"td"} p={1} align="center">
                      <SoftBadge
                        variant="gradient"
                        badgeContent={row.isOnline ? "online" : "offline"}
                        color={row.isOnline ? "success" : "secondary"}
                        size="xs"
                        container
                      />
                    </SoftBox>

                    <SoftBox component={"td"} p={1} align="center">
                      <Typography
                        variant="caption"
                        color="secondary"
                        fontWeight="medium"
                      >
                        {row.doa}
                      </Typography>
                    </SoftBox>

                    <SoftBox component={"td"} p={1}>
                      <Typography
                        component="div"
                        variant="caption"
                        color="secondary"
                        fontWeight="medium"
                      >
                        <Tooltip title="Delete Student" placement="top">
                          <Link to={`/deletStudent/${row.id}`}>
                          <IconButton aria-label="delete" onClick={handleDeleteModelOpen}>
                            <DeleteIcon color="error" />
                          </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip title="Edit Student" placement="top">
                          <Link to={`/editStudent/${row.id}`}>
                            <IconButton
                              aria-label="edit"
                              onClick={(event) => {
                                handleEditStudent(row.id, event);
                              }}
                            >
                              <EditNoteIcon color="info" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip title="View Student" placement="top">
                          <Link to={`/students/${row.id}`}>
                            <IconButton aria-label="view">
                              <VisibilityIcon color="success" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </Typography>
                    </SoftBox>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            )}
            {/* <TableFooter>
          <TableRow>
            
          </TableRow>
        </TableFooter> */}
          </Table>
        </TableContainer>
      </SoftBox>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={studentData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
            width: "50px",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        component={"div"}
        sx={{
          ".MuiInputBase-root.MuiInputBase-colorPrimary.css-1ui3wbn-MuiInputBase-root-MuiTablePagination-select":
            {
              width: "auto !important",
            },
        }}
      ></TablePagination>
    </SoftBox>
  );
}

export { StudentTable as default, getStudentRandomImages };
