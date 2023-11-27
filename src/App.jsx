import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import { Route, Routes, useLocation } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import EditUsers from "./components/EditUsers";
import DeleteUsers from "./components/DeleteUsers";
import ViewUserModal from "./components/ViewUserModal";
import EditUserModal from "./components/EditUserModal";
import DeleteUsersModal from "./components/DeleteUsersModal";

const DataContext = createContext(null);

function App() {
  // Imports the 'useLocation' hook from React Router
  const location = useLocation();

  // Initializes the 'data' state with an empty array
  const [data, setData] = useState([]);
  // Initializes the 'loadingData' state with a false value
  const [loadingData, setLoadingData] = useState(false);
  // Initializes the 'isUserAdded' state with a false value
  const [isUserAdded, setIsUserAdded] = useState(false);

  // Checks if data is not already loading
  if (!loadingData) {
    // Uses axios to make a GET request to the 'http://localhost:3000/usersDetails' endpoint
    axios
      .get("https://usermanagement-api.onrender.com/usersDetails/")
      .then((response) => {
        // Sets the 'data' state with the response data
        setData(response.data);
        // Sets the 'loadingData' state to true to indicate data is loaded
        setLoadingData(true);
      })
      .catch((error) => {
        //If api request fail Logs the error to the console
        console.error(error);
      });
  }

  return (
    <div>
      {/* Render the NavComponent */}
      <NavComponent />

      {/* Check if data is loading */}
      {loadingData ? (
        /* Wrap components in DataContextProvider */
        <DataContext.Provider
          value={{
            data, //Global data state
            setData, //State Function to update data state
            loadingData, // Flag indicating if data is loading
            setLoadingData, //State Function to set loadingData flag
            isUserAdded, // Flag indicating if user has been added
            setIsUserAdded, //State Function to set isUserAdded flag
          }}
        >
          {/* Define routes using Routes component */}
          <Routes location={location}>
            {/* Route for Dashboard page, Create User page, All Users page, Edit Users page, Delete Users page */}
            <Route path="/" element={<Dashboard />} />
            <Route path="create-users" element={<CreateUser />} />
            <Route path="all-users" element={<AllUsers />}>
              {/* Nested route for View User Modal */}
              <Route path=":userID" element={<ViewUserModal />} />
            </Route>

            <Route path="edit-users" element={<EditUsers />}>
              {/* Nested route for Edit User Modal */}
              <Route path=":userID" element={<EditUserModal />} />
            </Route>
            <Route path="delete-users" element={<DeleteUsers />}>
              {/* Nested route for Delete Users Modal */}
              <Route path=":userID" element={<DeleteUsersModal />} />
            </Route>
          </Routes>
        </DataContext.Provider>
      ) : (
        // Display loading indicator while data is loading
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <div className="spinner-border " role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h1>Loading Data....</h1>
        </div>
      )}
    </div>
  );
}

export { App as default, DataContext };
