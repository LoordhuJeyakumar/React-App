// Import React and necessary hooks
import React, { useContext, useState } from "react";

// Import InputDataList,DataPerPage,Pagination,Table components
import InputDataList from "./InputDataList";
import DataPerPage from "./DataPerPage";
import Pagination from "./Pagination";
import Table from "./Table";
// Import DataContext from App
import { DataContext } from "../App";

// Define the EditUsers function component.
function EditUsers() {
  //Define State variables for name filter and current navigation page and content per page
  const [nameFilter, setNameFilter] = useState(0);
  const [currentNavPage, setCurrentNavPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(10);
  // Access data from DataContext
  const apiData = useContext(DataContext);

  // Calculate last and first post indices based on current page and content per page
  let lastPostIndex = currentNavPage * contentPerPage;
  let firstPostIndex = lastPostIndex - contentPerPage;

  // Filter data based on name filter
  let pageData; // Variable to store the filtered data.
  if (!nameFilter || nameFilter == "") {
    // If there's no filter, use the entire dataset.
    pageData = apiData.data.slice(firstPostIndex, lastPostIndex); // Slice the data for the current page.
  } else {
    // If there's a filter, use the filtered data directly.
    pageData = nameFilter;
  }

  // Render edit users page
  return (
    <div>
      <div className="container roll-out">
        <h1 className="text-center">Edit Users</h1>
        <div className="borderDesign"></div>
        {/* Row with DataPerPage, InputDataList, and Pagination components */}
        <div className="d-flex justify-content-evenly m-2">
          {/* DataPerPage component to select content per page */}
          <div>
            <DataPerPage
              data={apiData.data}
              setContentPerPage={setContentPerPage}
              contentPerPage={contentPerPage}
              currentNavPage={currentNavPage}
              setCurrentNavPage={setCurrentNavPage}
            />
          </div>
          <div>
            {/* InputDataList component for name filtering */}
            <InputDataList setNameFilter={setNameFilter} />
          </div>
          {/* Pagination component to navigate between pages */}
          <div className="align-items-end d-flex">
            {!nameFilter.length ? ( // Show pagination only if there's no filter.
              <Pagination
                contentPerPage={contentPerPage}
                totalData={apiData.data.length}
                currentNavPage={currentNavPage}
                setCurrentNavPage={setCurrentNavPage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Table component to display filtered data */}
        <Table pageData={pageData} actionBtnType={"edit"} />
      </div>
    </div>
  );
}

export default EditUsers;
