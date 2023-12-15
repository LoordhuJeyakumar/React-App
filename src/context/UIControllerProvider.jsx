import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Soft UI Dashboard PRO Material main context
const UIController = createContext(null);

// Setting custom name for the context which is visible on react dev tools
UIController.displayName = "UIControllerContext";

// Soft UI Dashboard React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }

    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Soft UI Dashboard React context provider
function UIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: true,
    transparentNavbar: true,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return (
    <UIController.Provider value={value}>{children}</UIController.Provider>
  );
}

// Soft UI Dashboard React custom hook for using context
function useSoftUIController() {
  const context = useContext(UIController);

  if (!context) {
    throw new Error(
      "useSoftUIController should be used inside the SoftUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the SoftUIControllerProvider
UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) =>
  dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_SIDENAV", value });

const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });

export {
  UIControllerProvider,
  useSoftUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setTransparentNavbar,
};
