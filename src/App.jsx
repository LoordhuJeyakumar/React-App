import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import SidePanel from "./components/SidePanel";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import LogOutModal from "./components/LogOutModal";


function App({ income }) {
  const [element, setElement] = useState( <Dashboard income={income} />);
  const [keyWord, setKeyWord] = useState("Dahsboard");
  const [homePage, setHomePage] = useState(null);
  return (
    <div id="page-top">
     
      {homePage ? (
        homePage
      ) : (
        <div id="wrapper">
          <SidePanel
            income={income}
            element={element}
            setElement={setElement}
            keyWord={keyWord}
            setKeyWord={setKeyWord}
            homePage = {homePage}
            setHomePage = {setHomePage}
          />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNavBar />
              <div className="container-fluid">{element}</div>
            </div>
            <Footer />
          </div>
        </div>
      )}
      <LogOutModal homePage={homePage} setHomePage={setHomePage} />
    </div>
  );
}

export default App;
