import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
/* import teacherDataContext from "context/DataContext"; */
import React, { useContext, useEffect, useState } from "react";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import team2 from "../../assets/images/team-2.jpg";
/* import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg"; */

import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import teacherDataContext from "../../context/DataContext";
import SoftBadge from "../../components/SoftBadge";
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
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

function TableComponent() {
  const data = useContext(teacherDataContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowData, setRowData] = useState([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderColumns = [
    { name: "teacher", align: "left" },
    { name: "roll", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ];

  useEffect(() => {
    setRowData(data);
    console.log(rowData);
  });

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <Typography variant="h6">Teachers Table</Typography>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={rows.length}
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
      <Box
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
            <Box component={"thead"}>
              <TableRow>
                {renderColumns.map((eachData, i) => {
                  return (
                    <Box
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
                    </Box>
                  );
                })}
              </TableRow>
            </Box>
            <TableBody>
              {(rowsPerPage > 0
                ? rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rowData
              ).map((row, i) => (
                <TableRow key={i}>
                  <Box component={"td"} p={1}>
                    <Box display="flex" alignItems="center" px={1} py={0.5}>
                      <Box mr={2}>
                        <Avatar src={team2} alt={row.fullName} size="sm" variant="rounded" />
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Typography variant="button" fontWeight="medium">
                          {row.fullName}
                        </Typography>
                        <Typography variant="caption" color="secondary">
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box component={"td"} p={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" fontWeight="medium" color="text">
                        {`${row.coreSubject} Teacher`}
                      </Typography>
                      <Typography variant="caption" color="secondary">
                        {row.assignedClass
                          ? `${row.assignedClass}th Class Teacher`
                          : "Class Not Assigned"}
                      </Typography>
                    </Box>
                  </Box>

                  <Box component={"td"} p={1}>
                    <SoftBadge
                      variant="gradient"
                      badgeContent={row.isOnline ? "online" : "offline"}
                      color={row.isOnline ? "success" : "secondary"}
                      size="xs"
                      container
                    />
                  </Box>

                  <Box component={"td"} p={1}>
                    <Typography variant="caption" color="secondary" fontWeight="medium">
                      {row.doj}
                    </Typography>
                  </Box>

                  <Box component={"td"} p={1}>
                    <Typography
                      component="a"
                      href="#"
                      variant="caption"
                      color="secondary"
                      fontWeight="medium"
                    >
                      <IconButton aria-label="delete" disabled color="info">
                        <DeleteIcon color="error" />
                      </IconButton>
                      <IconButton aria-label="delete" disabled color="info">
                        <EditNoteIcon color="info" />
                      </IconButton>
                      <IconButton aria-label="delete" disabled color="info">
                        <VisibilityIcon color="success" />
                      </IconButton>
                    </Typography>
                  </Box>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {/* <TableFooter>
          <TableRow>
            
          </TableRow>
        </TableFooter> */}
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={rows.length}
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
    </Box>
  );
}

export default TableComponent;
