// @mui material components
import { createTheme } from "@mui/material/styles";

//  base styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";
import globals from "./base/globals";

//  helper functions
import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import linearGradient from "./functions/linearGradient";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

//  components base styles for @mui material components
import sidenav from "./components/sidenav";

import card from "./components/card";
import cardMedia from "./components/card/cardMedia";
import cardContent from "./components/card/cardContent";

import divider from "./components/divider";

import avatar from "./components/avatar";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiDivider: { ...divider },
    MuiAvatar: { ...avatar },
  },
});
