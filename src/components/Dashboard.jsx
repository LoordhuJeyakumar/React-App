import React from "react";
import ChartArea from "./ChartArea";
import ContentRowCards from "./ContentRowCards";
import RevenuePieChart from "./RevenuePieChart";
import Projects from "./Projects";
import ColorsSystem from "./ColorsSystem";
import Illustrations from "./Illustrations";

function Dashboard({ income }) {
  return (
    <div>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      <ContentRowCards income={ income }/>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <ChartArea income={income} />
        </div>

        <RevenuePieChart income={income} />
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <Projects />
          <ColorsSystem />
        </div>
        <Illustrations />
      </div>
    </div>
  );
}

export default Dashboard;
