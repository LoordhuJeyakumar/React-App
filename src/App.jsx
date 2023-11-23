import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";

const DataContext = createContext(null);

function App() {
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
          {homePageComponent}
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
