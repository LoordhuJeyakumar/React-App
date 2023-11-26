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
  const location = useLocation();
  const [homePageComponent, setHomePageComponent] = useState(<Dashboard />);
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [isUserAdded, setIsUserAdded] = useState(false);

  useEffect(() => {
    if (!loadingData) {
      axios.get("http://localhost:3000/usersDetails").then((response) => {
        setData(response.data);
        setLoadingData(true);
      });
    }
  }, [isUserAdded]);

  return (
    <div>
      <NavComponent
        homePageComponent={homePageComponent}
        setHomePageComponent={setHomePageComponent}
      />
      {loadingData ? (
        <DataContext.Provider
          value={{
            data,
            setData,
            loadingData,
            setLoadingData,
            isUserAdded,
            setIsUserAdded,
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Dashboard />} />
            <Route path="create-users" element={<CreateUser />} />
            <Route path="all-users" element={<AllUsers />}>
              <Route path=":userID" element={<ViewUserModal />} />
              <Route path="admin" />
            </Route>

            <Route path="edit-users" element={<EditUsers />}>
              <Route path=":userID" element={<EditUserModal />} />
            </Route>
            <Route path="delete-users" element={<DeleteUsers />}>
              <Route path=":userID" element={<DeleteUsersModal />} />
            </Route>
          </Routes>
          {/* {homePageComponent} */}
        </DataContext.Provider>
      ) : (
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
