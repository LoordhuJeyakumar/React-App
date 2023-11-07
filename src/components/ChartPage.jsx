import React from "react";
import ChartArea from "./ChartArea";
import RevenuePieChart from "./RevenuePieChart";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartPage({ income }) {
  const getTotalIncome = () => {
    let resArr = [];
    income[0].data.map((eachMonthData) => {
      resArr.push(eachMonthData.earning);
    });
    return resArr;
  };
  const getTotalIncomeLables = () => {
    let resArr = [];
    income[0].data.map((eachMonthData) => {
      resArr.push(eachMonthData.month);
    });
    return resArr;
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
      },
    },
    scales: {
      x: {
        time: {
          unit: "month",
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 6,
        },
        maxBarThickness: 25,
      },
      y: {
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
        },
        grid: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2],
        },
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  };

  const data = {
    labels: getTotalIncomeLables(),
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: getTotalIncome(),
      },
    ],
  };

  return (
    <div>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Charts</h1>
        <p className="mb-4">
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          customization options, please visit the{" "}
          <a target="_blank" href="https://www.chartjs.org/docs/latest/">
            official Chart.js documentation
          </a>
          .
        </p>

        {/* <!-- Content Row --> */}
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <ChartArea income={income} />

            {/* <!-- Bar Chart --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
              </div>
              <div className="card-body">
                <div className="chart-bar">
                  <Bar options={options} data={data} income={income} />
                </div>
                <hr />
                Styling for the bar chart can be found in the
                <code>/js/demo/chart-bar-demo.js</code> file.
              </div>
            </div>
          </div>

          {/* <!-- Donut Chart --> */}
          <RevenuePieChart income={income} />
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
