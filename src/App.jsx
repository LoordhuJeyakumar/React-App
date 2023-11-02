import React from "react";
import SidePanel from "./components/SidePanel";
import TopNavBar from "./components/TopNavBar";
import ContentRowCards from "./components/ContentRowCards";
import Dashboard from "./components/Dashboard";
import ChartArea from "./components/ChartArea";
import RevenuePieChart from "./components/RevenuePieChart";
import Projects from "./components/Projects";
import ColorsSystem from "./components/ColorsSystem";
import Illustrations from "./components/Illustrations";
import Footer from "./components/Footer";
import LogOutModal from "./components/LogOutModal";

function App(props) {
  console.log(props);

  return (
    <div id="page-top">
      <div id="wrapper">
        <SidePanel />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNavBar />
            <div className="container-fluid">
              <Dashboard />
              <ContentRowCards />
              <div className="row">
                <ChartArea />
                <RevenuePieChart />
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <Projects />
                  <ColorsSystem />
                </div>
                <Illustrations />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <LogOutModal />
    </div>
  );
}

export default App;
