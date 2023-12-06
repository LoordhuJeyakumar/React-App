import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
/* import SoftBox from "components/SoftBox"; */

// Soft UI Dashboard React examples
import Sidenav from "./examples/Sidenav";
import Configurator from "./examples/Configurator";

// Soft UI Dashboard React themes
import theme from "./assets/theme";
import themeRTL from "./assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "./routes";

// Soft UI Dashboard React contexts
import {
  useSoftUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "./context";

// Images
/* import brand from "assets/images/logo-ct.png"; */
import brand from "./assets/images/logo-ct.png";
/* import Sidenav from "examples/Sidenav";
import theme from "assets/theme";
import themeRtl from "assets/theme/theme-rtl";
import routes from "routes";
import { useSoftUIController } from "context"; */

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  const getRoutes = (allRoutes) => {
    return allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  };

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRtl}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidena
              color={sidenavColor}
              brand={brand}
              brandName="Soft UI Dashboard"
              routes={routes}
            />
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Soft UI Dashboard"
            routes={routes}
          />
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
