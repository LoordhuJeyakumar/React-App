/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
/* import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar"; */
/* import SoftBadge from "components/SoftBadge"; */

// Images
import team2 from "../../../assets/images/team-2.jpg";
import team3 from "../../../assets/images/team-3.jpg";
/* import team4 from "assets/images/team-4.jpg"; */
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext } from "react";
/* import teacherDataContext from "context/DataContext"; */
import SoftBadge from "../../../components/SoftBadge";
import teacherDataContext from "../../../context/DataContext";
import SoftAvatar from "../../../components/SoftAvatar";

function TeacherDetails({ image, name, email }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {email}
        </Typography>
      </Box>
    </Box>
  );
}

function JobAndRoll({ job, org }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="caption" fontWeight="medium" color="text">
        {job}
      </Typography>
      <Typography variant="caption" color="secondary">
        {org}
      </Typography>
    </Box>
  );
}

function GenarateRows() {
  const data = useContext(teacherDataContext);
}

const authorsTableData = {
  columns: [
    { name: "teacher", align: "left" },
    { name: "roll", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      teacher: (
        <TeacherDetails
          image={team2}
          name="John Michael"
          email="john@creative-tim.com"
        />
      ),
      roll: <JobAndRoll job="Programator" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="online"
          color="success"
          size="xs"
          container
        />
      ),
      employed: (
        <Typography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </Typography>
      ),
      action: (
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
      ),
    },
    {
      teacher: (
        <TeacherDetails
          image={team3}
          name="Alexa Liras"
          email="alexa@creative-tim.com"
        />
      ),
      roll: <JobAndRoll job="Programator" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="offline"
          color="secondary"
          size="xs"
          container
        />
      ),
      employed: (
        <Typography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </Typography>
      ),
      action: (
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
      ),
    },
  ],
};

export default authorsTableData;
