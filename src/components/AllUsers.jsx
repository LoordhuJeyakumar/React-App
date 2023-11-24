import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import Table from "./Table";
import Pagination from "./Pagination";
import { each } from "jquery";
import InputDataList from "./InputDataList";
import DataPerPage from "./DataPerPage";

function AllUsers() {
  const apiData = useContext(DataContext);
  const [currentNavPage, setCurrentNavPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(10);
  const [userFilter, setUserFilter] = useState("allUsers");
  const [filterdData, setFilterdData] = useState([]);
  const [nameFilter, setNameFilter] = useState(0);

  useEffect(() => {
    let filterdArray = apiData.data.filter((eachData) => {
      if (userFilter == "allUsers") {
        return eachData;
      } else if (userFilter == "admin") {
        if (eachData.admin) {
          return eachData;
        }
      } else if (userFilter == "user") {
        if (!eachData.admin) {
          return eachData;
        }
      } else if (userFilter == "activeUsers") {
        if (eachData.userStatus) {
          return eachData;
        }
      } else if (userFilter == "inActiveUsers") {
        if (!eachData.userStatus) {
          return eachData;
        }
      }
    });

    setFilterdData(filterdArray);
  }, [userFilter]);

  let lastPostIndex = currentNavPage * contentPerPage;
  let firstPostIndex = lastPostIndex - contentPerPage;
  let pageData;
  if (!nameFilter || nameFilter == "") {
    pageData = filterdData.slice(firstPostIndex, lastPostIndex);
  } else {
    pageData = nameFilter;
  }

  const handleFilter = (event) => {
    let filter = event.target.value;
    switch (filter) {
      case "allUsers": {
        setUserFilter("allUsers");
        setCurrentNavPage(1);
        break;
      }
      case "admin": {
        setUserFilter("admin");
        setCurrentNavPage(1);
        break;
      }
      case "user": {
        setUserFilter("user");
        setCurrentNavPage(1);
        break;
      }
      case "activeUsers": {
        setUserFilter("activeUsers");
        setCurrentNavPage(1);
        break;
      }
      case "inActiveUsers": {
        setUserFilter("inActiveUsers");
        setCurrentNavPage(1);
        break;
      }
    }
  };

  const handleFilterName = (event) => {
    let userId = Number(event.target.value.slice(0, 2));
    let nameFilterArr = apiData.data.filter((each) => {
      return each.id == userId;
    });

    setNameFilter(nameFilterArr);
  };

  const handleDataPerPage = (event) => {
    setCurrentNavPage(1);
    setContentPerPage(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Users</h1>
        <div className="borderDesign"></div>
        <div className="d-lg-flex  m-3 filterBox ">
          <div className="input-group gap-2">
            <div>
              <label className="input-group-text" htmlFor="userFilter">
                Filter by
              </label>
              <select
                className="form-select"
                id="userFilter"
                name="filter"
                onChange={handleFilter}
              >
                <option value="allUsers">All Users</option>
                <option value="admin">Admin Users</option>
                <option value="user">Normal Users</option>
                <option value="activeUsers">Active Users</option>
                <option value="inActiveUsers">IN-Active Users</option>
              </select>
            </div>
            {/*  <div>
              <label className="input-group-text" htmlFor="showContent">
                Show Content
              </label>
              <select
                name="filter"
                id="showContent"
                className="form-select"
                onChange={handleDataPerPage}
              >
                <option value="10">10</option>- <option value="25">25</option>
                <option value="50">50</option>- <option value="100">100</option>
              </select>
            </div> */}
            <DataPerPage
              data={pageData}
              setContentPerPage={setContentPerPage}
              contentPerPage={contentPerPage}
              currentNavPage={currentNavPage}
              setCurrentNavPage={setCurrentNavPage}
            />
            <InputDataList setNameFilter={setNameFilter} />
          </div>
          <div className="align-items-end mt-2 justify-content-end p-0 d-flex w-50">
            {!nameFilter.length ? (
              <Pagination
                contentPerPage={contentPerPage}
                totalData={filterdData.length}
                currentNavPage={currentNavPage}
                setCurrentNavPage={setCurrentNavPage}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <Table pageData={pageData} actionBtnType={"view"}/>
        <div>
          { !nameFilter.length ? (
            <Pagination
              contentPerPage={contentPerPage}
              totalData={filterdData.length}
              currentNavPage={currentNavPage}
              setCurrentNavPage={setCurrentNavPage}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
