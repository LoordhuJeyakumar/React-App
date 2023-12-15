// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import SoftTypography from "./SoftTypography";
import pxToRem from "../assets/theme/functions/pxToRem";

function Footer() {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={pxToRem(14)}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, made with
        <Box fontSize={pxToRem(16)} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </Box>
        by
        <Link href={"https://github.com/LoordhuJeyakumar"} target="_blank">
          <SoftTypography variant="button" fontWeight="medium">
            &nbsp;Loordhu Jeyakumar&nbsp;
          </SoftTypography>
        </Link>
      </Box>
      <Box
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        <Box component="li" px={2} lineHeight={1}>
          <Link href="https://github.com/LoordhuJeyakumar" target="_blank">
            <SoftTypography variant="button" fontWeight="regular" color="text">
              <GitHubIcon /> Git Source Code
            </SoftTypography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
