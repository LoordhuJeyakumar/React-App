import React, { useState } from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import AllUsers from "./components/AllUsers";

function App() {

const [homePageComponent, setHomePageComponent] = useState(<AllUsers/>)

  return (
    <div>
      <NavComponent homePageComponent={homePageComponent} setHomePageComponent={setHomePageComponent} />
      {
        homePageComponent
      }
    </div>
  );
}

export default App;
