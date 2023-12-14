import React, { useEffect, useState } from "react";
import SoftBox from "./SoftBox";
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
import TablePaginationActions from "./TablePaginationActions";
import SoftTypography from "./SoftTypography";
import SoftBadge from "./SoftBadge";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import VisibilityIcon from "@mui/icons-material/Visibility";

function TableComponent(props) {
  const { data, setModalOpen, renderColumns, tableName, getRandomImages } =
    props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowData, setRowData] = useState([]);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setRowData(data);
  });
  const handleDeleteModelOpen = () => {
    setModalOpen(true);
  };

  return (
    <SoftBox>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Typography variant="h6">{tableName} Table</Typography>
      </SoftBox>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={data.length}
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
      />
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
            {data.length == 0 ? (
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
                            src={getRandomImages()}
                            alt={row.fullName}
                            size="sm"
                            variant="rounded"
                          />
                        </SoftBox>
                        <SoftBox display="flex" flexDirection="column">
                          <Typography variant="button" fontWeight="medium">
                            {row.fullName}
                          </Typography>
                          {tableName == "Teachers" ? (
                            <Typography variant="caption" color="secondary">
                              {row.email + " / " + row.phone}
                            </Typography>
                          ) : (
                            ""
                          )}
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>

                    {tableName != "Teachers" ? (
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
                    ) : (
                      ""
                    )}

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
                          {tableName != "Teachers" ? (
                            <>
                              {`${row.currentClass}${
                                row.currentClass == 1
                                  ? "st"
                                  : row.currentClass == 2
                                  ? "nd"
                                  : row.currentClass == 3
                                  ? "rd"
                                  : "th"
                              } Standerd`}
                            </>
                          ) : (
                            <>{`${row.coreSubject} Teacher`}</>
                          )}
                        </Typography>
                        {tableName == "Teachers" ? (
                          <Typography variant="caption" color="secondary">
                            {row.assignedClass
                              ? `${row.assignedClass}${
                                  row.assignedClass == 1
                                    ? "st"
                                    : row.assignedClass == 2
                                    ? "nd"
                                    : row.assignedClass == 3
                                    ? "rd"
                                    : "th"
                                } Standerd Teacher`
                              : "Class Not Assigned"}
                          </Typography>
                        ) : (
                          ""
                        )}
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
                        {tableName == "Teachers" ? row.doj : row.doa}
                      </Typography>
                    </SoftBox>

                    <SoftBox component={"td"} p={1}>
                      <Typography
                        align="center"
                        component="div"
                        variant="caption"
                        color="secondary"
                        fontWeight="medium"
                      >
                        <Tooltip
                          title={
                            tableName != "Teachers"
                              ? "Delete Student"
                              : "Delete Teacher"
                          }
                          placement="top"
                        >
                          <Link
                            to={
                              tableName != "Teachers"
                                ? `/deleteStudent/${row.id}`
                                : `/deleteTeacher/${row.id}`
                            }
                          >
                            <IconButton
                              aria-label="delete"
                              onClick={handleDeleteModelOpen}
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          title={
                            tableName != "Teachers"
                              ? "Edit Student"
                              : "Edit Teacher"
                          }
                          placement="top"
                        >
                          <Link
                            to={
                              tableName != "Teachers"
                                ? `/editStudent/${row.id}`
                                : `/editTeacher/${row.id}`
                            }
                          >
                            <IconButton aria-label="edit">
                              <EditNoteIcon color="info" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          title={
                            tableName != "Teachers"
                              ? "View Student"
                              : "View Teacher"
                          }
                        >
                          <Link
                            to={
                              tableName != "Teachers"
                                ? `/students/${row.id}`
                                : `/teachers/${row.id}`
                            }
                          >
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
          </Table>
        </TableContainer>
      </SoftBox>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={data.length}
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

export default TableComponent;
