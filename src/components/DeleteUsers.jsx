import React, { useContext, useState } from "react";
import DataPerPage from "./DataPerPage";
import InputDataList from "./InputDataList";
import Pagination from "./Pagination";
import { DataContext } from "../App";
import Table from "./Table";

function DeleteUsers() {
  const [nameFilter, setNameFilter] = useState(0);
  const [currentNavPage, setCurrentNavPage] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(10);
  const apiData = useContext(DataContext);

  let lastPostIndex = currentNavPage * contentPerPage;
  let firstPostIndex = lastPostIndex - contentPerPage;
  let pageData;
  if (!nameFilter || nameFilter == "") {
    pageData = apiData.data.slice(firstPostIndex, lastPostIndex);
  } else {
    pageData = nameFilter;
  }

  return (
    <div>
      <div className="container roll-out">
        <h1 className="text-center">Delete Users</h1>
        <div className="borderDesign"></div>

        <div className="d-flex justify-content-evenly m-2">
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
            <InputDataList setNameFilter={setNameFilter} />
          </div>
          <div className="align-items-end d-flex">
            {!nameFilter.length ? (
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

        <Table pageData={pageData} actionBtnType={"delete"} />
      </div>
    </div>
  );
}

export default DeleteUsers;
