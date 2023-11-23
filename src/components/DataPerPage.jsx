import React from "react";

function DataPerPage({
  data,
  setContentPerPage,
  contentPerPage,
  currentNavPage,
  setCurrentNavPage,
}) {
  let lastPostIndex = currentNavPage * contentPerPage;
  let firstPostIndex = lastPostIndex - contentPerPage;
  let pageData;

  pageData = data.slice(firstPostIndex, lastPostIndex);

  const handleDataPerPage = (event) => {
    setCurrentNavPage(1);
    setContentPerPage(event.target.value);
  };
  return (
    <div>
      <label className="input-group-text" htmlFor="showContent">
        Show Content
      </label>
      <select
        name="filter"
        id="showContent"
        className="form-select"
        onChange={handleDataPerPage}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}

export default DataPerPage;
