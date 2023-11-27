// Import React and its useState and useContext hooks
import React, { useContext, useState } from "react";

// Import the DataPerPage, InputDataList, Pagination, Table components
import DataPerPage from "./DataPerPage";
import InputDataList from "./InputDataList";
import Pagination from "./Pagination";
import Table from "./Table";
// Import the DataContext context from the App component
import { DataContext } from "../App";

//Define Function component to manage the Delete Users page
function DeleteUsers() {
  // State variables to manage name filter, current page, and content per page
  const [nameFilter, setNameFilter] = useState(0);
  const [currentNavPage, setCurrentNavPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(10);

  // Access the data from the DataContext context
  const apiData = useContext(DataContext);

  // Calculate the indices of the first and last posts to display based on the current page and content per page
  let lastPostIndex = currentNavPage * contentPerPage;
  let firstPostIndex = lastPostIndex - contentPerPage;

  // Filter the data based on the name filter
  let pageData; // Variable to store the filtered data.
  if (!nameFilter || nameFilter == "") {
    // If there's no filter, use the entire dataset.
    pageData = apiData.data.slice(firstPostIndex, lastPostIndex); // Slice the data for the current page.
  } else {
    // If there's a filter, use the filtered data directly.
    pageData = nameFilter;
  }
  // Render the Delete Users page
  return (
    <div>
      <div className="container roll-out">
        <h1 className="text-center">Delete Users</h1>
        <div className="borderDesign"></div>

        <div className="d-flex justify-content-evenly m-2">
          <div>
            {/* Display DataPerPage component to select content per page */}
            <DataPerPage
              data={apiData.data}
              setContentPerPage={setContentPerPage}
              contentPerPage={contentPerPage}
              currentNavPage={currentNavPage}
              setCurrentNavPage={setCurrentNavPage}
            />
          </div>
          <div>
            {/* Display InputDataList component to filter data by name */}
            <InputDataList setNameFilter={setNameFilter} />
          </div>
          <div className="align-items-end d-flex">
            {/* Display Pagination component if no filter is applied */}
            {!nameFilter.length ? (
              <Pagination
                contentPerPage={contentPerPage}
                totalData={apiData.data.length}
                currentNavPage={currentNavPage}
                setCurrentNavPage={setCurrentNavPage}
              />
            ) : (
              "" // Hide pagination when filter is applied
            )}
          </div>
        </div>
        {/* Display Table component to display filtered or all data */}
        <Table pageData={pageData} actionBtnType={"delete"} />
      </div>
    </div>
  );
}

export default DeleteUsers;
