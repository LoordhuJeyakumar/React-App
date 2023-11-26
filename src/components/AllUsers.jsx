import React, { useContext, useEffect, useState } from "react";
// Import the DataContext from the context file
import { DataContext } from "../App";
import Table from "./Table";
import Pagination from "./Pagination";
import InputDataList from "./InputDataList";
import DataPerPage from "./DataPerPage";
import { useSearchParams } from "react-router-dom";

function AllUsers() {
  // Use the DataContext to access the global data
  const apiData = useContext(DataContext);

  const [searchParams, setSearchParams] = useSearchParams({
    filterBy: "allUsers",
  });

  /* 
  Define a state variable to track the 
    * current navigation page, 
    * number of items per page, 
    * different type of user filter, 
    * filtered user data, 
    * search filter type
  */
  const [currentNavPage, setCurrentNavPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(10);
  const [userFilter, setUserFilter] = useState(searchParams.get("filterBy"));
  const [filterdData, setFilterdData] = useState([]);
  const [nameFilter, setNameFilter] = useState(0);


  // Use useEffect to update the filtered user data whenever the userFilter state changes
  useEffect(() => {
    // Create a filtered array based on the selected userFilter
    let filterdArray = apiData.data.filter((eachData) => {
      /* 
      Return users based on userfilter
      */
      if (searchParams.get("filterBy") == "allUsers") {
        return eachData;
      } else if (searchParams.get("filterBy") == "admin") {
        if (eachData.admin) {
          return eachData;
        }
      } else if (searchParams.get("filterBy") == "user") {
        if (!eachData.admin) {
          return eachData;
        }
      } else if (searchParams.get("filterBy") == "activeUsers") {
        if (eachData.userStatus) {
          return eachData;
        }
      } else if (searchParams.get("filterBy") == "inActiveUsers") {
        if (!eachData.userStatus) {
          return eachData;
        }
      } else if (searchParams.get("filterBy") == "newUsers") {
        let dateArr = [];
        for (let i = 0; i < 7; i++) {
          const todayDate = new Date(Date.now());
          todayDate.setDate(todayDate.getDate() - i);
          dateArr.push(todayDate.getDate());
        }

        if (dateArr.length != 0) {
          if (dateArr.includes(+eachData.userCreationDate.slice(3, 5))) {
            return eachData;
          }
        }
      }
    });
    // Update the state with the filtered user data
    setFilterdData(filterdArray);
  }, [searchParams]);

  // Calculate the last index of the posts to display on the current page
  let lastPostIndex = currentNavPage * contentPerPage;
  // Calculate the first index of the posts to display on the current page
  let firstPostIndex = lastPostIndex - contentPerPage;

  // Create a variable to store the data for the current page
  let pageData;

  // Check if there is a name filter applied
  if (!nameFilter || nameFilter == "") {
    // If no name filter is applied, slice the filtered data based on the current page indices
    pageData = filterdData.slice(firstPostIndex, lastPostIndex);
  } else {
    // If a name filter is applied, use the filtered data directly
    pageData = nameFilter;
  }

  // Function to handle filter events
  const handleFilter = async (event) => {
    // Get the selected filter value from the event target
    let filter = event.target.value;
    let filterParams = searchParams.get("filterBy");

    setSearchParams({ filterBy: filter });

    // Handle different filter options
    switch (filter) {
      case "allUsers": {
        // Set the user filter to 'allUsers'
        await setUserFilter(filterParams);
        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
      case "admin": {
        // Set the user filter to 'admin'

        await setUserFilter(filterParams);

        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
      case "user": {
        // Set the user filter to 'user'
        await setUserFilter(filterParams);
        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
      case "activeUsers": {
        // Set the user filter to 'activeUsers'
        await setUserFilter(filterParams);
        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
      case "inActiveUsers": {
        // Set the user filter to 'inActiveUsers'
        await setUserFilter(filterParams);
        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
      case "newUsers": {
        // Set the user filter to 'inActiveUsers'
        setUserFilter(filterParams);
        // Reset the current navigation page to 1
        setCurrentNavPage(1);
        break;
      }
    }
  };

  return (
    <div>
      <div className="container roll-out">
        <h1 className="text-center">Users</h1>
        <div className="borderDesign"></div>
        {/* Filter options section */}
        <div className="d-lg-flex  m-3 filterBox ">
          <div className="input-group gap-2">
            <div>
              <label className="input-group-text" htmlFor="userFilter">
                Filter by
              </label>
              {/* Select dropdown for filtering users */}
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
                <option value="newUsers">New Users</option>
              </select>
            </div>
            {/* Component for selecting the number of data items to display per page */}
            <DataPerPage
              data={pageData}
              setContentPerPage={setContentPerPage}
              contentPerPage={contentPerPage}
              currentNavPage={currentNavPage}
              setCurrentNavPage={setCurrentNavPage}
            />
            {/* Component for searching users by name or id */}
            <InputDataList setNameFilter={setNameFilter} />
          </div>
          {/* Show pagination controls if no name filter is applied */}
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
        {/* Component for displaying the list of users */}
        <Table pageData={pageData} actionBtnType={"view"} />

        {/* Show pagination controls if no name filter is applied */}
        <div>
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
    </div>
  );
}

export default AllUsers;
