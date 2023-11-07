import React from "react";
import "../App";

function MonthlyEarnings(props) {
  const { income } = props;

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Monthly Earnings</h1>
      <div className="container-fluid">
        {income.map((year) => {
          return (
            <div className="accordion   " id="accordionExample" key={year.year}>
              <div className="card ">
                <div className="card-header">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-success btn-block text-left collapsible"
                      type="button"
                      data-toggle="collapse"
                      data-target="#testData1"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {year.year}{" "}
                      <i className="fa-solid fa-circle-chevron-down text-right"></i>
                    </button>
                  </h2>
                </div>

                <div className="row">
                  {year.data.map((data) => {
                    return (
                      <div
                        id="testData1"
                        className="collapse show col-xl-3 col-md-6 mb-4"
                        key={data.id}
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card border-left-success shadow h-100 py-2">
                          <div className="card-body">
                            <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Earnings ({data.month})
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                  ${data.earning}
                                </div>
                                <ul>
                                  <li>
                                    Direct{" "}
                                    <span className="badge badge-success">
                                      ${data.earningType.direct}
                                    </span>
                                  </li>
                                  <li>
                                    Referrel{" "}
                                    <span className="badge badge-success">
                                      ${data.earningType.referral}
                                    </span>
                                  </li>
                                  <li>
                                    Social{" "}
                                    <span className="badge badge-success">
                                      ${data.earningType.social}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyEarnings;
