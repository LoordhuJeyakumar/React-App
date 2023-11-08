import React, { useRef, useState } from "react";

function IncomeForm({ income }) {
  const [selectedYearAndMonth, setSelectedYearAndMonth] = useState(0);
  const [incomeDetails, setIncomeDetails] = useState({
    direct: 0,
    referral: 0,
    social: 0,
    totalIncomeSum: function () {
      return this.direct + this.referral + this.social;
    },
  });

  const resetBtn = useRef();
  const updateBtn = useRef();
  const closeBtn = useRef();

  const getMonth = (monthId) => {
    switch (monthId) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
    }
  };

  const handleSaveClick = (event) => {
    event.preventDefault();

    income.forEach((data) => {
      if (data.year == selectedYearAndMonth.year) {
        if (!data.data[selectedYearAndMonth.month - 1]) {
          data.data.push({
            id: selectedYearAndMonth.month,
            m: selectedYearAndMonth.month,
            month: getMonth(selectedYearAndMonth.month),
            earning: incomeDetails.totalIncomeSum(),
            earningType: {
              direct: incomeDetails.direct,
              referral: incomeDetails.referral,
              social: incomeDetails.social,
            },
          });
          resetBtn.current.click();
        } else {
          updateBtn.current.click();
        }
      } else {
        alert("Only 2023 year can be update");
        resetBtn.current.click();
      }
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    income.forEach((data) => {
      if (data.year == selectedYearAndMonth.year) {
        let obj = {
          id: selectedYearAndMonth.month,
          m: selectedYearAndMonth.month,
          month: getMonth(selectedYearAndMonth.month),
          earning: incomeDetails.totalIncomeSum(),
          earningType: {
            direct: incomeDetails.direct,
            referral: incomeDetails.referral,
            social: incomeDetails.social,
          },
        };
        data.data[selectedYearAndMonth.month - 1] = obj;
        closeBtn.current.click();
        resetBtn.current.click();
      }
    });
  };

  const handleDirectIncome = (event) => {
    setIncomeDetails(() => {
      return {
        ...incomeDetails,
        direct: +event.target.value,
      };
    });
  };

  const handleReferralIncome = (event) => {
    setIncomeDetails(() => {
      return {
        ...incomeDetails,
        referral: +event.target.value,
      };
    });
  };

  const handleSocialIncome = (event) => {
    setIncomeDetails(() => {
      return {
        ...incomeDetails,
        social: +event.target.value,
      };
    });
  };

  return (
    <div>
      <h1 className="h3 mb-0 text-gray-800">Income Details</h1>

      <div>
        <form className="d-md-flex justify-content-around align-items-center">
          <div>
            <div className="mt-4">
              <label htmlFor="monthAndYear">
                Select Month and Year <span style={{ color: "red" }}>*</span>
              </label>
              <p className="m-0 p-0" style={{ color: "red", fontSize: "13px" }}>
                Only 2023 Year can be updated, Enter year & Month in this format
                (yyyy-mm)
              </p>
              <input
                placeholder="2023-12"
                className=" w-100"
                type="month"
                id="monthAndYear"
                required
                onChange={(event) => {
                  setSelectedYearAndMonth(() => {
                    return {
                      year: +event.target.value.slice(0, 4),
                      month: +event.target.value.slice(5),
                    };
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="directIncome">Direct Income</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  onChange={handleDirectIncome}
                  id="directIncome"
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="referralIncome">Referral Income</label>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>

                <input
                  id="referralIncome"
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={handleReferralIncome}
                />
              </div>
            </div>

            <div>
              <label htmlFor="socialIncome">Social Income</label>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>

                <input
                  onChange={handleSocialIncome}
                  id="socialIncome"
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column w-50 mx-auto">
            <h4 className="text-center">Total Income</h4>

            <div className="input-group mb-3 ">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>

              <input
                id="totalIncome"
                className="form-control text-center p-0 m-0 b-0"
                type="text"
                readOnly
                style={{ fontWeight: "bolder", fontSize: "2.5em" }}
                value={incomeDetails.totalIncomeSum()}
              />
            </div>
            <div className="input-group ">
              <button
                ref={resetBtn}
                className="btn btn-danger w-100 m-2"
                type="reset"
                onClick={(event) => {
                  setIncomeDetails(() => {
                    return {
                      direct: 0,
                      referral: 0,
                      social: 0,
                      totalIncomeSum: function () {
                        return this.direct + this.referral + this.social;
                      },
                    };
                  });
                }}
              >
                Reset
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-success m-2"
              onClick={handleSaveClick}
            >
              Save
            </button>
            {/*  <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              hidden
              ref={updateBtn}
            >
              Update
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Warning
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    You have entered Year and Month already exist
                    <br />
                    Do you want overwrite the existing data.... ?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      ref={closeBtn}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleUpdate}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IncomeForm;
